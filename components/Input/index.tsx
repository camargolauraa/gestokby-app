// Input dados internos do aplicativo

// Arrumar: - cor de fundo quando allowEdit for false
//          - abrir teclado automaticamente ao clicar no ícone de editar
import React, { useRef } from "react";

import Colors from "@/app/constants/Colors";

import { StyleSheet, Text, TextInput, View } from "react-native";

type InputTypedProps = {
  placeholder?: string;
  label: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  value: string;
  onChangeText?: (text: string) => void;
  allowEdit?: boolean;
};

export default function InputTyped({
  placeholder,
  label,
  keyboardType = "default",
  value,
  onChangeText,
  allowEdit = false,
}: InputTypedProps) {
  const inputRef = useRef<TextInput>(null);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: allowEdit ? "#FFF" : "#1976d231",
        },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        ref={inputRef}
        editable={allowEdit}
        placeholderTextColor={allowEdit ? "#999" : "#000"}
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
  },
  input: {
    flex: 1,
    fontSize: 13,
    marginRight: 5,
    color: "#000",
  },
  label: {
    fontSize: 13,
    color: "#333",
    fontWeight: "bold",
    marginRight: 4,
  },
});
