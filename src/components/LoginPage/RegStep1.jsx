import { ButtonWrapper, StepWrapper } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import React from 'react';


export const RegStep1 = ({innerRef, registerName, setRegisterName, registerSurname, setRegisterSurname, registerNumber, setRegisterNumber}) => {
  return (
      <StepWrapper ref={innerRef}>
        <ButtonWrapper>
          <InputSt placeholder={'First name'} type={'name'} setFunc={setRegisterName} value={registerName} req={true} />
          <InputSt placeholder={'Last name'} type={'surname'} setFunc={setRegisterSurname} value={registerSurname} req={true}  />
        </ButtonWrapper>
        <InputSt placeholder={'phone number'} type={'tel'} setFunc={setRegisterNumber} value={registerNumber} req={true}  />
      </StepWrapper>
  );
};

