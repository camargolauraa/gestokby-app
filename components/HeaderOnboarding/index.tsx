import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "../../app/constants/Colors";

export default function HeaderOnboarding() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.background}>
      <Pressable onPress={() => navigation.navigate("index")}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/headerLogo.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Help")}>
        <Text style={styles.text}>Ajuda</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary,
    height: "100%",
    width: "100%",
    padding: 18,
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 49,
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
