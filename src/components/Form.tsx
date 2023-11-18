import React, { useState } from "react";
import ChecketBtn from "./checketBtn";

interface FormData {
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // отправки данных на сервер
    fetch("#", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Авторизация прошла успешно!");
        } else {
          console.error("Ошибка при авторизации");
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  };

  return (
    <div className="formWrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="flex">
          <div className="flex">
            <ChecketBtn />
            <span>Remember me</span>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
