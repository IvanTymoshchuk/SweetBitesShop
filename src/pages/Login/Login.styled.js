import styled from "@emotion/styled";
import { colors } from '../../utils';

export const LoginWrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 6.25vw 1vw;
  background-color: ${colors.modal};
  overflow: hidden;

  .fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms, transform 500ms;
  }
`;
