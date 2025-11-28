import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/avatar.jpeg")}
        style={styles.avatar}
      />

      <Text style={styles.title}>Sobre Mim</Text>

      <Text style={styles.text}>
        Sou estudante de Ciência da Computação, atualmente no 5º período.
        Trabalho como testador no projeto CIn - Motorola na UFPE.
      </Text>

      <Text style={styles.text}>
        Meu objetivo é buscar conhecimento, crescer profissionalmente e deixar
        minha marca no mundo.
      </Text>

      {/* BOTÕES */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/about/academica")}
      >
        <Text style={styles.buttonText}>Experiência Acadêmica</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/about/profissional")}
      >
        <Text style={styles.buttonText}>Experiência Profissional</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#065169",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 10,
    marginTop: 16,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
