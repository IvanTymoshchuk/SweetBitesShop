import styled from "@emotion/styled";
import { mq, colors } from "../../../utils";

export const InputDefWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: ${props => (props.deleteMargin ? '0px' : 'calc(5px + 1vw)')};
`
export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 2px solid ${colors.primary};
  border-radius: calc(10px + 2vw);
  padding: calc(7px + 0.75vw) calc(10px + 2vw);
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5px;
`
export const Input = styled.input`
  position: relative;
  border: none;
  background-color: transparent;
  font: 400 26px/1.2 "Gabarito";
  color: ${colors.primary};
  width: 100%;
  margin: 0;
  outline: none;

  &::placeholder{
    color: ${colors.primary};
    opacity: 0.9;
    text-transform: uppercase;
  }
`
export const ErrorMessageText = styled.p`
  font: 400 14px/1.2 "Gabarito";
  color: ${colors.red};
`
