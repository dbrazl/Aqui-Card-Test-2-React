import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FiSave, FiX } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import {
  ModalContainer,
  Modal,
  Row,
  InputBoard,
  TextInput,
  IconButton,
} from './styles';

export default function ModalComponent({ closeModal, onSave }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');

  const formatDate = date => {
    const [day, month, year] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const refreshAndClose = () => {
    setName('');
    setBirthday('');
    closeModal();
  };

  const saveAndClose = () => {
    onSave(name, birthday);
    closeModal();
  };

  return (
    <ModalContainer
      id="modal-container"
      onClick={e => (e.target.id === 'modal-container' ? closeModal() : null)}
    >
      <Modal id="modal" onClick={() => {}}>
        <Row>
          <InputBoard width={300}>
            <TextInput
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputBoard>

          <InputBoard
            width={150}
            // change={item.birthday !== users[index].birthday ? 1 : 0}
          >
            <InputMask
              mask="99/99/9999"
              value={birthday || `00/00/0000`}
              onChange={e => setBirthday(e.target.value)}
            >
              {inputProps => (
                <TextInput
                  placeholder={formatDate(birthday)}
                  textAlign="center"
                />
              )}
            </InputMask>
          </InputBoard>

          <IconButton onClick={() => saveAndClose()} marginLeft={20}>
            <FiSave size={24} color="#fff" />
          </IconButton>

          <IconButton onClick={() => refreshAndClose()} marginLeft={20}>
            <FiX size={24} color="#fff" />
          </IconButton>
        </Row>
      </Modal>
    </ModalContainer>
  );
}

ModalComponent.propTypes = {
  closeModal: PropTypes.func,
  onSave: PropTypes.func,
};

ModalComponent.defaultProps = {
  closeModal: () => {},
  onSave: () => {},
};
