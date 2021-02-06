import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { Cointainer, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      // Garante que os erros serão limpos
      formRef.current?.setErrors({});

      console.log(data);

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(
          1,
          'A senha deve possuir pelo menos 6 caracteres',
        ),
      });

      // abortEarly: colocado para validar todos campos ao fazer a validação
      // caso contrário ele aborta no primeiro erro
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(JSON.stringify(error));
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Cointainer>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft /> Voltar para logon
        </Link>
      </Content>
    </Cointainer>
  );
};

export default Signup;
