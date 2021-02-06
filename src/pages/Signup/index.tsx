import React from 'react';
import { FiUser, FiLock, FiMail, FiArrowLeft } from 'react-icons/fi';

import { Cointainer, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  return (
    <Cointainer>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="Password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Cointainer>
  );
};

export default Signup;
