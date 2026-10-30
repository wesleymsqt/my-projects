import { useState } from "react";
import { View, Alert } from "react-native";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { styles } from "./styles";

type Props = {
  onAdd: (name: string) => void;
};

export function Form({ onAdd }: Props) {
  const [name, setName] = useState("");

  function handleAdd() {
    if (name.trim().length === 0) {
      return Alert.alert(
        "Novo produto",
        "Informe o nome do produto para adicionar."
      );
    }

    onAdd(name);
    setName("");
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="O que você precisa comprar?"
        value={name}
        onChangeText={setName}
      />
      <Button title="ADICIONAR" onPress={handleAdd} />
    </View>
  );
}
