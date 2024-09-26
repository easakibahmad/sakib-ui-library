import { useState } from "react";

import "./index.css";

export const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <button
        onClick={handleChecked}
        className={`${checked ? "border-green" : ""} chkbox-btn`}
      >
        {checked ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
              fill="#01C053"
            />
            <path
              d="M12 5L6.5 10.5L4 8"
              stroke="white"
              stroke-width="1.6666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z"
              stroke="#D0D5DD"
            />
          </svg>
        )}
        <span>{label}</span>
      </button>
    </div>
  );
};
