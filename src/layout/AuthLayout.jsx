import styles from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.top}>
          <p className={styles.brand}>Anu Wallet</p>
          <button className={styles.toggle}></button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
