import React from 'react';
import '../App.css';

export const Footer = () => {
  let footstyle = {
    position : "relative",
    width : "100%"
  }
  return (
    <div className='py-3 footer' style={footstyle}>
      <p className='text-center'>Copyright &copy; SarthakBoPii</p>
    </div>
  );
};
