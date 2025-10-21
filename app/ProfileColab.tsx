// TRAZER DADOS DO BACK END AQUI

import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderColab from "@/components/HeaderPrincipal";
import InputTyped from "@/components/Input";

export default function ProfileColab() {
  const navigation = useNavigation<any>();

  // Estado para armazenar os dados que viriam do backend
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [administrador, setAdministrador] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // LÓGICA PARA BUSCAR DADOS DO BACKEND
    setRazaoSocial("nome da empresa.......");
    setCnpj("XX.XXX.XXX/XXXX-XX");
  }, []);

  return (
    <View style={styles.background}>
      <HeaderColab />
      {/* Conteúdo Principal - INPUTS */}
      <View style={styles.container}>
        <Text style={styles.title}>COLABORADOR</Text>

        <InputTyped label="Nome da Empresa:" value={razaoSocial} />
        <InputTyped label="CNPJ:" value={cnpj} />
        <InputTyped label="Nome Completo:" value={administrador} />
        <InputTyped label="E-mail:" value={email} />
        <InputTyped label="Telefone:" value={telefone} />
      </View>

      {/* --- BOTÕES  --- */}
      <View style={styles.buttonWrapper}>
        {/* Botão de acessar histórico de trabalho */}
        <Pressable
          style={styles.buttonContainer2}
          onPress={() => {
            navigation.navigate("Historic");
          }}
        >
          <Image
            source={require("../assets/images/historicIcon.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.buttonText2}>Histórico de trabalho</Text>
        </Pressable>

        {/* Botão de redefinir senha */}
        <Pressable
          style={styles.buttonContainer2}
          onPress={() => {
            navigation.navigate("ResetPassword");
          }}
        >
          <Image
            source={require("../assets/images/safeIcon.png")}
            style={{ width: 16, height: 20 }}
          />
          <Text style={styles.buttonText2}>Redefinir minha senha</Text>
        </Pressable>

        {/* Botão de Sair */}
        <Pressable
          style={styles.logoutButtonContainer}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Image
            source={require("../assets/images/exitIcon.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.logoutButtonText}>Sair</Text>
        </Pressable>
      </View>

      {/* Rodapé */}
      <View style={styles.footerContainer}>
        <FooterSignedUp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 120,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  container: {
    padding: 20,
    marginBottom: 80,
    backgroundColor: "white",

    borderWidth: 1,
    borderBottomColor: Colors.primary,
    borderTopColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  buttonWrapper: {
    marginTop: 40,
    alignItems: "center",
    gap: 15,
  },
  buttonContainer2: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: 40,
    paddingHorizontal: 15,
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10,
  },
  buttonText2: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "left",
  },
  logoutButtonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "30%",
    height: 40,
    borderWidth: 1,
    borderColor: Colors.errorRed,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: Colors.errorRed,
    fontWeight: "bold",
    fontSize: 13,
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
