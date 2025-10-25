import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderPrincipal from "@/components/HeaderPrincipal";
import Search from "@/components/Search";
import { IUserData } from "@/interfaces/IAuth";

const STORAGE_KEYS = {
  USER: "@meuApp:user",
};

// Constante com dados de exemplo para a lista de produtos
const DUMMY_PRODUCTS = [
  {
    id: "1",
    name: "NOME DO PRODUTO",
    category: "Categoria",
    brand: "MARCA X LTDA",
    lote: "00000",
    validade: "dd/mm/aaaa",
    hasWarning: true,
    isChecked: true,
  },
  {
    id: "2",
    name: "NOME DO PRODUTO",
    category: "Categoria",
    brand: "MARCA X LTDA",
    lote: "00000",
    validade: "dd/mm/aaaa",
    hasWarning: false,
    isChecked: true,
  },
  {
    id: "3",
    name: "NOME DO PRODUTO",
    category: "Categoria",
    brand: "MARCA X LTDA",
    lote: "00000",
    validade: "dd/mm/aaaa",
    hasWarning: true,
    isChecked: false,
  },
];

export default function Home() {
  const navigation = useNavigation<any>();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [userData, setUserData] = useState<IUserData | null>(null);
  console.log("User Data:", userData);

  useEffect(() => {
    async function loadUserData() {
      try {
        // Tenta buscar a string do usuário no storage
        const storedUserString = await AsyncStorage.getItem(STORAGE_KEYS.USER);

        if (storedUserString) {
          // Se encontrou, converte de volta para objeto
          const user = JSON.parse(storedUserString) as IUserData;
          setUserData(user);
          console.log("User Data:", user);
        } else {
          console.log("Nenhum dado de usuário encontrado.");
          navigation.navigate("Login");
        }
      } catch (e) {
        console.error("Falha ao carregar dados do usuário", e);
      }
    }

    loadUserData();
  }, []);

  return (
    <View style={styles.background}>
      <HeaderPrincipal />
      {/* Bloco de Informações do Administrador */}
      <View style={styles.adminInfoContainer}>
        <Text style={styles.adminName}>CONTA DE ADMINISTRADOR</Text>
        <Text style={styles.companyDetails}>
          Empresa: {userData ? userData.razao_social : "Carregando..."}
        </Text>
        <Text style={styles.companyDetails}>
          CNPJ: {userData ? userData.cnpj : "Carregando..."}
        </Text>
      </View>
      {/* Bloco de Navegação */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Meus produtos:</Text>
        <View style={styles.actionIcons}>
          <Pressable onPress={() => setIsSearchVisible(!isSearchVisible)}>
            <Image source={require("../assets/images/searchIcon.png")} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("AddBatch")}>
            <Image source={require("../assets/images/plusIcon.png")} />
          </Pressable>
        </View>
      </View>

      {isSearchVisible && (
        <View style={styles.searchBarContainer}>
          <Search navigation={navigation} />
        </View>
      )}

      {/* ScrollView */}

      <ScrollView contentContainerStyle={styles.container}>
        {/* Bloco da Lista de Produtos */}

        {DUMMY_PRODUCTS.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productCategory}>{product.category}</Text>
              <Text style={styles.productDetails}>Marca: {product.brand}</Text>
              <Text style={styles.productDetails}>Lote: {product.lote}</Text>
              <Text style={styles.productDetails}>
                Validade: {product.validade}
              </Text>
            </View>
            {product.isChecked && (
              <Image source={require("../assets/images/checkIcon.png")} />
            )}
          </View>
        ))}
      </ScrollView>

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
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: "120%",
    borderWidth: 1,
    borderTopColor: Colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  adminInfoContainer: {
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  adminName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.greyText,
    marginBottom: 15,
  },
  companyDetails: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.greyText,
  },
  productsSection: {
    marginTop: 20,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  actionIcons: {
    flexDirection: "row",
    gap: 35,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
    zIndex: 10,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productCategory: {
    fontSize: 14,
    color: "grey",
    marginBottom: 10,
  },
  productDetails: {
    fontSize: 12,
    color: "grey",
  },
  productStatusIcons: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
