import sprite from '../../img/symbol-defs.svg';

export const SvgIcon = ({ iconId }) => (
  <svg width="30" height="30">
    <use href={`${sprite}#${iconId}`} />
  </svg>
);
