import React, { useState } from "react";

import "./Checkbox.css";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input type='checkbox' onChange={() => setIsChecked(!isChecked)} />
      <svg
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden='true'
        viewBox='0 0 15 11'
        fill='none'
      >
        <path
          d='M1 4.5L5 9L12 1'
          strokeWidth='2'
          stroke={isChecked ? "#2e2a77" : "none"}
        />
      </svg>
    </label>
  );
};

export default Checkbox;
