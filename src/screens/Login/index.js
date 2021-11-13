import React from 'react';

// components:
import { Input, Button } from 'components';

// styles:
import Wrapper from './styles';

const Login = () => {
  return (
    <Wrapper>
      <div className='inputs-container'>
        <Input label='Email' placeholder='books@ioasys.com.br' />
        <Input
          label='Senha'
          placeholder='••••••••••••'
          buttonText='Entrar'
          onButtonClick={() => ''}
          errorMessage='Email e/ou senha incorretos.'
          type='password'
        />
      </div>
    </Wrapper>
  );
};

export default Login;
