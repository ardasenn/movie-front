import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { fetchLogin } from "../../../Api/ApiCall";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [backendMessage, setBackendMessage] = useState("");
  const { login } = useAuth();
  const onSubmit = async (data) => {
    const registerResponse = await fetchLogin(data);
    if (!registerResponse.isSuccess) {
      setBackendMessage(registerResponse.message);
    } else {
      login(registerResponse.data);
      localStorage.setItem(
        "access-token-moviestore",
        registerResponse.data.accessToken
      );
      localStorage.setItem(
        "refresh-token-moviestore",
        registerResponse.data.refreshToken
      );
      navigate("/");
    }
  };

  return (
    <>
      <form
        className=" flex flex-col items-center pt-5  gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-bold text-4xl  text-white">Sign In</h3>
        {backendMessage && (
          <span className="text-secondary text-xs mt-1">{backendMessage}</span>
        )}
        <Input
          register={register}
          labelFor="email"
          type="email"
          labelText="Email"
          placeholder="Email *"
        />
        <Input
          register={register}
          labelFor="password"
          type="password"
          labelText="Password"
          placeholder="Password *"
        />
        <div className="w-[360px] flex justify-between items-center">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link to="/register">
              <button className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign up
              </button>
            </Link>
          </p>
          <div className="mt-2">
            <Button backgroundColor="bg-secondary">Sign In</Button>
          </div>
        </div>
      </form>
    </>
  );
};
