import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import FormButton from "../components/FormButton";
import { AuthContext } from "../providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";

const ProfileScreen = ({ navigation }) => {
  // const {user, logout} = useContext(AuthContext);
  const auth = getAuth();
  const user = auth.currentUser;
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
      });
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Profile {user.email} </Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});
