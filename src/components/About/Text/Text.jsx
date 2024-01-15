// import React, { useState } from 'react';
// import { Descr, Btn } from './Text.styled';
// import { SvgIcon } from 'components/Svg/Svg';

// export const Text = () => {
//   const [showFullText, setShowFullText] = useState(false);

//   const toggleFullText = () => {
//     setShowFullText(!showFullText);
//   };

//   const initialText = (
//     <Descr>
//       Welcome to Sweet Bites Shop, where we turn moments into memories through
//       the art of baking.our passion for crafting delicious and visually stunning
//       cakes sets us apart.
//     </Descr>
//   );

//   const additionalText = (
//     <Descr>
//       From sourcing the finest ingredients to creating personalized designs,
//       we're dedicated to making your celebrations extraordinary. explore our
//       menu, savor the sweetness, and let Sweet Bites Shop be a part of your
//       joyous occasions.
//     </Descr>
//   );

//   return (
//     <>
//       {initialText}
//       {showFullText && additionalText}
//       <Btn onClick={toggleFullText}>
//         Read more{' '}
//         <SvgIcon iconId="icon-arrow" width="20" height="20" fill="#d75d8e" />
//       </Btn>
//     </>
//   );
// };

import { useState, useEffect } from 'react';
import { Descr, Btn } from './Text.styled';
import { SvgIcon } from 'components/Svg/Svg';

export const Text = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowFullText(windowWidth >= 1200);
  }, [windowWidth]);

  const initialText = (
    <Descr>
      Welcome to Sweet Bites Shop, where we turn moments into memories through
      the art of baking.our passion for crafting delicious and visually stunning
      cakes sets us apart.
    </Descr>
  );

  const additionalText = (
    <Descr>
      From sourcing the finest ingredients to creating personalized designs,
      we're dedicated to making your celebrations extraordinary. explore our
      menu, savor the sweetness, and let Sweet Bites Shop be a part of your
      joyous occasions.
    </Descr>
  );

  return (
    <>
      {initialText}
      {!showFullText && (
        <Btn onClick={toggleFullText}>
          Read more{' '}
          <SvgIcon iconId="icon-arrow" width="20" height="20" fill="#d75d8e" />
        </Btn>
      )}
      {showFullText && additionalText}
    </>
  );
};

export default Text;
