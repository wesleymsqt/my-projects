import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Form } from "@/components/Form";
import { Filters } from "@/components/Filters";
import { Product } from "@/components/Product";

import { FilterStatus } from "@/types/FilterStatus";
import { ProductProps } from "@/types/Product";

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [status, setStatus] = useState<FilterStatus>(FilterStatus.PENDING);

  function handleProductAdd(productName: string) {
    const productAlreadyExists = products.find((p) => p.name === productName);

    if (productAlreadyExists) {
      return Alert.alert(
        "Produto existe",
        "Já existe um produto na lista com este nome."
      );
    }

    const newProduct = {
      id: String(new Date().getTime()),
      name: productName,
      done: false,
    };

    setProducts((prevState) => [...prevState, newProduct]);
  }

  function handleProductRemove(id: string) {
    Alert.alert("Remover", "Deseja remover este produto?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: () =>
          setProducts((prevState) =>
            prevState.filter((product) => product.id !== id)
          ),
      },
    ]);
  }

  function handleProductDone(id: string) {
    setProducts((prevState) =>
      prevState.map((product) =>
        product.id === id ? { ...product, done: !product.done } : product
      )
    );
  }

  function handleClearList() {
    Alert.alert(
      "Limpar lista",
      "Deseja limpar todos os produtos desta lista?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => setProducts([]) },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Form onAdd={handleProductAdd} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Filters status={status} onFilterChange={setStatus} />

          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearList}
          >
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={products.filter((product) =>
            status === FilterStatus.PENDING ? !product.done : product.done
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Product
              name={item.name}
              done={item.done}
              onRemove={() => handleProductRemove(item.id)}
              onPress={() => handleProductDone(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Nenhum produto nesta lista.
            </Text>
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
}
