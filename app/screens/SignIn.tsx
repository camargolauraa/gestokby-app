import React from "react";

import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import Colors from "@/app/constants/Colors";
import Footer from "@/components/Footer";
import HeaderOnboarding from "@/components/HeaderOnboarding";

export default function SignIn() {
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
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#F5F7FA99"
          secureTextEntry
        />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Sua empresa não tem cadastro? </Text>
          <Pressable>
            <Text style={styles.signupLink}>Cadastre-se</Text>
          </Pressable>
        </View>

        {/* Botão customizado com Pressable */}
        <Pressable style={{ ...styles.button, alignSelf: "flex-end" }}>
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
  signupContainer: {
    flexDirection: "row",
    marginTop: 5,
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
