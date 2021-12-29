import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar barStyle={"dark-content"} />
        <View style={styles.container}>
          <Text>Hello world!</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default App;
