import * as yup from "yup";

export const newUserSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(6),
  email: yup.string().email().required(),
});

export const editUserSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
});
