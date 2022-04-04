import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Detail, Home, Login, Register, Successful} from '../screens';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Successful" component={Successful} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
