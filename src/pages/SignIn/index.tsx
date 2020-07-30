import React from 'react';
// import {  } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>MM Calhas</h1>

      <form>
        <h2>Faça seu Logon</h2>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
