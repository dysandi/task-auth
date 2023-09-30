"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = async () => {
    toast.loading("Loggin in...");
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
    const { data, error } = await res.json();

    if (error) {
      toast.remove();
      toast.error(error);
      return;
    }

    toast.remove();
    toast.success("login succesfully");
  };

  return { loginData, handleChange, handleSubmitLogin };
};
