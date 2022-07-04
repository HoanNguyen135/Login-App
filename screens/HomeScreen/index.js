import { View, Text ,Button} from "react-native";
import {React,useState} from "react";
import { useSelector } from "react-redux";
import styles from "./styles";

const HomeScreen = () => {
  const {user} = useSelector((state) => state.Login.dataLogin[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Hello ${user}`}</Text>
    </View>
  );
};

export default HomeScreen;
