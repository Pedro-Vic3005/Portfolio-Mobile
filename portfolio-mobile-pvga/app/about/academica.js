import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Academica() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      {/* IMAGEM ACADÊMICA */}
      <Image
        source={require("../../assets/images/academica.jpg")}
        style={styles.image}
      />

      

      <Text style={styles.text}>
       Atualmente no 5 período! Já fiz parte do Projeto de Extensão do curso de C3 de Programação Competitiva e já participei da Maratona da SBC de Programação!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 260,
    height: 160,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: "cover",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#065169",
    padding: 14,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
