import {
  ProfilePassRow,
  ProfileRow, ProfileRowButton,
  ProfileRowRWrap,
  ProfileRowText1,
  ProfileRowText2,
  ProfileWrapper,
} from './ProfileContent.styled';
import { Titles } from '../Title/Title';
import { ReactComponent as ChangeIcon } from '../../img/Change.svg';
import { useState } from 'react';
import { ProfilePopup } from './ProfilePopup/ProfilePopup';


export const ProfileContent = ({}) => {
 const [isOpenPopup ,setIsOpenPopup] = useState(false)

  return (
    <ProfileWrapper>
      <Titles text={'Welcome to your account'} />
      <ProfileRow>
        <ProfileRowText1>first name :</ProfileRowText1>
        <ProfileRowRWrap>
          <ProfileRowText2>Volodymyr</ProfileRowText2>
          <ChangeIcon />
        </ProfileRowRWrap>
      </ProfileRow>
      <ProfileRow>
        <ProfileRowText1>last name :</ProfileRowText1>
        <ProfileRowRWrap>
          <ProfileRowText2>Ivanytsia</ProfileRowText2>
          <ChangeIcon />
        </ProfileRowRWrap>
      </ProfileRow>
      <ProfileRow>
        <ProfileRowText1>email :</ProfileRowText1>
        <ProfileRowRWrap>
          <ProfileRowText2>vladimirivanica@gmail.com</ProfileRowText2>
          <ChangeIcon />
        </ProfileRowRWrap>
      </ProfileRow>
      <ProfileRow>
        <ProfileRowText1>phone : </ProfileRowText1>
        <ProfileRowRWrap>
          <ProfileRowText2>+38(093) 123 45 76</ProfileRowText2>
          <ChangeIcon />
        </ProfileRowRWrap>
      </ProfileRow>
      <ProfileRow>
        <ProfileRowText1>adress :</ProfileRowText1>
        <ProfileRowRWrap>
          <ProfileRowText2>Kyiv, Lesi ukrainky sreet 2</ProfileRowText2>
          <ChangeIcon />
        </ProfileRowRWrap>
      </ProfileRow>
      <ProfilePassRow>
        <ProfileRowText1>password :</ProfileRowText1>
        <ProfileRowButton onClick={() => setIsOpenPopup(true)}>Change Password</ProfileRowButton>
      </ProfilePassRow>
      {isOpenPopup && <ProfilePopup setIsOpenPopup={setIsOpenPopup} />}
    </ProfileWrapper>
  );
};
