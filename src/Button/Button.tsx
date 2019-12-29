import React, { FC } from 'react';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.types';

const ButtonComponent: FC<IButtonProps> = ({
  // Name of the button
  label,
  display = 'basic', // display value of the button
  color = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) => (
  <button
    className={`${styles.button} ${styles[display]} ${styles[color]} ${styles[size]}`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

ButtonComponent.defaultProps = {
  label: 'Placeholder',
  color: 'primary',
  display: 'basic',
  size: 'md',
  disabled: false,
};

export default ButtonComponent;
