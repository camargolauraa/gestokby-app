import React from "react";
import { Text, View } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <Text style={{ color: "#000000", fontSize: 11, fontWeight: "600" }}>
        Desenvolvido por byron.solutions
      </Text>
    </View>
  );
}
