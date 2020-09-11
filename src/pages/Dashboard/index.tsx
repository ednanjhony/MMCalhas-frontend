import React, { useState, useMemo, useEffect } from 'react';

import { FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  ListAppointments,
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

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const { signOut, user } = useAuth();

  // maintenance
  useEffect(() => {
    async function loadList() {
      const response = await api.get('appointments');

      const data = response.data.map((appointment) => ({
        ...appointment,
      }));

      setAppointments(data);
    }

    loadList();
  }, [appointments]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>MMCalhas</h1>

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
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
        <ListAppointments>
          <h1>Orçamentos</h1>

          {showAppointments.map((appointment) => (
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
