import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import {ButtonWrapper, LoginForm, LoginSection, Title1} from "./LoginPage.styled";
import {InputSt} from "./InputSt/InputSt";
import {ButtonSt} from "./Button/ButtonSt";

export const LoginPage = ({changeTypePage, innerRef, typeFormSet, setUserData, sendData}) => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [sendActive, setSendActive] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        validation()
    }, [loginEmail, loginPassword])
    async function loginHandler(e){
        e.preventDefault();
        let jsonStr;
        const data = {
            email: loginEmail,
            password: loginPassword
        }
        jsonStr = JSON.stringify(data)
        typeFormSet(true)
        setUserData(jsonStr)
        let response = await sendData()
        if (response.code === 200) {
            setLoginEmail('')
            setLoginPassword('')
            navigate("/");
        }
    }
    function validation(){
        let emailValid = false, passValid = false;
        if (loginEmail.length > 5) emailValid = true
        if (loginPassword.length > 5) passValid = true

        setSendActive(emailValid && passValid)
    }

  return (
    <LoginSection ref={innerRef}>
      <LoginForm>
        <Title1>Login</Title1>
          <InputSt placeholder={'Email'} type={'Email'} setFunc={setLoginEmail} value={loginEmail} req={true} />
          <InputSt placeholder={'password'} type={'Password'} setFunc={setLoginPassword} value={loginPassword} req={true}  />
          <ButtonWrapper>
            <ButtonSt buttonFunc={loginHandler} text={'SIGN IN'} disabled={!sendActive} />
            <ButtonSt buttonFunc={changeTypePage} text={'CREATE ACCOUNT'}  />
          </ButtonWrapper>
      </LoginForm>
    </LoginSection>
  );
};
