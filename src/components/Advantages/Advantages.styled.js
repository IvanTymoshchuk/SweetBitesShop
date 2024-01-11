import styled from "@emotion/styled";
import { mq, colors } from "../../utils";
import {  SwiperSlide } from "swiper/react";

export const Wraper = styled.section`
  background: ${colors.greanLight};
  padding: 30px 0 30px 36px;
  ${mq.desktop} {
    padding: 30px 80px;
  }
`;

export const List = styled.ul`
  ${mq.tablet} {
    display: inline;
  }
`;

// export const Item = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;
export const Item = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Span = styled.span`
  color: ${colors.grean};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
`;
export const SpanSec = styled.span`
  text-transform: lowercase;
`;
