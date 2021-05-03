import React, { useState } from "react";
import styled from "styled-components";
import axiosApiInstance from "../../app/axiosInterceptor";

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 50%;
  margin: auto;
  margin-top: 3rem;
`;
const SubmitButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.main};
`;
const InputField = styled.input`
  padding: 0.5rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
  width: 50ch;
`;
const H2 = styled.h2`
  margin: 0;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("Inbar.weinberg@gmail.com");
  const [password, setPassword] = useState("123");
  const [loginMessage, setLoginMessage] = useState("not logged in");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoginMessage(
      await axiosApiInstance.post("/users/login", { email, password })
    );
  }

  const handleChange = ({ target }) => {
    switch (target.name) {
      case "Email":
        setEmail(target.value);
        break;
      case "Password":
        setPassword(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <FormWrapper>
        <label htmlFor="email">
          <H2>Email (unique):</H2>{" "}
        </label>
        <InputField
          id="email"
          value={email}
          onChange={handleChange}
          name="Email"
        />
        <label htmlFor="password">
          <H2>Password:</H2>
        </label>
        <InputField
          id="password"
          type="password"
          value={password}
          onChange={handleChange}
          name="Password"
        />{" "}
        <SubmitButton type="submit" onClick={handleSubmit}>
          Login
        </SubmitButton>
        {loginMessage && <p>{loginMessage}</p>}
      </FormWrapper>
    </>
  );
};

export default LoginForm;
