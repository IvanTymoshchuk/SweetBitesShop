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

export const RegPage = ({ innerRef, changeTypePage, typeFormSet, setUserData, sendData }) => {
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerSurname, setRegisterSurname] = useState('');
  const [registerNumber, setRegisterNumber] = useState(null);
  const [registerCountry, setRegisterCountry] = useState('');
  const [registerStreet, setRegisterStreet] = useState('');
  const [sendActive, setSendActive] = useState(false);

  const step0Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const [registerStep, setRegisterStep] = useState(0);
  const nodeRef = registerStep === 0 ? step0Ref : registerStep === 1 ? step1Ref : step2Ref;

  useEffect(() => {
    validation();
  }, [registerEmail, registerPassword, registerName, registerSurname]);

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

  function validation() {
    let emailValid = false, passValid = false, nameValid = false, surnameValid = false;
    if (registerEmail.length > 5) emailValid = true;
    if (registerPassword.length > 5) passValid = true;
    if (registerName.length > 5) nameValid = true;
    if (registerSurname.length > 5) surnameValid = true;

    setSendActive(emailValid && passValid && nameValid && surnameValid);
  }

  function changeRegPage(type, e) {
    console.log(e);
    console.log('work');
    e.preventDefault();
    if (type === 'next' && registerStep !== 2) setRegisterStep(registerStep + 1);
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
                                             setRegisterPassword={setRegisterPassword} />) : registerStep === 1 ? (
              <RegStep1 innerRef={step1Ref} registerName={registerName}
                        setRegisterName={setRegisterName}
                        registerNumber={registerNumber}
                        setRegisterNumber={setRegisterNumber}
                        registerSurname={registerSurname}
                        setRegisterSurname={setRegisterSurname}/>) : (<RegStep2 innerRef={step2Ref} registerCountry={registerCountry}
                                                                                setRegisterCountry={setRegisterCountry}
                                                                                registerStreet={registerStreet}
                                                                                setRegisterStreet={setRegisterStreet} />)}
          </CSSTransition>
        </SwitchTransition>
        <ButtonWrapper>
          <ButtonSt buttonFunc={changeTypePage} text={'SIGN IN'} />
          {registerStep !== 2 ? (<ButtonSt buttonFunc={(e) => changeRegPage('next', e)} text={'NEXT'} />) : (
            <ButtonSt buttonFunc={registerHandler} text={'SIGN UP'} disabled={!sendActive} />)}
        </ButtonWrapper>
        {registerStep !== 0 ? (<ButtonPrev onClick={(e) => changeRegPage('prev', e)}>Back</ButtonPrev>) : ('')}
      </LoginForm>
    </LoginSection>
  );
};
