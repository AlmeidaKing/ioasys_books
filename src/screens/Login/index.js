import React from 'react';
import { useHistory } from 'react-router-dom';

// components:
import { Input, IoasysLogo } from 'components';

// styles:
import Wrapper from './styles';

const Login = () => {
  const { push } = useHistory();

  return (
    <Wrapper>
      <div className='inputs-container'>
        <IoasysLogo />
        <Input label='Email' placeholder='books@ioasys.com.br' />
        <Input
          label='Senha'
          placeholder='••••••••••••'
          buttonText='Entrar'
          onButtonClick={() => push('/dashboard')}
          errorMessage='Email e/ou senha incorretos.'
          type='password'
        />
      </div>
    </Wrapper>
  );
};

export default Login;
