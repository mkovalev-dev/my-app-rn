import {
  Button,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      <ImageBackground
        source={require("./assets/home-intro.gif")}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.65)",
            width: "100%",
            height: "100%",
          }}
        ></View>
        <View style={styles.logo}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 90, height: 90, marginBottom: 100 }}
          />
        </View>
        <View style={{ margin: 40 }}>
          <TextInput
            style={{
              color: "#ffffff",
              borderWidth: 1,
              borderColor: "#fff",
              height: 50,
              width: "100%",
              borderRadius: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
            placeholder="Email..."
            placeholderTextColor="#fff"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={{
              color: "#ffffff",
              borderWidth: 1,
              borderColor: "#fff",
              height: 50,
              width: "100%",
              marginTop: 20,
              borderRadius: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
            placeholder="Password..."
            secureTextEntry={true}
            placeholderTextColor="#fff"
            onChangeText={(email) => setEmail(email)}
          />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{ color: "white" }}>Войти</Text>
          </TouchableOpacity>
          <Button title="Войти с помощью Apple ID" color="#fff" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(224,173,173,0.75)",
  },
  loginBtn: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "tomato",
  },
  logo: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});

export default App;
