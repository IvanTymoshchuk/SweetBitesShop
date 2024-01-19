import { CounterLine, CounterText, CounterWrapper } from './RegCounter.styled';


export const RegCounter = ({RegStep, setRegStep}) => {
  return (
      <CounterWrapper>
        <CounterText isActive={RegStep === 0} onClick={() => setRegStep(0)}>1</CounterText>
        <CounterLine />
        <CounterText isActive={RegStep === 1} onClick={() => setRegStep(1)}>2</CounterText>
        <CounterLine />
        <CounterText isActive={RegStep === 2} onClick={() => setRegStep(2)}>3</CounterText>
      </CounterWrapper>
  );
};

