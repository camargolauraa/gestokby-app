import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Colors from "../../app/constants/Colors";

export default function FooterSignedUp() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.background}>
      <Pressable onPress={() => navigation.navigate("HomeColab")}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/homeIcon.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primary,
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
