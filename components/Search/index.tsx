import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { getProdutos } from "@/services/produtos"; // 1. REMOVA OU COMENTE O IMPORT REAL DA API
import Colors from "@/app/constants/Colors";

type SearchBarProps = {
  navigation: any;
};

// --- MOCK DATA ---
// 2. CRIE UMA LISTA DE PRODUTOS FALSA PARA TESTES
const mockProdutos = [
  { id: 1, nome: "Leite Integral" },
  { id: 2, nome: "Pão Francês" },
  { id: 3, nome: "Queijo Minas" },
  { id: 4, nome: "Leite Desnatado" },
  { id: 5, nome: "Café em Pó" },
  { id: 6, nome: "Arroz Agulhinha" },
  { id: 7, nome: "Feijão Carioca" },
  { id: 8, nome: "Pão de Forma" },
];
// --- FIM DO MOCK DATA ---

export default function Search({ navigation }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [listaProdutos, setListaProdutos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // --- FUNÇÃO DE BUSCA MODIFICADA ---
  // 3. ALTERE A FUNÇÃO PARA USAR OS DADOS FALSOS
  const fetchProdutos = async (term: string) => {
    if (term.length < 2) {
      setListaProdutos([]);
      return;
    }
    setIsLoading(true);

    // Simula um atraso de rede (500ms)
    setTimeout(() => {
      const filteredData = mockProdutos.filter((produto) =>
        produto.nome.toLowerCase().includes(term.toLowerCase())
      );
      setListaProdutos(filteredData);
      setIsLoading(false);
    }, 500);
  };
  // --- FIM DA FUNÇÃO MODIFICADA ---

  const handleInputChange = (term: string) => {
    setSearchTerm(term);
    fetchProdutos(term);
  };

  const renderSuggestionItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => {
        navigation.navigate("Produto", { id: item.id });
        setSearchTerm(item.nome);
        setListaProdutos([]);
      }}
    >
      <Text style={styles.suggestionText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um produto..."
          placeholderTextColor={Colors.secondary}
          value={searchTerm}
          onChangeText={handleInputChange}
        />
      </View>

      {listaProdutos.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            data={listaProdutos}
            renderItem={renderSuggestionItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
}

// Estilos permanecem os mesmos
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  dropdown: {
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.secondary,
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionText: {
    fontSize: 14,
  },
});
