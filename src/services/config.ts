import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const BASE_URL = 'http://192.168.43.43:8080';

const TIME_OUT = 30000;
export const BLOSSOM_TOKEN_NAME = 'blossom_user_token';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log(error);
  }
};

axiosInstance.interceptors.request.use(async (req: any) => {
  try {
    const accessToken = await SecureStore.getItemAsync(BLOSSOM_TOKEN_NAME);
    req.headers.Authorization = `Bearer ${accessToken}`;

    return req;
  } catch (error) {
    console.log(error);
  }
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
