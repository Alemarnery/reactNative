import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Layout from "./layout";

export default function App() {
  return (
    <SafeAreaProvider>
      <Layout />
    </SafeAreaProvider>
  );
}
