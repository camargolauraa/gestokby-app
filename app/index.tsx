import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";

import Colors from "@/app/constants/Colors";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderOnboarding from "@/components/HeaderOnboarding";

export default function InitialPage() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.background}>
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 77 }}
      >
        <HeaderOnboarding />
      </View>
      {/* Logo principal e botões */}
      <View style={{ alignItems: "center", gap: 150 }}>
        <Image source={require("../assets/images/principalLogo.png")} />
        {/* Botões */}
        <View style={{ gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Button title="Login" />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Button title="Fazer Cadastro" />
          </Pressable>
        </View>
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
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
