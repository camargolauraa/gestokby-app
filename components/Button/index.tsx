import Colors from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

export default function Button({ title }: { title: string }) {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: Colors.primary,
        borderRadius: 9,
        alignItems: "center",
      }}
    >
      {title && (
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
          {title}
        </Text>
      )}
    </View>
  );
}
