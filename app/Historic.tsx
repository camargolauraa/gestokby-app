// INTEGRAR BACK

import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Colors from "@/app/constants/Colors";
import FooterSignedUp from "@/components/FooterSignedUp";
import HeaderColab from "@/components/HeaderPrincipal";

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

export default function Historic() {
  return (
    <View style={styles.background}>
      <HeaderColab />
      {/* Bloco de Navegação */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Histórico de conclusão:</Text>
      </View>

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

            <View style={{ marginLeft: 10 }}>
              <Text
                style={[
                  styles.productDetails,
                  { fontWeight: "bold", color: Colors.primary },
                ]}
              >
                Concluído em:
              </Text>
              <Text
                style={[
                  styles.productDetails,
                  {
                    fontWeight: "bold",
                    color: Colors.primary,
                    textAlign: "center",
                  },
                ]}
              >
                dd/mm/aaaa
              </Text>
            </View>
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
  productsSection: {
    margin: 40,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondary,
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
