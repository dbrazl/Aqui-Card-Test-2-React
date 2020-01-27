import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

export const ActivedHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 50px;
  height: 50px;
`;

export const Label = styled.p`
  font-size: 24px;
  margin-left: 10px;
  color: #77aca8;
`;
