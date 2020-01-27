import React from 'react';

import logo from '../../assets/logo.png';
import { Container, ActivedHeader, Image, Label } from './styles';

export default function Header() {
  return (
    <Container>
      <ActivedHeader>
        <Image src={logo} />
        <Label>Aqui! Card Test</Label>
      </ActivedHeader>
    </Container>
  );
}
