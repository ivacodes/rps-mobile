import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Rps from "./components/Rps";

export default function App() {
  return (
    <View style={styles.container}>
      <Rps />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(54, 14, 14)",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
