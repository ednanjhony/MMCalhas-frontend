import styled from 'styled-components';
import { shade } from 'polished';

import calhas from '../../assets/calhas.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1,
    h2 {
      margin-bottom: 24px;
    }

    input {
      background: #fff;
      border-radius: 10px;
      border: 1px solid #fff;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #414141;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#414141')};
      }
    }

    a {
      color: #414141;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#414141')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${calhas}) no-repeat center;
  background-size: cover;
`;
