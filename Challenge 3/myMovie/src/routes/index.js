import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, MovieDetail, Register} from '../screens';
import {DetailsHeader} from '../components';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
=======
>>>>>>> ad842432c3ec5aecb39c8ae644238eb61e9eec08
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DetailsHeader" component={DetailsHeader} />
    </Stack.Navigator>
  );
}
