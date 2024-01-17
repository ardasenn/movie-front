import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerSchema } from "./validation";
import { fetchRegister } from "../../../Api/ApiCall";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useModal } from "../../../contexts/Modalcontext";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(customerSchema) });
  const { showModal } = useModal();

  const onSubmit = async (data) => {
    try {
      data.phoneNumber = `${data.phoneNumber}`;
      const registerResponse = await fetchRegister(data);
      registerResponse.isSuccess &&
        showModal(registerResponse.message, "/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col items-center pt-5  gap-4"
      >
        <h3 className="font-bold text-4xl text-white">Sign Up</h3>

        <Input
          register={register}
          labelFor="firstName"
          type="text"
          labelText="First Name"
          placeholder="John *"
          errorMessage={errors.firstName?.message}
        />
        <Input
          register={register}
          labelFor="lastName"
          type="text"
          labelText="Last Name"
          placeholder="Doe *"
          errorMessage={errors.lastName?.message}
        />
        <Input
          register={register}
          labelFor="email"
          type="email"
          labelText="Email"
          placeholder="example@example.com *"
          errorMessage={errors.email?.message}
        />
        <Input
          register={register}
          labelFor="userName"
          type="text"
          labelText="User Name"
          placeholder="johnny *"
          errorMessage={errors.userName?.message}
        />
        <Input
          register={register}
          labelFor="password"
          type="password"
          labelText="Password"
          placeholder="Password *"
          errorMessage={errors.password?.message}
        />
        <Input
          register={register}
          labelFor="passwordConfirm"
          type="password"
          labelText="Confirm Password"
          placeholder="Password *"
          errorMessage={errors.passwordConfirm?.message}
        />
        <Input
          register={register}
          labelFor="phoneNumber"
          type="tel"
          labelText="Phone Number"
          placeholder="Phone Number *"
          errorMessage={errors.phoneNumber?.message}
        />
        <div className="flex w-[360px] justify-center w-full mt-4">
          <Button backgroundColor="bg-secondary">Gönder</Button>
        </div>
      </form>
    </>
  );
};
