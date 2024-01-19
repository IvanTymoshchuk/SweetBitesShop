import { StepWrapper } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import React from 'react';


export const RegStep0 = ({innerRef, registerEmail, setRegisterEmail, registerPasswor, setRegisterPassword}) => {
  return (
      <StepWrapper ref={innerRef}>
        <InputSt placeholder={'Email'} type={'email'} setFunc={setRegisterEmail} value={registerEmail} req={true} />
        <InputSt placeholder={'password'} type={'password'} setFunc={setRegisterPassword} value={registerPasswor} req={true}  />
      </StepWrapper>
  );
};

