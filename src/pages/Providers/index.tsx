import React, { useState, useMemo, useEffect } from 'react';

import { FiPower, FiCalendar, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  ListProviders,
  Provider,
  Sidebar,
} from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Provider {
  id: string;
  name: string;
  tel: string;
}

const Providers: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get<Provider[]>('providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const allProviders = useMemo(() => {
    return providers;
  }, [providers]);

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
            <Link to="#">Adicionar novo fornecedor</Link>
          </li>

          <li>
            <Link to="#">Fluxo de caixa</Link>
          </li>
        </ul>
      </Sidebar>

      <Content>
        <ListProviders>
          <h1>Fornecedores</h1>

          {allProviders.map((provider) => (
            <Provider>
              <div>
                <li>{provider.name}</li>
                <li>{provider.tel}</li>
              </div>
            </Provider>
          ))}
        </ListProviders>
      </Content>
    </Container>
  );
};

export default Providers;
