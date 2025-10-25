import React from "react";

import { ILogin } from "../interfaces/IAuth";

import { signIn } from "../services/auth";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "@/app/constants/Colors";
import Footer from "@/components/Footer";
import HeaderOnboarding from "@/components/HeaderOnboarding";

export default function SignIn() {
  const navigation = useNavigation<any>();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSignIn = async () => {
    const credentials: ILogin = { login: email, password: password };
    // console.log(credentials);
    try {
      const response = await signIn(credentials);
      console.log(response);
      if (response && response.error) {
        setError(response.error);
      }
      if (response && response.token) {
        navigation.navigate("Home");
      }
    } catch (error) {
      setError("Erro ao fazer login");
    }
  };

  // useEffect(() => {
  //   console.log(email, password);
  // }, [email, password]);

  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <HeaderOnboarding />
      </View>

      {/* Caixa de login principal */}
      <View style={styles.box}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#F5F7FA99"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(t) => setEmail(t)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#F5F7FA99"
          secureTextEntry
          value={password}
          onChangeText={(t) => setPassword(t)}
        />

        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>Sua empresa não tem cadastro? </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signinLink}>Cadastre-se</Text>
          </Pressable>
        </View>

        {/* Mensagem de erro exibida abaixo do input de e-mail */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Botão customizado com Pressable */}
        <Pressable
          style={{ ...styles.button, alignSelf: "flex-end" }}
          onPress={() => {
            handleSignIn();
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
      {/* Rodapé */}
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 77,
  },
  box: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 25,
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.greyText,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: Colors.secondary,
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  errorText: {
    alignSelf: "flex-start",
    color: "#ff3333",
    fontSize: 12,
    marginTop: 6,
    marginBottom: -4,
  },
  signinContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  signinText: {
    fontSize: 12,
    color: Colors.greyText,
    fontWeight: "bold",
  },
  signinLink: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 39,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
