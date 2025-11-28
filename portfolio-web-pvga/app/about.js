import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/images/avatar.jpeg")}
          style={styles.avatar}
        />

        <Text style={styles.title}>Sobre Mim</Text>

        <Text style={styles.text}>
          Sou estudante de Ciência da Computação, atualmente no 5º período.
          Trabalho como testador no projeto CIn - Motorola na UFPE.
        </Text>

        <Text style={styles.text}>
          Meu objetivo é crescer profissionalmente, adquirir experiência e
          deixar minha marca na tecnologia.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  container: {
    alignItems: "center",
    padding: 24,
    paddingBottom: 80, // proteção contra o footer
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
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginBottom: 12,
  },
});
