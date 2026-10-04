import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  loading = false,
  ...props
}) => {
  return (
    <button
      className={styles[variant]}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? 'Please wait...' : children}
    </button>
  );
};

export default Button;
