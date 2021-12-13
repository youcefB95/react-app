import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const LINK_CLASSNAMES = ['btn-mobile', 'nav-links']

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--navbar'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({
  link_classname,
  link_disable = false,
  route,
  target,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={route} className={link_classname} target={target} disable={link_disable}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
