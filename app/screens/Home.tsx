import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useUsers } from "../hooks";

export function HomeScreen() {
  const { users, loadUsers } = useUsers();

  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user, index) => (
          <View
            key={index}
            style={[
              styles.user,
              index < users.length - 1 ? { marginBottom: 16 } : {},
            ]}
          >
            <Image
              source={{ uri: user.pictures[0] }}
              style={{
                width: 128,
                height: 128,
                resizeMode: "cover",
              }}
            />
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
            <Text>Distance: {user.distance}km</Text>
            <Text>Bio: {user.bio}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  user: {
    display: "flex",
    borderColor: "black",
    borderWidth: 2,
  },
});
