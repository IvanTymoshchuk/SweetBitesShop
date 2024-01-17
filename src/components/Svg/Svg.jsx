import sprite from '../../img/symbol-defs.svg';
import { Svg } from './Svg.styled';

export const SvgIcon = ({ iconId, width, height, fill }) => (
  <Svg width={width} height={height} fill={fill}>
    <use href={`${sprite}#${iconId}`} />
  </Svg>
);
