import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Header />

        <View style={{ flex: 1 }}>
          <Slot />
        </View>

        <SafeAreaView edges={["bottom"]}>
          <Footer />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
