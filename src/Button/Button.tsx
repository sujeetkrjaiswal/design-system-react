import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './Button.module.scss';

const propTypes = {
  // some description about color
  color: PropTypes.oneOf(['primary', 'secondary', 'warn']).isRequired,
  display: PropTypes.oneOf(['fab', 'icon', 'stroked', 'flat', 'raised', 'basic']).isRequired,
  size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg']).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};
type IButtonProps = InferProps<typeof propTypes>

const Button: FC<IButtonProps> = ({
  // Name of the button
  display, // display value of the button
  color,
  size,
  disabled,
  onClick,
  children,
}) => (
  <button
    className={`${styles.button} ${styles[display]} ${styles[color]} ${styles[size]}`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = propTypes;

Button.defaultProps = {

};


export default Button;
