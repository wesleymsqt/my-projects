import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F2F3F5",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 16,
    color: "#333",
  },
  nameDone: {
    fontSize: 16,
    color: "#A0A0B2",
    textDecorationLine: "line-through",
  },
  button: {
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});
