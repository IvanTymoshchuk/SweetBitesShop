import styled from "@emotion/styled";
import {  mq,colors } from "../../../utils";


export const Wraper = styled.div`
  padding: 53px 45px;
  background-color: ${colors.backgroundHeader};
`;
export const Img = styled.img`
  width: 299px;
  height: 306.611px;
`;
export const List = styled.ul`
  /* display: flex; */
  
  ${mq.maxMobile} {
    flex-direction: column;
  }
  ${mq.tablet} {
    justify-content: space-between;
  }
`;
export const Items = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h2`
  margin-top: 15px;
  color: ${colors.primary};
  font-size: 28px;
  text-transform: uppercase;
`;
export const Span = styled.span`
  color: ${colors.primary};
  font-size: 25px;
  text-transform: uppercase;
`;
