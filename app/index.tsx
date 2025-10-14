import React from "react";

import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderOnboarding from "@/components/HeaderOnboarding";
import Colors from "@/constants/Colors";

export default function InitialPage() {
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
          <Link href="../signIn" asChild>
            <Pressable>
              <Button title="Fazer Login" />
            </Pressable>
          </Link>

          <Link href="/signUp" asChild>
            <Button title="Fazer Cadastro" />
          </Link>
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
