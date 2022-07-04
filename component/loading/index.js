import { View, Text,ActivityIndicator } from "react-native";
import React from "react";
import styles from "./style";

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

export default Loading;
