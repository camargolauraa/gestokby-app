import React from "react";

import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderPrincipal from "@/components/HeaderPrincipal";

export default function SignIn() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.background}>
      <View style={styles.headerContainer}>
        <HeaderPrincipal />
      </View>

      {/* Rodapé */}
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <FooterSignedUp />
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
