import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Validations
import { useFormik } from 'formik';
import * as Yup from 'yup';

// components:
import { Input, IoasysLogo } from 'components';

// actions:
import * as AUTH_ACTIONS from 'store/ducks/auth/actions';

// styles:
import Wrapper from './styles';

const Login = () => {
  const {
    auth: { isAuth, error },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { push } = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const validateEmail = (email) => {
    if (
      email &&
      email.indexOf('@') !== -1 &&
      email.substr(0, email.indexOf('@')).match(/[A-Za-z]+/)
    ) {
      return true;
    }
    return false;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Por favor, informe seu e-mail')
        .test((email) => (email && validateEmail(email)) || false),
      password: Yup.string().required('Por favor, informe sua senha'),
    }),
    onSubmit: async (values) => {
      dispatch(AUTH_ACTIONS.loginRequest(values));
    },
  });

  const { setFieldValue, handleSubmit, setErrors } = formik;

  useEffect(() => {
    if (error.isError) {
      setErrors({ responseMessage: error.message });
    }
  }, [error]);

  useEffect(() => {
    if (isAuth) {
      push('/dashboard');
    }
  }, [isAuth]);

  return (
    <Wrapper>
      <form method='POST' onSubmit={handleSubmit}>
        <IoasysLogo />
        <Input
          label='Email'
          id='email'
          name='email'
          placeholder='books@ioasys.com.br'
          onChangeText={setFieldValue}
        />
        <Input
          label='Senha'
          id='password'
          name='password'
          placeholder='••••••••••••'
          onChangeText={setFieldValue}
          buttonText='Entrar'
          errorMessage={
            formik?.errors?.responseMessage ||
            formik?.errors?.email ||
            formik?.errors?.password ||
            ''
          }
          type='password'
        />
      </form>
    </Wrapper>
  );
};

export default Login;
