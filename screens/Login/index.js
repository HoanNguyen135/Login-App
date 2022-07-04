import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { InputStyle, Loading } from "../../component";
import { IMAGES } from "../../contains";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/login";

const LoginScreen = () => {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const logging = useSelector((state) => state.Login.dataLogin[0].logging);

  if (logging) {
    return <Loading />;
  }

  const onLogin = () => {
    dispatch(fetchUser({ username: username, password: password }));
  };

  return (
    <>
      <ImageBackground
        source={IMAGES.background}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={IMAGES.login} style={styles.imageLogin} />
          </View>
          <Text style={styles.textLogin}>SIGN IN</Text>
          <InputStyle
            name={"person"}
            placehorder={"Username"}
            value={username}
            onChange={(value) => setUserName(value)}
          />
          <InputStyle
            name={"lock-open"}
            placehorder={"Password"}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <TouchableOpacity onPress={onLogin} style={styles.buttonLogin}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;
