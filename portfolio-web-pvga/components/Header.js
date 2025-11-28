import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.logo}>Meu Portfólio</Text>

        <View style={styles.menu}>
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text style={styles.link}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/forca")}>
            <Text style={styles.link}>Forca</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/about")}>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#065169",
  },
  container: {
    height: 64,
    backgroundColor: "#065169",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
  },
  link: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 16,
  },
});
