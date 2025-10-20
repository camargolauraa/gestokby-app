import React from "react";
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "@/app/constants/Colors";
import Footer from "@/components/Footer";
import HeaderOnboarding from "@/components/HeaderOnboarding";

export default function Help() {
  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <HeaderOnboarding />
      </View>

      <Text style={styles.title}>
        Entre em contato com nossa equipe de suporte.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          Linking.openURL(
            "https://wa.me/5535910013418?text=Ol%C3%A1%21%20Preciso%20de%20ajuda%20com%20o%20app%20Gestok.by%2E"
          );
        }}
      >
        <Image source={require("../assets/images/wppLogo.png")} />
        <Text style={styles.buttonText}>Suporte via WhatsApp</Text>
      </Pressable>

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
    paddingTop: 120,
    paddingHorizontal: "10%",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 77,
  },
  title: {
    fontSize: 20,
    color: Colors.greyText,
    fontWeight: "600",
    marginBottom: 250,
    textAlign: "left",
    width: "100%",
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    gap: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 17,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
});
