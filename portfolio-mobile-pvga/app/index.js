import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      

      <View style={{ flex: 1 }}>
        <Hero />
      </View>

      
    </SafeAreaView>
  );
}
