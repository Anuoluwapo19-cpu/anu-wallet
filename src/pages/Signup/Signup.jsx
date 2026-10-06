import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/form.module.css';
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';
import { signUp } from '../../api/authApi';
import StatusMessage from '../../components/ui/StatusMessage/StatusMessage';

const emptyForm = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreed: false,
};

const Signup = () => {
  const [form, setForm] = useState(emptyForm);

  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      setStatus({ type: 'error', text: 'Password must at least 6 characters' });
      return;
    }

    if (form.password !== form.confirmPassword) {
      setStatus({ type: 'error', text: 'Password does not match' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const { session } = await signUp(form);

      if (!session) {
        setStatus({
          type: 'success',
          text: 'Account created. Check your email to confirm it, then log in',
        });

        setForm(emptyForm);
      }
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Creat your Account</h1>
      <p className={styles.subtitle}> You get #50,000 to start with</p>

      <StatusMessage type={status.type} text={status.text} />

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label='Full name'
          name='fullName'
          type='text'
          autoComplete='name'
          value={form.fullName}
          onChange={handleChange}
          required
        />
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
          autoComplete='new-password'
          hint='At least 6 characters'
          value={form.password}
          onChange={handleChange}
          required
        />
        <Input
          label='Confirm password'
          name='confirmPassword'
          type='password'
          autoComplete='new-password'
          hint='At least 6 characters'
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className={styles.checkbox}>
          <input
            type='checkbox'
            name='agreed'
            checked={form.agreed}
            onChange={handleChange}
          />
          I agree to the term of use
        </label>

        <Button type='submit' disabled={!form.agreed}>
          Create account
        </Button>
      </form>

      <p className={styles.footer}>
        Already have an account?
        <Link to='/login'> Log in</Link>
      </p>
    </>
  );
};

export default Signup;
