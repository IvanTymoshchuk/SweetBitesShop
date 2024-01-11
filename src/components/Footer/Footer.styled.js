import styled from "@emotion/styled";
import { mq, colors } from "../../utils";

export const Wraper = styled.footer`
  padding-left: 30px;
  padding-right: 30px;
  background-color: #d75d8e;
  ${mq.tablet} {
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 80px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const WraperItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.a`
  color: #fcf3f6;
  font-family: Gabarito;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 84px;
`;
export const WraperList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Link = styled.a`
  color: #fcf3f6;
`;

export const WrapCopy = styled.div`
  display: flex;
  padding-bottom: 34px;
`;

export const Items = styled.li`
  font-family: Gabarito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;


export const SpanCopyRight = styled.span`
  color: #fcf3f6;
  font-family: Gabarito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
export const Span = styled.span``;
