import {
  PopupContent, PopupForm, PopupInput, PopupInputBut, PopupLabel,
  PopupOverlay, PopupText, PopupTitle,

} from './ProfilePopup.styled';
import { useState } from 'react';
import { ReactComponent as ViewPass } from '../../../img/view-pass.svg';


export const ProfilePopup = ({ setIsOpenPopup }) => {
  const [passwordInput1View, setPasswordInput1View] = useState(false);
  const [passwordInput2View, setPasswordInput2View] = useState(false);
  const [passwordInput3View, setPasswordInput3View] = useState(false);

  function changePassword(e) {
    e.preventDefault();
    console.log('work');
  }

  return (
    <PopupOverlay onClick={() => setIsOpenPopup(false)}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <PopupTitle>Change Password</PopupTitle>
        <PopupText>You can change your password to enter your account:</PopupText>
        <PopupForm onSubmit={changePassword}>
          <PopupLabel>
            <PopupInput placeholder={'Сurrent password'} type={passwordInput1View ? 'text' : 'password'}
                        required></PopupInput>
            <ViewPass onClick={() => setPasswordInput1View(!passwordInput1View)} />
          </PopupLabel>
          <PopupLabel>
            <PopupInput placeholder={'new password'} type={passwordInput2View ? 'text' : 'password'}
                        required></PopupInput>
            <ViewPass onClick={() => setPasswordInput2View(!passwordInput2View)} />
          </PopupLabel>
          <PopupLabel>
            <PopupInput placeholder={'confirm the password'} type={passwordInput3View ? 'text' : 'password'}
                        required></PopupInput>
            <ViewPass onClick={() => setPasswordInput3View(!passwordInput3View)} />
          </PopupLabel>
          <PopupInputBut value={'Save'} type={'submit'} />
        </PopupForm>
      </PopupContent>
    </PopupOverlay>
  );
};
