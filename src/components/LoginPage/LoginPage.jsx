import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonWrapper, LoginForm, LoginSection, Title1 } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import { ButtonSt } from './Button/ButtonSt';
import { validationEmail, validationPassword } from '../../utils/validations';

export const LoginPage = ({ changeTypePage, innerRef, typeFormSet, setUserData, sendData }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [validation, setValidation] = useState({
    password: { validation: false, message: [] },
    email: { validation: false, message: '' },
  });
  const navigate = useNavigate();


  async function loginHandler() {
    let jsonStr;
    const data = {
      email: loginEmail,
      password: loginPassword,
    };
    jsonStr = JSON.stringify(data);
    typeFormSet(true);
    setUserData(jsonStr);
    let response = await sendData();
    if (response.code === 200) {
      setLoginEmail('');
      setLoginPassword('');
      navigate('/profile');
    }
  }

  function validationData(e) {
    e.preventDefault();
    let emailValid, passValid;
    emailValid = validationEmail(loginEmail)
    passValid = validationPassword(loginPassword)
    if (emailValid.validation && passValid.validation){
      return loginHandler()
    } else{
      setValidation({email: emailValid, password: passValid})
    }
  }

  return (
    <LoginSection ref={innerRef}>
      <LoginForm>
        <Title1>Login</Title1>
        <InputSt placeholder={'Email'} type={'Email'} errorMessages={validation.email.message} setFunc={setLoginEmail} value={loginEmail} req={true} />
        <InputSt placeholder={'password'} type={'Password'} errorMessages={validation.password.message} setFunc={setLoginPassword} value={loginPassword}
                 req={true} />
        <ButtonWrapper>
          <ButtonSt buttonFunc={validationData} text={'SIGN IN'} />
          <ButtonSt buttonFunc={changeTypePage} text={'CREATE ACCOUNT'} />
        </ButtonWrapper>
      </LoginForm>
    </LoginSection>
  );
};
