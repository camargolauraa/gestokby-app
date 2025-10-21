// Input dados internos do aplicativo

import React from "react";

import Colors from "@/app/constants/Colors";

import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type InputTypedProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
};

export default function InputTyped2({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: InputTypedProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  label: {
    fontSize: 13,
    color: Colors.greyText,
    fontWeight: "bold",
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: "#000",
  },
});
