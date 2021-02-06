import React from 'react';
import { FiUser, FiLock, FiMail, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Cointainer, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  function handleSubmit(data: string): void {
    console.log(data);
  }

  return (
    <Cointainer>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
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
        </Form>

        <a href="/">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Cointainer>
  );
};

export default Signup;
