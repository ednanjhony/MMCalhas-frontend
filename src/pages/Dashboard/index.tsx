import React, { useState, useMemo, useEffect } from 'react';

import {
  FiPower,
  FiCalendar,
  FiPlus,
  FiTruck,
  FiDollarSign,
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
  Pagination,
  PaginationButton,
  PaginationItem,
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
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(4);
  const [pages, setPages] = useState([] as any);

  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<Appointment[]>('appointments').then((response) => {
      setTotal(response.headers['x-total-count']);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i += 1) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
      setAppointments(response.data);
    });
  }, [limit, total]);

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

          <input type="search" placeholder="Buscar" />

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
      <Pagination>
        <div>{total}</div>
        <PaginationButton>
          {pages.map((page) => (
            <PaginationItem>{page}</PaginationItem>
          ))}
        </PaginationButton>
      </Pagination>
    </Container>
  );
};

export default Dashboard;
