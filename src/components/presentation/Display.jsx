import React from 'react';

export default function Display({ colors, bgImage }) {
  return (
    <div
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: colors,
        backgroundImage: bgImage,
      }}
    ></div>
  );
}
