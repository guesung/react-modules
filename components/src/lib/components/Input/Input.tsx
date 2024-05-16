import { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...rest} className={`${styles.modalInput} ${rest.className || ''}`} />;
};

export default Input;
