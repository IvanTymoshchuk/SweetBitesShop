import React, { useState } from 'react';
import { ErrorMessageText, Input, InputDefWrapper, InputWrapper } from './InputSt.styled';

export const InputSt = ({ placeholder, type, setFunc, value, req, deleteMargin = false, errorMessages }) => {
  const changeHandler = value => {
    setFunc(value.target.value);
  };

  return (
    <InputDefWrapper>
      <InputWrapper deleteMargin={deleteMargin}>
        <Input placeholder={placeholder} type={type} value={value} onChange={changeHandler} required={req} />
      </InputWrapper>
      { typeof errorMessages === 'object' ? errorMessages.map((item, index) => (<ErrorMessageText key={index}>{item}</ErrorMessageText>)) : (<ErrorMessageText>{errorMessages}</ErrorMessageText>)}
    </InputDefWrapper>
  );
};
