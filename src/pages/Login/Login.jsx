import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/form.module.css";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import StatusMessage from "../../components/ui/StatusMessage/StatusMessage";
import { signIn } from "../../api/authApi";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      await signIn(form);
    } catch {
      setStatus({
        type: "error",
        text: "Incorrect email or password. If you haven't created an account, sign up first.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Welcome Back</h1>
      <p>Log in to your Wallet</p>

      <StatusMessage type={status.type} text={status.text} />

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <Button type="submit" loading={loading}>
          Log In
        </Button>
      </form>

      <p className={styles.footer}>
        New to Anu Wallet?
        <Link to="/signup"> Create an Account</Link>
      </p>
    </>
  );
};

export default Login;
