import styled from "@emotion/styled";
import { mq, colors } from "../../utils";

export const LoginSection = styled.div`

`;

export const LoginForm = styled.form`
  box-sizing: border-box;
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
`;

export const Title1 = styled.h1`
  font: 700 75px/1.2 "Gabarito";
  text-transform: uppercase;
  color: ${colors.primary};
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  // ${mq.smallMobile}, ${mq.mobile}, ${mq.mobilePlus}  {
  //   flex-direction: column;
  // }
`;

export const ButtonPrev = styled.button`
  display: flex;
  width: auto;
  height: auto;
  padding: 0;
  margin: 10px auto;
  color: ${colors.pink1};
  border-bottom: 1px solid ${colors.pink1};
  font-size: 24px;
`

export  const StepWrapper = styled.div`
  max-width: 630px;
  width: 100%;
  margin: 40px auto;
  height: auto;
`


