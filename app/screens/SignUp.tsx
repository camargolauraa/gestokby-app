import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "@/app/constants/Colors";
import Footer from "@/components/Footer";
import HeaderOnboarding from "@/components/HeaderOnboarding";

export default function SignUp() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <HeaderOnboarding />
      </View>

      {/* Caixa de cadastro principal */}
      <View style={styles.box}>
        <Text style={styles.title}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#F5F7FA99"
          autoCapitalize="none"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Razão Social"
          placeholderTextColor="#F5F7FA99"
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#F5F7FA99"
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#F5F7FA99"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#F5F7FA99"
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#F5F7FA99"
          secureTextEntry
        />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Sua empresa já está cadastrada?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.signupLink}>Login</Text>
          </Pressable>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
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
  signupContainer: {
    flexDirection: "row",
    marginTop: 5,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  signupText: {
    fontSize: 12,
    color: Colors.greyText,
    fontWeight: "bold",
  },
  signupLink: {
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
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
