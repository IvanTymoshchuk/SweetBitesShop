import React, { useState } from "react";
import {Input, InputWrapper} from "./InputSt.styled";

export const InputSt = ({placeholder, type, setFunc, value, req, deleteMargin = false}) => {
    const changeHandler = value => {
        setFunc(value.target.value)
    }

  return (
    <InputWrapper deleteMargin={deleteMargin}>
      <Input placeholder={placeholder} type={type} value={value} onChange={changeHandler} required={req}  />
    </InputWrapper>
  );
};
