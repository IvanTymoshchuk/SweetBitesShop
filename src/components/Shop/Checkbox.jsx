import { useState } from "react";

const Checkbox = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label checked={checked} onChange={handleChecked}>
      <p>{text}</p>
      <input type="checkbox" />
      <span></span>
    </label>
  );
};

export default Checkbox;
