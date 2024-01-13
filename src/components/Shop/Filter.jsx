import Icon from "./Icon";
import { StyledFilter } from "./Shop.styled";

const Filter = ({ title, children }) => {
  return (
    <StyledFilter>
      <div>
        <h3>
          {title}
          <Icon width="15" height="9" />
        </h3>
        {children}
      </div>
    </StyledFilter>
  );
};

export default Filter;
