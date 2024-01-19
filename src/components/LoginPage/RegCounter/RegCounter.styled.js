import styled from "@emotion/styled";
import { mq, colors } from "../../../utils";

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 420px;
  width: 100%;
  height: 60px;
  margin: 40px auto;
`

export const CounterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid ${colors.pink1};
  font-size: 28px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.isActive ? colors.white : colors.pink1)} ;
  background-color: ${props => (props.isActive ? colors.pink1 : 'transparent')} ;
`
export const CounterLine = styled.div`
  width: 90px;
  height: 1px;
  background-color: ${colors.pink1};
`
