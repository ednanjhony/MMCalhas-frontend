import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Forgot: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatorio')
          .email('Digite um e-mail valido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <h1>MM Calhas</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
