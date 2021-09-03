import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapScreen } from "./src/components/map.screen";

export default function App() {
  return (
    <MapScreen />

    // <View style={styles.container}>
    //   <Text>Put a Map Screen here!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
