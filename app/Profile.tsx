import React, { useCallback, useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderPrincipal from "@/components/HeaderPrincipal";
import InputTyped from "@/components/Input";
import { IEditUser, IUserData } from "@/interfaces/IAuth";
import { editUser } from "@/services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  USER: "@meuApp:user",
  TOKEN: "@meuApp:token",
};

export default function Profile() {
  const navigation = useNavigation<any>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState("");

  // Estado para armazenar os dados que viriam do backend
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const [id, setId] = useState<string>("");

  const loadUserData = async () => {
    console.log("A carregar dados do utilizador...");
    try {
      const storedUserString = await AsyncStorage.getItem(STORAGE_KEYS.USER);
      if (storedUserString) {
        const user = JSON.parse(storedUserString) as IUserData; // console.log("Dados do utilizador carregados:", user);
        setRazaoSocial(user.razao_social);
        setCnpj(user.cnpj);
        setTelefone(user.phone);
        setEmail(user.email);
        setId(user.id);
      } else {
        console.log("Nenhum dado de utilizador encontrado."); // Se não achar o utilizador, força o logout
        await handleLogout();
      }
    } catch (e) {
      console.error("Falha ao carregar dados do utilizador", e);
    }
  }; // 4. Substituímos useEffect por useFocusEffect // Isto corre sempre que a tela 'Profile' é focada

  useFocusEffect(
    useCallback(() => {
      loadUserData();
    }, [])
  );

  const handleEditUser = async () => {
    if (!id) {
      Alert.alert(
        "Erro",
        "ID do utilizador não encontrado. Tente logar novamente."
      );
      return;
    }

    const payload: IEditUser = {
      user_id: id,
      razao_social: razaoSocial,
      cnpj: cnpj,
      phone: telefone,
      email: email,
    };
    setIsLoading(true);

    try {
      const response = await editUser(payload);

      if (response && "status" in response && response.status === 200) {
        // --- 5. CORREÇÃO PRINCIPAL ---
        // Se a API guardou, guardamos no AsyncStorage também
        const updatedUserData: IUserData = {
          id: id,
          razao_social: razaoSocial,
          cnpj: cnpj,
          phone: telefone,
          email: email,
        };
        await AsyncStorage.setItem(
          STORAGE_KEYS.USER,
          JSON.stringify(updatedUserData)
        ); // --- Fim da Correção ---
        Alert.alert("Sucesso", "Perfil atualizado!");
        navigation.navigate("Home");
        setError("");
      } else if (response && "data" in response) {
        setError(response.data?.error);
      } else if (response && "error" in response) {
        setError(String(response.error));
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }; // 6. CORREÇÃO DO LOGOUT

  const handleLogout = async () => {
    console.log("A fazer logout..."); // Limpa o token E o utilizador do storage
    await AsyncStorage.removeItem(STORAGE_KEYS.TOKEN);
    await AsyncStorage.removeItem(STORAGE_KEYS.USER); // Reseta a navegação para a tela de SignIn // Isto impede o utilizador de "voltar" para a Home

    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }], // Certifique-se que o nome da rota é 'SignIn'
    });
  };

  return (
    <View style={styles.background}>
      <HeaderPrincipal />
      {/* Conteúdo Principal - INPUTS */}
      <View style={styles.container}>
        <Text style={styles.title}>PERFIL DA EMPRESA</Text>

        <InputTyped
          label="Nome da Empresa:"
          value={razaoSocial}
          placeholder="Nome da Empresa:"
        />
        <InputTyped label="CNPJ:" value={cnpj} placeholder="CNPJ" />
        <InputTyped
          label="Telefone:"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
          allowEdit={true}
        />
        <InputTyped
          label="E-mail:"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          allowEdit={true}
        />
        <Pressable
          style={styles.confirmButton}
          onPress={() => {
            handleEditUser();
            console.log("Confirmar alterações");
          }}
        >
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
      </View>

      {/* --- BOTÕES  --- */}
      <View style={styles.buttonWrapper}>
        {/* Botão de Sair */}
        <Pressable
          style={styles.logoutButtonContainer}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Image
            source={require("../assets/images/exitIcon.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.logoutButtonText}>Sair</Text>
        </Pressable>
      </View>

      {/* Rodapé */}
      <View style={styles.footerContainer}>
        <FooterSignedUp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 120,
    alignContent: "center",
    justifyContent: "flex-start",
  },
  container: {
    padding: 20,
    marginBottom: 80,
    backgroundColor: "white",

    borderWidth: 1,
    borderBottomColor: Colors.primary,
    borderTopColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  buttonWrapper: {
    marginTop: 40,
    alignItems: "center",
    gap: 15,
  },
  switchButtonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 40,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
  switchButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 13,
  },
  logoutButtonContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "50%",
    height: 40,
    borderWidth: 1,
    borderColor: Colors.errorRed,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: Colors.errorRed,
    fontWeight: "bold",
    fontSize: 13,
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  confirmButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
