import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonPrev, ButtonWrapper, LoginForm, LoginSection } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import { ButtonSt } from './Button/ButtonSt';
import { Titles } from '../Title/Title';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { RegStep0 } from './RegStep0';
import { RegStep1 } from './RegStep1';
import { RegStep2 } from './RegStep2';
import { RegCounter } from './RegCounter/RegCounter';
import { validationEmail, validationPassword, validationPhone, validationString } from '../../utils';

export const RegPage = ({ innerRef, changeTypePage, typeFormSet, setUserData, sendData }) => {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerSurname, setRegisterSurname] = useState('');
  const [registerNumber, setRegisterNumber] = useState(null);
  const [registerCountry, setRegisterCountry] = useState('');
  const [registerStreet, setRegisterStreet] = useState('');
  const [validation, setValidation] = useState({
    password: { validation: false, message: [] },
    email: { validation: false, message: '' },
    name: { validation: false, message: '' },
    surname: { validation: false, message: '' },
    number: { validation: false, message: '' },
  });

  const step0Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const [registerStep, setRegisterStep] = useState(0);
  const nodeRef = registerStep === 0 ? step0Ref : registerStep === 1 ? step1Ref : step2Ref;



  async function registerHandler(e) {
    e.preventDefault();
    let jsonStr;
    const data = {
      email: registerEmail,
      password: registerPassword,
      name: registerName,
      surname: registerSurname,
    };
    jsonStr = JSON.stringify(data);
    typeFormSet(false);
    setUserData(jsonStr);

    let response = await sendData();
    if (response.code === 200) {
      setRegisterName('');
      setRegisterSurname('');
      setRegisterEmail('');
      setRegisterPassword('');
      navigate('/');
    }
  }

  function changeRegPage(type, e) {
    e.preventDefault();
    if (type === 'next' && registerStep !== 2) {
      if (registerStep === 0){
        let emailValid, passValid;
        emailValid = validationEmail(registerEmail)
        passValid = validationPassword(registerPassword)
        if (emailValid.validation && passValid.validation){
          setRegisterStep(registerStep + 1);
        } else{
          validation.email = emailValid
          validation.password = passValid
        }
      }
      if (registerStep === 1){
        let nameValid, surnameValid, numberValid;
        nameValid = validationString(registerName, 'name')
        surnameValid = validationString(registerSurname, 'surname')
        numberValid = validationPhone(registerNumber)

        console.log(nameValid)
        console.log(surnameValid)
        console.log(numberValid)
        if (nameValid.validation && surnameValid.validation && numberValid.validation){
          setRegisterStep(registerStep + 1);
        } else{
          validation.name = nameValid
          validation.surname = surnameValid
          validation.number = numberValid
        }
      }
    }
    if (type === 'prev' && registerStep !== 0) setRegisterStep(registerStep - 1);
  }

  return (
    <LoginSection ref={innerRef}>
      <LoginForm>
        <Titles text={'Create account'} />
        <RegCounter RegStep={registerStep} setRegStep={setRegisterStep} />
        <SwitchTransition mode={'out-in'}>
          <CSSTransition
            key={registerStep}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current.addEventListener('transitionend', done, false);
            }}
            classNames='fade'
          >
            {registerStep === 0 ? (<RegStep0 innerRef={step0Ref} registerEmail={registerEmail}
                                             setRegisterEmail={setRegisterEmail}
                                             registerPassword={registerPassword}
                                             setRegisterPassword={setRegisterPassword} validation={validation} />) : registerStep === 1 ? (
              <RegStep1 innerRef={step1Ref} registerName={registerName}
                        setRegisterName={setRegisterName}
                        registerNumber={registerNumber}
                        setRegisterNumber={setRegisterNumber}
                        registerSurname={registerSurname}
                        validation={validation}
                        setRegisterSurname={setRegisterSurname}/>) : (<RegStep2 innerRef={step2Ref} registerCountry={registerCountry}
                                                                                setRegisterCountry={setRegisterCountry}
                                                                                registerStreet={registerStreet}
                                                                                setRegisterStreet={setRegisterStreet} />)}
          </CSSTransition>
        </SwitchTransition>
        <ButtonWrapper>
          <ButtonSt buttonFunc={changeTypePage} text={'SIGN IN'} />
          {registerStep !== 2 ? (<ButtonSt buttonFunc={(e) => changeRegPage('next', e)} text={'NEXT'} />) : (
            <ButtonSt buttonFunc={registerHandler} text={'SIGN UP'} />)}
        </ButtonWrapper>
        {registerStep !== 0 ? (<ButtonPrev onClick={(e) => changeRegPage('prev', e)}>Back</ButtonPrev>) : ('')}
      </LoginForm>
    </LoginSection>
  );
};
