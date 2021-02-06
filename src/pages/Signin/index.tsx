import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Cointainer, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
  return (
    <Cointainer>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="Password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

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
