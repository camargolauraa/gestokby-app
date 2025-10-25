import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";
import { ILogin } from "../interfaces/IAuth";
import api from "./axiosConfig";

const STORAGE_KEYS = {
  TOKEN: "@meuApp:token",
  USER: "@meuApp:user",
};

export async function signIn(credentials: ILogin) {
  // console.log(credentials);
  try {
    const response = await api.post("/v1/session", credentials);
    console.log(response.data);

    if (response && response.data.token) {
      const { token, ...userData } = response.data;
      await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
      await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Erro ao fazer login:", error.response?.data);
      return error.response?.data;
    } else {
      console.log("Erro ao fazer login:", error);
      return { message: "Erro desconhecido ao fazer login: ", error };
    }
  }
}
