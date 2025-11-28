import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function Hero() {
  return (
    <View style={styles.container}>
      {/* Nome */}
      <Text style={styles.title}>
        Olá, sou Pedro Victor Gomes de Araújo
      </Text>

      {/* Profissão */}
      <Text style={styles.subtitle}>
        Testador de Softwares | Estudante de Ciência da Computação
      </Text>

      {/* Descrição */}
      <Text style={styles.description}>
        “Acredite na grandeza de pequenos começos”
      </Text>

      {/* Botão de contato */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL(
            "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CNvvJFXwClSGjLrZdVMcQnlhwGrQsNhNZQgmGgcZdfZnhSLznRXZkXNvGKjvSfDLQhpwfxVsltVVPqjbJkVJxhstkScnvDCLvmBlnNBHSjTHftQjcXCHRLRvMRdZBzzRMKVBvjlNnWvjBpVgfpDqfBTDNr"
          )
        }
      >
        <Text style={styles.buttonText}>Entre em Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                     // ocupa toda a altura disponível
    justifyContent: "center",    // centraliza verticalmente
    alignItems: "center",        // centraliza horizontalmente
    paddingHorizontal: 20,
    backgroundColor: "#F9FAFB",  // equivalente ao bg-gray-50
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#1F2933",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16,
    color: "#4B5563",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 24,
    color: "#6B7280",
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
