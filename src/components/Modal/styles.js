import styled from 'styled-components';
import { darken } from 'polished';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 800px;
  height: 150px;
  border-radius: 10px;
  background-color: #357376;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  padding: 10px;
  margin-right: ${props => (props.marginRight ? props.marginRight : null)}px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : null)}px;
  border-radius: 10px;
  transition: background-color 1s;

  &:hover {
    background-color: ${darken(0.05, '#357376')};
    transition: background-color 1s;
  }
`;

export const InputBoard = styled.div`
  background-color: ${props => (props.change ? '#E4AC3E' : '#5b9490')};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${props => (props.width ? props.width : null)}px;

  & + & {
    margin-left: 20px;
  }
`;

export const TextInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  padding-left: 10px;
  background: none;
  border: 0;
  color: #fff;
  height: 100%;
  width: 100%;
  margin-right: 10px;
  text-align: ${props => (props.textAlign ? props.textAlign : null)};

  &::-webkit-input-placeholder {
    color: #fff;
  }

  &:-ms-input-placeholder {
    color: #fff;
  }

  &::placeholder {
    color: #fff;
  }
`;
