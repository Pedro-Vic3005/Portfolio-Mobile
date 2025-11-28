import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Profissional() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* IMAGEM PROFISSIONAL */}
      <Image
        source={require("../../assets/images/profissional.jpg")}
        style={styles.image}
      />

      <Text style={styles.title}>Experiência Profissional</Text>

      <Text style={styles.text}>
        Ultimamente estou estagiando na área de Teste de Software como Tester no Projeto CIn-Motorola na UFPE!
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
    width:260,
    height: 250,
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
    lineHeight: 22,
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
