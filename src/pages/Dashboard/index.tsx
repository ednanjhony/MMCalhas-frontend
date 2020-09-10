import React from 'react';

import { FiPower, FiCalendar } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  ListAppointments,
  NextAppointment,
} from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

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

          <NextAppointment>
            <div>
              <span>Cliente</span>
              <span>Rua feliz, 1800, Jd amanda</span>
              <span>Tel: 4560-3232</span>
              <span>10/08</span>
              <span>Pendente</span>
              <span>Cliente nao estava em casa</span>
            </div>
          </NextAppointment>
        </ListAppointments>
      </Content>
    </Container>
  );
};

export default Dashboard;
