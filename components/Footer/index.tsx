import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        paddingBottom: insets.bottom - 4,
        paddingTop: 12,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#000000", fontSize: 11, fontWeight: "600" }}>
        Desenvolvido por byron.solutions
      </Text>
    </View>
  );
}
