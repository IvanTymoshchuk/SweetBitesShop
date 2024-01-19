import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {ButtonWrapper, LoginForm, LoginSection, Title1} from "./LoginPage.styled";
import {InputSt} from "./InputSt/InputSt";
import {ButtonSt} from "./Button/ButtonSt";

export const RegPage = ({innerRef, changeTypePage, typeFormSet, setUserData, sendData}) => {
    const navigate = useNavigate();
    const [registerName, setRegisterName] = useState('')
    const [registerSurname, setRegisterSurname] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [sendActive, setSendActive] = useState(false)

    useEffect(() => {
        validation()
    }, [registerEmail, registerPassword,registerName, registerSurname])

    async function registerHandler(e){
        e.preventDefault();
        let jsonStr;
        const data = {
            email: registerEmail,
            password: registerPassword,
            name: registerName,
            surname: registerSurname
        }
        jsonStr = JSON.stringify(data)
        typeFormSet(false)
        setUserData(jsonStr)

        let response = await sendData()
        if (response.code === 200) {
            setRegisterName('')
            setRegisterSurname('')
            setRegisterEmail('')
            setRegisterPassword('')
            navigate("/");
        }
    }
    function validation(){
        let emailValid = false, passValid = false, nameValid = false, surnameValid = false;
        if (registerEmail.length > 5) emailValid = true
        if (registerPassword.length > 5) passValid = true
        if (registerName.length > 5) nameValid = true
        if (registerSurname.length > 5) surnameValid = true

        setSendActive(emailValid && passValid && nameValid && surnameValid)
    }

  return (
    <LoginSection ref={innerRef}>
      <LoginForm>
        <Title1>Create account</Title1>
          <ButtonWrapper>
              <InputSt placeholder={'First name'} type={'text'} setFunc={setRegisterName} value={registerName} req={true} />
              <InputSt placeholder={'Last name'} type={'text'} setFunc={setRegisterSurname} value={registerSurname} req={true}  />
          </ButtonWrapper>
          <InputSt placeholder={'Email'} type={'email'} setFunc={setRegisterEmail} value={registerEmail} req={true} />
          <InputSt placeholder={'password'} type={'password'} setFunc={setRegisterPassword} value={registerPassword} req={true}  />
          <ButtonWrapper>
            <ButtonSt buttonFunc={registerHandler} text={'SIGN UP'} disabled={!sendActive} />
            <ButtonSt buttonFunc={changeTypePage} text={'SIGN IN'}  />
          </ButtonWrapper>
      </LoginForm>
    </LoginSection>
  );
};
