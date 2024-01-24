import { StepWrapper } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import React from 'react';


export const RegStep0 = ({innerRef, registerEmail, setRegisterEmail, registerPasswor, setRegisterPassword, validation}) => {
  return (
      <StepWrapper ref={innerRef}>
        <InputSt placeholder={'Email'} type={'email'} errorMessages={validation.email.message} setFunc={setRegisterEmail} value={registerEmail} req={true} />
        <InputSt placeholder={'password'} type={'password'} errorMessages={validation.password.message} setFunc={setRegisterPassword} value={registerPasswor} req={true}  />
      </StepWrapper>
  );
};

