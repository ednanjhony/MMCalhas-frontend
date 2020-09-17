import React, { useState, FormEvent } from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Form,
  Appointment,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

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
  const [newAppointment, setNewAppointment] = useState('');
  const [appointments, setAppoinments] = useState<Appointment[]>([]);

  const { signOut, user } = useAuth();

  async function handleAddAppointment(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      const response = await api.post<Appointment>(
        `appointments/${newAppointment}`,
      );

      const appointment = response.data;

      setAppoinments([...appointments, appointment]);
      setNewAppointment('');
    } catch (err) {
      throw new Error('Algo deu errado.');
    }
  }

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
        <Form>
          <input
            value={newAppointment}
            onChange={(e) => setNewAppointment(e.target.value)}
            placeholder="Digite o nome do cliente"
          />
        </Form>
      </Content>
    </Container>
  );
};

export default CreateAppointments;
