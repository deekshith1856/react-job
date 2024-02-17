import React from "react";
import { Form, useForm } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";
import CustomTextField from "./CustomTextField";
const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      width="500px"
      display="flex"
      flexDirection="column"
      gap="16px"
      justifyContent="center"
      alignItems="center"
    >
      {" "}
      <CustomTextField
        name="email"
        label="Email"
        control={control}
        placeholder="Email"
        error={errors.email}
        rules={{
          required: "Email is required",
          validate: (value) => {
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
              return "Enter a valid email";
            }
          },
        }}
      />
      <CustomTextField
        name="password"
        label="Password"
        control={control}
        type="password"
        placeholder="Enter password"
        error={errors.password}
        rules={{
          required: "Password is required",
          validate: (value) => {
            const password = /^(?=.*\d)(?=.*[!@#$%^&*]).*$/;
            if (!password.test(value)) {
              return "Password should contain at least 1 special char";
            }
          },
        }}
      />
      <Button
        width="250px"
        colorScheme="blue"
        borderRadius="8px"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
