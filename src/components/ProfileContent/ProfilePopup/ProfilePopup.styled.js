import styled from '@emotion/styled';
import { colors, mq } from '../../../utils';

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.popupOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PopupContent = styled.div`
  max-width: 480px;
  width: 100%;
  height: auto;
  background-color: ${colors.white1};
  border-radius: 40px;
  padding: 40px 30px;
`
export const PopupTitle = styled.h3`
  width: 100%;
  text-align: center;
  color: ${colors.pink1};
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 30px;
`

export const PopupText = styled.p`
  max-width: 330px;
  width: 100%;
  color: ${colors.pink1};
  font-size: 24px;
  margin-bottom: 30px;
`
export const PopupForm = styled.form`
  width: 100%;
  height: auto;
`
export const PopupLabel = styled.label`
  width: 100%;
  height: auto;
  border-radius: 40px;
  border: 2px solid ${colors.pink1};
  padding: 20px 40px;
  box-sizing: border-box;
  display: block;
  position: relative;
  margin-bottom: 20px;
  svg{
    position: absolute;
    top: 26px;
    right: 41px;
    width: 22px;
    height: 18px;
    z-index: 10;
    cursor: pointer;
  }
`
export const PopupInput = styled.input`
  background: transparent;
  border: none;
  width: auto;
  height: auto;
  outline: none;
  padding: 0;
  font-weight: 400;
  font-size: 24px;
  color: ${colors.primary};
  &::placeholder{
    color: ${colors.primary};
    opacity: 0.7;
    text-transform: uppercase;
  }
`
export const PopupInputBut = styled.input`
  cursor: pointer;
  width: 100%;
  text-align: center;
  background-color: ${colors.pink1};
  font-weight: 500;
  font-size: 26px;
  border-radius: 70px;
  padding: 25px 40px;
  border: none;
  color: ${colors.white};
  text-transform: uppercase;
`
