import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../../app/constants/Colors";

export default function HeaderOnboarding() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.background, { paddingTop: insets.top + 8 }]}>
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
    position: "absolute",
    // paddingTop: insets.top,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: "100%",
    padding: 18,
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
