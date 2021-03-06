import React, { useState, useEffect } from 'react';

import {
  FiPower,
  FiCalendar,
  FiPlus,
  FiTruck,
  FiDollarSign,
  FiEdit,
} from 'react-icons/fi';
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
  const [search, setSearch] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);

  const { signOut, user } = useAuth();

  

  useEffect(() => {
    api.get<Appointment[]>('appointments').then((response) => {
      setAppointments(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredAppointments(
      appointments.filter(appointment => {
        return appointment.name.toLowerCase().includes(search.toLowerCase()) ||
        appointment.address.toLowerCase().includes(search.toLowerCase()) ||
        appointment.date.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, appointments]);

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
              <span>Orçamentos</span>
            </Link>
          </li>

          <li>
            <Link to="create_appointments">
              <FiPlus />
              <span>Criar orçamentos</span>
            </Link>
          </li>

          <li>
            <Link to="providers">
              <FiTruck />
              <span>Fornecedores</span>
            </Link>
          </li>

          <li>
            <Link to="create_providers">
              <FiPlus />
              <span>Adicionar novo fornecedor</span>
            </Link>
          </li>

          <li>
            <Link to="cash_flow">
              <FiDollarSign />
              <span>Fluxo de caixa</span>
            </Link>
          </li>

          <li>
            <Link to="create_cash_flow">
              <FiPlus />
              <span>Adicionar em Fluxo de caixa</span>
            </Link>
          </li>
        </ul>
      </Sidebar>

      <Content>
        <ListAppointments>
          <h1>Orçamentos</h1>

          <input
           type="text" 
           placeholder="Buscar" 
           onChange={ e => setSearch(e.target.value) }
          />

          {[...filteredAppointments].reverse().map((appointment) => (
            <Appointment key={appointment.id} >
              <div>
                <li>{appointment.name}</li>
                <li>{appointment.address}</li>
                <li>{appointment.tel}</li>
                <li>{appointment.date}</li>
                <li>{appointment.done}</li>
                <li>{appointment.desc}</li>
                <Link to="/update_appointments">
                  <FiEdit />
                </Link>
              </div>
            </Appointment>
          ))}
        </ListAppointments>
      </Content>
    </Container>
  );
};

export default Dashboard;
