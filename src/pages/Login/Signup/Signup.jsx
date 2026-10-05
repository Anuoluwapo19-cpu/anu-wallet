import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../../styles/form.module.css";
import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className={styles.title}>Welcome!</h1>
      <p>Create an account to get started with your Wallet</p>

      <form className={styles.form}>
        <Input
          label="Full name"
          name="fullName"
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
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
          autoComplete="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Input
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit">Signup</Button>
      </form>

      <p className={styles.footer}>
        Already have an account?
        <Link to="/login"> Log in</Link>
      </p>
    </>
  );
};

export default Signup;
