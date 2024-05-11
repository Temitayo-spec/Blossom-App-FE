import axiosInstance from './config';

type RegisterUserTypes = IUser;

export const registerUser = async ({
  email,
  name,
  password,
}: RegisterUserTypes) => {
  try {
    const res = await axiosInstance.post('/users/create', {
      email,
      password,
      name,
    });

    return res.data;
  } catch (error) {}
};
