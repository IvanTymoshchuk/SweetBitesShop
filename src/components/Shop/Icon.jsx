import arrow from "../../img/arrow-defs.svg";

const Icon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${arrow}#icon-Vector`}></use>
    </svg>
  );
};

export default Icon;
