import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Register} from '../screens';
import {DetailsHeader} from '../components';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
<<<<<<< HEAD
    <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
=======
>>>>>>> ad842432c3ec5aecb39c8ae644238eb61e9eec08
      <Stack.Screen name="Login" component={Login} />
=======
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
>>>>>>> 77282afd6b4771c1d22e117f4a41ee7f80a7d593
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DetailsHeader" component={DetailsHeader} />
    </Stack.Navigator>
  );
}
