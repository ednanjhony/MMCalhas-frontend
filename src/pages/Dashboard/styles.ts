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
`;

export const ListAppointments = styled.div`
  flex: 1;
  margin-right: 120px;

  > h1 {
    font-size: 36px;
    border-bottom: 1px solid #fff;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Appointment = styled.ul`
  & + div {
    margin-top: 16px;
  }

  div {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 12px;
    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: #414141;
    }

    li {
      display: flex;
      color: #414141;
    }

    li + li {
      font-size: 13px;
      margin-left: 5px;
    }
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  width: 200px;
  top: 125px;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  transition: width 0.3s ease;
  cursor: pointer;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
  &:hover {
    width: 250px;
  }

  @media screen and (min-width: 600px) {
    width: 70px;
  }

  ul {
    list-style-type: none;
    color: white;
    &:first-child {
      padding-top: 1.5rem;
    }

    li {
      padding-bottom: 4rem;

      a {
        position: relative;
        display: block;
        top: 10px;
        padding-left: 25px;
        padding-right: 15px;
        transition: all ease;
        margin-left: 25px;
        margin-right: 10px;
        text-decoration: none;
        color: #414141;
        font-weight: 100;
        font-size: 15px;
        &:after {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 2px;
          opacity: 0;
          transition: all ease;
          z-index: -10;
        }
      }
      &:hover a:after {
        opacity: 1;
      }

      svg {
        width: 26px;
        height: 26px;
        position: relative;
        left: -25px;
        cursor: pointer;
        @media screen and (min-width: 600px) {
          width: 32px;
          height: 32px;
          left: -15px;
        }
      }
    }
  }
`;
