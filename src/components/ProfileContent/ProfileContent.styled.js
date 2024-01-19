import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const ProfileWrapper = styled.section`
  margin: 0 auto;
  padding: 90px 10px;
  max-width: 1260px;
  width: 100%;
  box-sizing: border-box;
  h2 {
    max-width: 570px;
    width: 100%;
    text-align: center;
    margin: 0 auto 90px auto;
  }
`
export const ProfileRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &:not(:nth-last-child(1)){
    margin-bottom: 40px;
  }
`
export const ProfilePassRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const ProfileRowText1 = styled.p`
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.pink1};
  font-weight: 500;
  font-size: 28px;
  text-transform: uppercase;
`
export const ProfileRowRWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 9vw;

  svg {
    cursor: pointer;
  }
`
export const ProfileRowText2 = styled.p`
  width: auto;
  color: ${colors.pink1};
  font-size: 26px;
`
export const ProfileRowButton = styled.button`
  width: auto;
  border-radius: 70px;
  color: ${colors.pink1};
  border: 2px solid ${colors.pink1};
  font-size: 26px;
  padding: 20px;
  margin-left: 9vw;
  transition: color .5s ease-in, background-color .5s ease-in;
  &:hover{
    color: ${colors.white};
    background-color: ${colors.pink1};
  }
`
