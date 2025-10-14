import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";

import Colors from "../../constants/Colors";

export default function HeaderOnboarding() {
  return (
    <View style={styles.background}>
      <Image
        style={{ height: 49 }}
        source={require("../../assets/images/headerLogo.png")}
      />
      <Button title="Ajuda" color="#fff" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary,
    height: 85,
    width: "100%",
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
