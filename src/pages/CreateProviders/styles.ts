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
