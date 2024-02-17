import React from "react";
import { useForm } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { Button, Box } from "@chakra-ui/react";

const RegisterForm = () => {
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
        name="Name"
        label="Name"
        control={control}
        type="text"
        placeholder="Name"
        errors={errors}
      />
      <CustomTextField
        name="Email"
        label="Email"
        control={control}
        type="text"
        placeholder="johndoe@mail.com"
        errors={errors}
      />
      <CustomTextField
        name="Password"
        label="Password"
        control={control}
        type="password"
        placeholder="Password"
        errors={errors}
      />
      <Button
        width="250px"
        colorScheme="blue"
        borderRadius="8px"
        onClick={handleSubmit(onSubmit)}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;
