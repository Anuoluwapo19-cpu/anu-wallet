import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/form.module.css';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className={styles.title}>Welcome Back</h1>
      <p>Log in to your Wallet</p>

      <form className={styles.form}>
        <Input
          label='Email'
          name='email'
          type='email'
          autoComplete='email'
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          label='Password'
          name='password'
          type='password'
          autoComplete='password'
          value={form.password}
          onChange={handleChange}
          required
        />

        <Button type='submit'>Log In</Button>
      </form>

      <p className={styles.footer}>
        New to Anu Wallet?
        <Link to='/signup'> Create an Account</Link>
      </p>
    </>
  );
};

export default Login;
