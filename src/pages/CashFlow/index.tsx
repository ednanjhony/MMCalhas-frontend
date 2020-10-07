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
  Cashflow,
  Total,
  Sidebar,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface CashFlow {
  id: string;
  name: string;
  date: string;
  price: number;
  total: number;
  desc: string;
}

const CashFlow: React.FC = () => {
  const [cashFlow, setCashFlow] = useState<CashFlow[]>([]);

  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<CashFlow[]>('Cashflow').then((response) => {
      setCashFlow(response.data);
    });
  }, []);

  const allCashFlow = useMemo(() => {
    return cashFlow;
  }, [cashFlow]);

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
          <h1>Fluxo de caixa</h1>

          <Cashflow>
            <div>
              <li>Jubilau</li>
              <li>02/10/2020</li>
              <li>R$ 1.200,00</li>
              <li>
                10 Metros de calha / 10 metros de Rufo / Tampas: 02 / Bocal: 01
              </li>
            </div>

            <div>
              <li>Jubilau</li>
              <li>02/10/2020</li>
              <li>R$ 1.200,00</li>
              <li>
                10 Metros de calha / 10 metros de Rufo / Tampas: 02 / Bocal: 01
              </li>
            </div>

            <div>
              <li>Jubilau</li>
              <li>02/10/2020</li>
              <li>R$ 1.200,00</li>
              <li>
                10 Metros de calha / 10 metros de Rufo / Tampas: 02 / Bocal: 01
              </li>
            </div>

            <div>
              <li>Jubilau</li>
              <li>02/10/2020</li>
              <li>R$ 1.200,00</li>
              <li>
                10 Metros de calha / 10 metros de Rufo / Tampas: 02 / Bocal: 01
              </li>
            </div>
          </Cashflow>

          <Total>
            <li>Total: R$ 4.800,00</li>
          </Total>
          {allCashFlow.map((cashFlow) => (
            <li>Fake</li>
          ))}
        </ListAppointments>
      </Content>
    </Container>
  );
};

export default CashFlow;
