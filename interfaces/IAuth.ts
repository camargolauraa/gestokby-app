export interface ILogin {
  login: string;
  password: string;
}
export interface IUserData {
  id: string;
  cnpj: string;
  email: string;
  phone: string;
  razao_social: string;
}

// Criar usuário
export interface ISignUpCredentials {
  razao_social: string;
  cnpj: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IEditUser {
  user_id: string;
  razao_social?: string;
  cnpj?: string;
  phone?: string;
  email?: string;
}
