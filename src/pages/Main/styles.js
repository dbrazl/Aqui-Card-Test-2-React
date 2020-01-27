import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  width: 80%;
  margin: 0 auto;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-right: 20px;
  border-radius: 10px;
  transition: background-color 1s;
  margin-bottom: 20px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: ${darken(0.05, '#357376')};
    transition: background-color 1s;
  }
`;

export const Label = styled.p``;

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

export const ListLabel = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CodeLabel = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameLabel = styled.div`
  width: 300px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BirthdayLabel = styled.div`
  width: 150px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  & + & {
    margin-top: 10px;
  }
`;

export const List = styled.div`
  height: 500px;
  position: relative;
  padding: 10px 0;
`;

export const Fade = styled.div`
  position: absolute;
  bottom: ${props => (props.bottom ? 0 : null)};
  top: ${props => (props.top ? 0 : null)};
  left: 0;
  z-index: 1;
  width: 100%;
  height: 20px;
  background-image: ${props =>
    props.to ? `linear-gradient(${props.to}, #357376, transparent)` : null};
`;

export const SubSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 60px;
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

export const Space80 = styled.div`
  width: 80px;
`;
