import styles from './StatusMessage.module.css';

const StatusMessage = ({ type, text }) => {
  if (!text) return null;
  return (
    <p className={styles[type]} role={type === 'error' ? 'alert' : 'status'}>
      {text}
    </p>
  );
};

export default StatusMessage;
