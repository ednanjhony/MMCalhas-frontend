import React, { useState, useMemo, useEffect } from 'react';

import { FiPower, FiCalendar, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  ListAppointments,
  Appointment,
  Sidebar,
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

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<Appointment[]>('appointments').then((response) => {
      setAppointments(response.data);
    });
  }, []);

  const allAppointments = useMemo(() => {
    return appointments;
  }, [appointments]);

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

      <Sidebar>
        <ul>
          <li>
            <Link to="/">
              <FiCalendar />
              Orçamentos
            </Link>
          </li>

          <li>
            <Link to="create_appointments">
              <FiPlus />
              Criar orçamentos
            </Link>
          </li>

          <li>
            <Link to="providers">Fornecedores</Link>
          </li>

          <li>
            <Link to="create_providers">Adicionar novo fornecedor</Link>
          </li>

          <li>
            <Link to="#">Fluxo de caixa</Link>
          </li>
        </ul>
      </Sidebar>

      <Content>
        <ListAppointments>
          <h1>Orçamentos</h1>

          {allAppointments.map((appointment) => (
            <Appointment>
              <div>
                <li>{appointment.name}</li>
                <li>{appointment.address}</li>
                <li>{appointment.tel}</li>
                <li>{appointment.date}</li>
                <li>{appointment.done}</li>
                <li>{appointment.desc}</li>
              </div>
            </Appointment>
          ))}
        </ListAppointments>
      </Content>
    </Container>
  );
};

export default Dashboard;
