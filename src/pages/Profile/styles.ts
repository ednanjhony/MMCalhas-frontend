import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #fff;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #414141;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto;

  place-content: center;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
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

    input[old_password]
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #414141;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#414141')};
    }
  }
`;

export const Sidebar = styled.div`
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  top: 150px;
  z-index: 9999;
  transition: width 200ms ease;

  ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    li {
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
      height: 5rem;
      text-decoration: none;
      filter: grayscale(100%) opacity(0.7);
      transition: 1s;
    }

    a:hover {
      filter: grayscale(0%) opacity(0.5);
      background: #414141;
    }

    span {
      display: none;
      margin-left: 1rem;
      color: black;
    }

    svg {
      min-width: 2rem;
      margin: 0 1.5rem;
      color: black;
    }

    ul:hover {
      width: 16rem;
      height: 100%;
      background-color: #fff;
    }

    ul:hover span {
      display: block;
    }
  }
`;
