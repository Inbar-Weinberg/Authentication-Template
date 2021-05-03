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
  max-width: 150ch;
  margin-top: 3rem;
  border-bottom: 1px solid black;
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
  margin-bottom: 2rem;
  width: 50ch;
`;
const H2 = styled.h2`
  margin: 0;
`;

const RegisterForm = () => {
  const [email, setEmail] = useState("Inbar.weinberg@gmail.com");
  const [password, setPassword] = useState("123");
  const [name, setName] = useState("inbar");
  const [registerMessage, setRegisterMessage] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    setRegisterMessage(
      await axiosApiInstance.post("/users/register", { name, email, password })
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
      case "Name":
        setName(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <FormWrapper>
      <label htmlFor="name">
        <H2>Name:</H2>
      </label>
      <InputField id="name" value={name} onChange={handleChange} name="Name" />

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
      />
      <SubmitButton type="submit" onClick={handleSubmit}>
        Register
      </SubmitButton>
      {registerMessage && <p>{registerMessage}</p>}
    </FormWrapper>
  );
};

export default RegisterForm;
