import React from 'react';
import './NavButton.css';

export const NavButton = () => {
  return (
    <div className="button-wrap">
      <button className="leftArrow"><i className="icofont-rounded-left icofont-2x"></i></button>
      <button className="rightArrow"><i className="icofont-rounded-right icofont-2x"></i></button>
    </div>
  );
}