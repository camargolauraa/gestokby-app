import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError } from "axios";
import { IEditUser, ILogin, ISignUpCredentials } from "../interfaces/IAuth";
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

export async function signUp(credentials: ISignUpCredentials) {
  // console.log(credentials);
  try {
    const response = await api.post("/v1/user", credentials);
    console.log("Data:", response.data);
    console.log("Full Response:", response.status);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Erro ao fazer cadastro:", error.response?.data);
      console.log("Status do erro:", error.response?.status);
      return error.response;
    } else {
      console.log("Erro ao fazer cadastro:", error);
      return { message: "Erro desconhecido ao fazer cadastro: ", error };
    }
  }
}

export async function editUser(payload: IEditUser) {
  try {
    const response = await api.put("/v1/user/edit", payload, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem(
          STORAGE_KEYS.TOKEN
        )}`,
      },
    });
    console.log("Data:", response.data);
    console.log("Full Response:", response.status);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Erro ao fazer edição de usuário:", error.response?.data);
      console.log("Status do erro:", error.response?.status);
      return error.response;
    } else {
      console.log("Erro ao editar usuário:", error);
      return {
        message: "Erro desconhecido ao fazer edição de usuário: ",
        error,
      };
    }
  }
}
