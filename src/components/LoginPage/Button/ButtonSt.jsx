import React, { useState } from "react";
import {ButtonS, ButtonSpan} from "./ButtonSt.styled";
import {ReactComponent as Arrow} from "../../../img/arrow-right.svg";

export const ButtonSt = ({text, buttonFunc, disabled = false}) => {


  return (
    <ButtonS onClick={buttonFunc} disabled={disabled}>
        <ButtonSpan>{text}</ButtonSpan>
        <Arrow />
    </ButtonS>
  );
};
