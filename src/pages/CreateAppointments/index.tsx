import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Appointment,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface Appointment {
  id: string;
  name: string;
  address: string;
  tel: string;
  date: string;
  done: boolean;
  desc: string;
}

const CreateAppointments: React.FC = () => {
  const { signOut, user } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: Appointment) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio'),
          address: Yup.string().required('E-mail obrigatorio'),
          tel: Yup.string(),
          date: Yup.string().required('Data obrigatoria'),
          done: Yup.boolean().required('Campo obrigatorio'),
          desc: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/appointments', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Orçamento registrado com sucesso',
          description: 'Voce ja pode visualizar no dashboard',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current?.setErrors(error);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar orçamento',
          description:
            'Ocorreu um erro ao cadastrar orçamento, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>MMCalhas</h1>

          <Profile>
            <Link to="/profile">
              <img src={user.avatar_url} alt={user.name} />
            </Link>
            <div>
              <span>Bem-vindo</span>

              <h2>{user.name}</h2>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastre um orçamento</h1>

          <Input name="name" placeholder="Nome" />
          <Input name="address" placeholder="Endereço" />
          <Input name="tel" placeholder="Telefone" />
          <Input name="date" placeholder="Data" />
          <Input
            name="done"
            placeholder="Orçamento ja foi feito ? True or False"
          />
          <Input name="desc" placeholder="Descriçao" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateAppointments;
