import { StepWrapper } from './LoginPage.styled';
import { InputSt } from './InputSt/InputSt';
import React from 'react';


export const RegStep2 = ({innerRef, registerCountry, setRegisterCountry, registerStreet, setRegisterStreet}) => {
  return (
      <StepWrapper ref={innerRef}>
        <InputSt placeholder={'Country'} type={'text'} setFunc={setRegisterCountry} value={registerCountry} req={true} />
        <InputSt placeholder={'Street'} type={'text'} setFunc={setRegisterStreet} value={registerStreet} req={true}  />
      </StepWrapper>
  );
};

