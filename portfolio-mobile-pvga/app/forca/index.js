import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ForcaIntro() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      

      <View style={styles.container}>
        <Text style={styles.title}>Jogo da Forca</Text>
        <Text style={styles.subtitle}>
          Teste suas habilidades no jogo da forca!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/forca/game")}
        >
          <Text style={styles.buttonText}>Começar Jogo</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
