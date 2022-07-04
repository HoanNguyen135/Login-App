import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const InputStyle = ({ name, placehorder, value, onChange }) => {


  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={name} size={24} color="black" />
        </View>
        <TextInput
          placeholder={placehorder}
          style={styles.inputText}
          value={value}
          onChangeText={(value) => onChange(value)}
        />
      </View>
    </>
  );
};

export default InputStyle;
