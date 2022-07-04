import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingScreen } from '../screens';
import { COLORS } from '../contains';

const SettingsStack = createNativeStackNavigator();

function SettingStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: COLORS.header
        },
        headerTintColor: COLORS.colorText
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingScreen} options={{title: "SettingScreen"}}/>
    </SettingsStack.Navigator>
  );
}


export default SettingStackScreen;