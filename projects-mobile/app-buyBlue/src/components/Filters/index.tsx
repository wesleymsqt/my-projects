import { View } from "react-native";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";

type Props = {
  status: FilterStatus;
  onFilterChange: (status: FilterStatus) => void;
};

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Filters({ status, onFilterChange }: Props) {
  return (
    <View style={styles.list}>
      {FILTER_STATUS.map((item) => (
        <Filter
          key={item}
          status={item}
          isActive={item === status}
          onPress={() => onFilterChange(item)}
        />
      ))}
    </View>
  );
}
