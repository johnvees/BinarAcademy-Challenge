import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Register} from '../screens';
import {DetailsHeader} from '../components';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DetailsHeader" component={DetailsHeader} />
    </Stack.Navigator>
  );
}
