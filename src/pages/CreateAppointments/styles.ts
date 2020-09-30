import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #fff;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 30px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #000;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 650px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  a {
    &:hover {
      opacity: 0.5;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #414141;
    }

    h2 {
      color: #f4ede8;
      font-size: 20px;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  justify-content: center;

  Form {
    width: 600px;
    text-align: center;

    > h1 {
      font-size: 36px;
      border-bottom: 1px solid #fff;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }
`;

export const Sidebar = styled.div`
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  top: 130px;
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
