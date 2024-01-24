import { ButtonWrapper, StepWrapper } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import React from 'react';


export const RegStep1 = ({innerRef, registerName, setRegisterName, registerSurname, setRegisterSurname, registerNumber, setRegisterNumber, validation}) => {
  return (
      <StepWrapper ref={innerRef}>
        <ButtonWrapper>
          <InputSt placeholder={'First name'} type={'name'} errorMessages={validation.name.message} setFunc={setRegisterName} value={registerName} req={true} />
          <InputSt placeholder={'Last name'} type={'surname'} errorMessages={validation.surname.message} setFunc={setRegisterSurname} value={registerSurname} req={true}  />
        </ButtonWrapper>
        <InputSt placeholder={'phone number'} type={'tel'} errorMessages={validation.number.message} setFunc={setRegisterNumber} value={registerNumber} req={true}  />
      </StepWrapper>
  );
};

