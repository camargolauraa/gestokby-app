import React from "react";

import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../../app/constants/Colors";

export default function HeaderPrincipal() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.background, { paddingTop: insets.top + 8 }]}>
      {/* Logo da Esquerda */}
      <Image
        style={styles.logo} // Aplicado estilo
        source={require("../../assets/images/headerLogo.png")}
      />

      {/* View para agrupar ícones da direita */}
      <View style={styles.rightIconsContainer}>
        {/* <Pressable onPress={() => navigation.navigate("Notifications")}>
          <Image source={require("../../assets/images/notificationIcon.png")} />
        </Pressable> */}
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../../assets/images/profileIcon.png")} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary,
    width: "100%",
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    height: 49,
    resizeMode: "contain",
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
