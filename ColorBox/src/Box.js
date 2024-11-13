import React from 'react';

function Box({ id, color, width, height, removeBox }) {
  const handleRemove = () => removeBox(id);

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
