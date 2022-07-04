import {View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { logOut } from '../../store/login';

const IconHeader = () => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const dispatch = useDispatch()

  const logout = () =>{
    setVisible(false);
    dispatch(logOut())
  }

  return (
    <>
      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<Feather onPress={showMenu} name="menu" size={24} color={"white"} />}
        onRequestClose={hideMenu}
        style={{backgroundColor: '#FFFFFF'}}
      >
        <MenuItem onPress={hideMenu}>Imformation</MenuItem>
        <MenuItem onPress={hideMenu}>HOME</MenuItem>
        <MenuItem onPress={hideMenu}>SETTING</MenuItem>
        <MenuItem onPress={logout}>LOGOUT</MenuItem>
      </Menu>
    </View>
    </>
  );
};

export default IconHeader;
