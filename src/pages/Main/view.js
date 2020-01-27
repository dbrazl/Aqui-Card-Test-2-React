import React from 'react';
import PropTypes from 'prop-types';

import PerfectScrollbar from 'react-perfect-scrollbar';
import InputMask from 'react-input-mask';
import {
  FiPlus,
  FiSearch,
  FiSave,
  FiTrash2,
  FiRefreshCw,
} from 'react-icons/fi';

import Header from '../../components/Header';
import Modal from '../../components/Modal';
import {
  Container,
  Section,
  ButtonSearch,
  Label,
  InputBoard,
  TextInput,
  Row,
  ListLabel,
  CodeLabel,
  NameLabel,
  BirthdayLabel,
  List,
  Fade,
  IconButton,
  SubSection,
  Space80,
} from './styles';

export default function View({ propsView }) {
  const {
    users,
    newData,
    onChangeName,
    onChangeBirthday,
    haveChange,
    saveChanges,
    resetChanges,
    deleteUser,
    searchUser,
    showModal,
    setShowModal,
    saveNewUser,
  } = propsView;

  const formatCode = code => {
    const actualCode = `${code}`;
    let formattedCode = '#';

    if (actualCode.length < 5) {
      const numberOfZeros = 5 - actualCode.length;

      for (let i = 0; i < numberOfZeros; i += i + 1) {
        formattedCode = formattedCode.concat('0');
      }

      formattedCode = formattedCode.concat(actualCode);
      return formattedCode;
    }

    return formattedCode.concat(actualCode);
  };

  const formatDate = date => {
    const [day, month, year] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const changeColor = item => {
    users.forEach(user => {
      if (item.code === user.code) {
        console.log('item.code', item.code, 'user.code', user.code);
        console.log('item.name', item.name, 'user.name', user.name);
        if (item.name !== user.name) {
          console.log('ENTROU');
          return 1;
        }

        return 0;
      }
    });
  };

  return (
    <>
      <Header />

      <Container>
        <Section>
          <ButtonSearch
            onClick={() => {
              setShowModal(true);
            }}
          >
            <FiPlus size={24} color="#fff" />
            <Label>Adicionar novo usuário</Label>
          </ButtonSearch>

          <SubSection>
            {haveChange && (
              <>
                <IconButton onClick={saveChanges} marginRight={20}>
                  <FiSave size={24} color="#fff" />
                </IconButton>

                <IconButton
                  onClick={() => {
                    resetChanges();
                  }}
                  marginRight={20}
                >
                  <FiRefreshCw size={24} color="#fff" />
                </IconButton>
              </>
            )}

            <InputBoard>
              <FiSearch size={24} color="#fff" />
              <TextInput
                placeholder="Pesquisar..."
                onChange={e => searchUser(e.target.value)}
              />
            </InputBoard>
          </SubSection>
        </Section>

        <ListLabel>
          <CodeLabel>
            <Label>Código</Label>
          </CodeLabel>

          <NameLabel>
            <Label>Nome</Label>
          </NameLabel>

          <BirthdayLabel>
            <Label>Aniversário</Label>
          </BirthdayLabel>

          <Space80 />
        </ListLabel>

        <List>
          <Fade to="to bottom" top />
          <PerfectScrollbar>
            {newData.map((item, index) => (
              <Row key={item.code}>
                <InputBoard width={110}>
                  <TextInput
                    placeholder={formatCode(item.code)}
                    disabled
                    textAlign="center"
                  />
                </InputBoard>

                <InputBoard width={300} change={changeColor(item)}>
                  <TextInput
                    placeholder={item.name}
                    onChange={e => onChangeName(e.target.value, item.code)}
                  />
                </InputBoard>

                <InputBoard
                  width={150}
                  // change={item.birthday !== users[index].birthday ? 1 : 0}
                >
                  <InputMask
                    mask="99/99/9999"
                    value={item.birthday}
                    onChange={e => onChangeBirthday(e.target.value, item.code)}
                  >
                    {inputProps => (
                      <TextInput
                        placeholder={formatDate(item.birthday)}
                        textAlign="center"
                      />
                    )}
                  </InputMask>
                </InputBoard>

                <IconButton
                  onClick={() => deleteUser(item.code)}
                  marginLeft={20}
                >
                  <FiTrash2 size={24} color="#fff" />
                </IconButton>
              </Row>
            ))}
          </PerfectScrollbar>
          <Fade to="to top" bottom />
        </List>
      </Container>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
          onSave={saveNewUser}
        />
      )}
    </>
  );
}

View.propTypes = {
  propsView: PropTypes.any,
};

View.defaultProps = {
  propsView: [],
};
