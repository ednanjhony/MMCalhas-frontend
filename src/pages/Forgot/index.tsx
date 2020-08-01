import React from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Forgot: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <h1>MM Calhas</h1>

        <Form onSubmit={handleSubmit}>
          <h2>Recupere sua senha</h2>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Button type="submit">Recuperar senha</Button>

          <a href="forgot">
            <FiArrowLeft />
            Voltar para o logon
          </a>
        </Form>
      </Content>
    </Container>
  );
};

export default Forgot;
