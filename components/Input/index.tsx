// Input dados internos do aplicativo

// Arrumar: - cor de fundo quando allowEdit for false
//          - abrir teclado automaticamente ao clicar no ícone de editar
import React, { useEffect, useRef, useState } from "react";

import Colors from "@/app/constants/Colors";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const handleEditPress = () => {
    setIsEditing(true);
    useEffect(() => {
      if (isEditing) {
        inputRef.current?.focus();
      }
    }, [isEditing]);
  };
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
        editable={isEditing}
        onBlur={() => setIsEditing(false)}
        placeholderTextColor={allowEdit ? "#999" : "#000"}
      />
      {allowEdit && (
        <TouchableOpacity onPress={handleEditPress}>
          <Image
            source={require("../../assets/images/editIcon.png")}
            style={{ width: 14, height: 14 }}
          />
        </TouchableOpacity>
      )}
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
