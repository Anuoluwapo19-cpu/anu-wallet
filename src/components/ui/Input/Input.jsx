import styles from './Input.module.css';
import { forwardRef } from 'react';

const Input = forwardRef(({ label, hint, ...props }, ref) => {
  return (
    <label className={styles.label}>
      {label}
      <input ref={ref} className={styles.input} {...props} />
      {hint && <span className={styles.hint}>{hint}</span>}
    </label>
  );
});

Input.displayName = 'Input';

export default Input;
