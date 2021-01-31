import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Cointainer, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const Signin: React.FC = () => {
  return (
    <Cointainer>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="/">Esqueci minha senha</a>
        </form>

        <a href="/">
          <FiLogIn /> Criar conta
        </a>
      </Content>
      <Background />
    </Cointainer>
  );
};

export default Signin;
