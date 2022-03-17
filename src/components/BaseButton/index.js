/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

export default function BaseButton({
  children,
  route,
  type,
  disabled,
  isLoading,
  className,
}) {
  const elmClass = `bg-blue-gray-200 transition-all cursor-pointer duration-300 hover:bg-blue-gray-300 ${className}`;

  return type === 'link' ? (
    <Link to={route}>
      <div className={elmClass}>{children}</div>
    </Link>
  ) : (
    <button disabled={disabled} type={type} className={elmClass}>
      {isLoading ? <VscLoading className="icon-spin w-5 h-5" /> : children}
    </button>
  );
}

BaseButton.defaultProps = {
  isLoading: false,
  disabled: false,
  type: 'button',
};

BaseButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'link']),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  route: PropTypes.string,
  className: PropTypes.string,
};
