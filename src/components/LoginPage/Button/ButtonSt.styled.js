import styled from "@emotion/styled";
import {mq, colors} from "../../../utils";

export const ButtonS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  border: 4px solid ${colors.primary};
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 70px;
  padding: 24px 37px;
  width: auto;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color .2s ease-in;
  // ${mq.smallMobile}, ${mq.mobile}, ${mq.mobilePlus} {
  //   width: 100%;
  // }
  &:disabled{
    cursor: not-allowed;
    opacity: 0.7;
  }
  & svg path{
    fill: ${colors.white};
    transition: fill .2s ease-in;
  }
  &:hover {
    background-color: transparent;
    color: ${colors.primary};
    & svg path{
      fill: ${colors.primary};
    }
  }
  
`

export const ButtonSpan = styled.span`
  font: 500 28px/1 "Gabarito";
  text-transform: uppercase;
  transition: color .2s ease-in;
`