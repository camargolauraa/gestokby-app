import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderPrincipal from "@/components/HeaderPrincipal";
import InputTyped2 from "@/components/InputStyled2";

export default function AddBatch() {
  const navigation = useNavigation<any>();

  // Mudar de acordo com backend
  const [nomeProduto, setNomeProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [lote, setLote] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [notifQuantidade, setNotifQuantidade] = useState("");
  const [notifVencimento, setNotifVencimento] = useState("");

  const handleAdicionarLote = () => {
    const dadosDoLote = {
      nomeProduto,
      categoria,
      marca,
      lote,
      vencimento,
      notifQuantidade,
      notifVencimento,
    };
    // chamar API
  };

  return (
    <View style={styles.background}>
      <HeaderPrincipal />
      {/* Conteúdo Principal - INPUTS */}
      <View style={styles.container}>
        <Text style={styles.title}>ADICIONAR LOTE</Text>
        <InputTyped2
          label="Nome do produto:"
          placeholder="nome"
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />
        <InputTyped2
          label="Categoria:"
          placeholder="categoria"
          value={categoria}
          onChangeText={setCategoria}
        />
        <InputTyped2
          label="Marca:"
          placeholder="marca"
          value={marca}
          onChangeText={setMarca}
        />
        <InputTyped2
          label="Lote:"
          placeholder="XXXXX"
          value={lote}
          onChangeText={setLote}
        />
        <InputTyped2
          label="Vencimento:"
          placeholder="dd/mm/aaaa"
          value={vencimento}
          onChangeText={setVencimento}
        />
        <InputTyped2
          label="Notificar quantidade:"
          placeholder="unidades"
          value={notifQuantidade}
          onChangeText={setNotifQuantidade}
          keyboardType="numeric"
        />
        <InputTyped2
          label="Notificar vencimento:"
          placeholder="dias"
          value={notifVencimento}
          onChangeText={setNotifVencimento}
        />
        <Text style={styles.text}>
          Você será notificado quanto a quantidade no estoque ou a distância
          para o vencimento forem menores que os que você informou.
        </Text>
        {/* Botão de Registrar */}
        <Pressable
          style={styles.registerButtonContainer}
          onPress={() => {
            handleAdicionarLote();
            navigation.navigate("Home");
          }}
        >
          <Image source={require("../assets/images/plusIcon.png")} />
          <Text style={styles.registerButtonText}>Registrar lote</Text>
        </Pressable>
      </View>

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
    margin: 5,
    textAlign: "center",
  },
  text: {
    fontSize: 11,
    color: Colors.greyText,
    marginTop: 10,
    textAlign: "center",
  },
  registerButtonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 20,
    gap: 10,

    width: "40%",
    height: 40,

    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10,
  },
  registerButtonText: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
