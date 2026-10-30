import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { StatusIcon } from "@/components/StatusIcon";
import { FilterStatus } from "@/types/FilterStatus";

type Props = TouchableOpacityProps & {
  name: string;
  done: boolean;
  onRemove: () => void;
};

export function Product({ name, done, onRemove, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <StatusIcon status={done ? FilterStatus.DONE : FilterStatus.PENDING} />

      <View style={styles.content}>
        <Text style={done ? styles.nameDone : styles.name}>{name}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <MaterialIcons name="delete" size={24} color="#808080" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
