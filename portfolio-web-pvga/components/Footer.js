import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.copy}>
        © {new Date().getFullYear()} PVGA3005. Todos os direitos reservados.
      </Text>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/pvga3005/?hl=en")}>
          <Text style={styles.link}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/pedro-victor-271400289/")}>
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/Pedro-Vic3005")}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    backgroundColor: "#065169",
    paddingVertical: 14,
    paddingBottom: 24,   // evita sobrepor botões do sistema
    alignItems: "center",
  },
  copy: { color: "#fff", marginBottom: 8 },
  row: { flexDirection: "row", gap: 18 },
  link: { color: "#fff" },
});
