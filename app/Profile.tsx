import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderPrincipal from "@/components/HeaderPrincipal";
import InputTyped from "@/components/Input";

export default function Profile() {
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
      <HeaderPrincipal />
      {/* Conteúdo Principal - INPUTS */}
      <View style={styles.container}>
        <Text style={styles.title}>PERFIL DA EMPRESA</Text>

        <InputTyped
          label="Nome da Empresa:"
          value={razaoSocial}
          placeholder="Nome da Empresa:"
        />
        <InputTyped label="CNPJ:" value={cnpj} placeholder="CNPJ" />
        <InputTyped
          label="Telefone:"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          allowEdit={true}
        />
        <InputTyped
          label="E-mail:"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          allowEdit={true}
        />
        <InputTyped
          label="Administrador Responsável:"
          value={administrador}
          keyboardType="default"
          onChangeText={setAdministrador}
          allowEdit={true}
        />
      </View>

      {/* --- BOTÕES  --- */}
      <View style={styles.buttonWrapper}>
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
  switchButtonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 40,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  switchButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 13,
  },
  logoutButtonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "50%",
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
