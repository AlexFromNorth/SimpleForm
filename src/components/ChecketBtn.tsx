import React, { useState } from 'react';

const ChecketBtn: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSquareClick = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        marginRight: '10px'
      }}
      onClick={handleSquareClick}
    >
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="black" />
        </svg>
      )}
    </div>
  );
};

export default ChecketBtn;
