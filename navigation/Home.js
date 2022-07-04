import * as React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { IconHeader } from '../component';
import { COLORS } from '../contains';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor: COLORS.header
        },
        headerTintColor:COLORS.colorText
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{title: "HomeScreen",headerRight: () => (<IconHeader/>)}}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;