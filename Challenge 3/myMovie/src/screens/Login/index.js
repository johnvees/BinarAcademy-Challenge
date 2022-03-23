import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {colors, fakeStoreAPI, fonts} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {ILLogo} from '../../assets';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from '../../components';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        username: username, // mor_2314
        password: password, // 83r5^_
      };

      const results = await axios.post(`${fakeStoreAPI}/auth/login`, body);

      if (results.status === 201 || results.status === 200) {
        navigation.replace('Home');
        console.log(results);
      }
    } catch (error) {
      console.log(error);
      if (username === '') {
        Alert.alert('Gagal', 'Username Harus diisi');
      } else if (password === '') {
        Alert.alert('Gagal', 'Password Harus diisi');
      } else {
        Alert.alert('Gagal', 'Username dan Password Tidak Ada');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.backgroundScreen}
        barStyle="light-content"
      />
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.desc}>You've Been Missed :(</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={colors.text.primary}
        selectionColor={colors.button.background}
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={colors.text.primary}
        selectionColor={colors.button.background}
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <View style={{marginBottom: moderateScale(16)}} />
      <Button title={'Login'} onPress={postLogin} />
      <View style={{marginBottom: moderateScale(16)}} />

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: moderateScale(24),
        }}>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText1}>
            Not a Member? <Text style={styles.registerText}>Register Here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: moderateScale(24),
  },
  logo: {
    width: moderateScale(110),
    height: moderateScale(110),
    marginTop: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginBottom: moderateScale(8),
  },
  desc: {
    fontSize: moderateScale(16),
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: moderateScale(24),
  },
  textInput: {
    borderWidth: moderateScale(2),
    borderColor: colors.button.background,
    borderRadius: moderateScale(8),
    height: moderateScale(50),
    paddingStart: moderateScale(16),
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: moderateScale(14),
    marginBottom: moderateScale(16),
  },
  register: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  registerText: {
    color: colors.button.background,
    fontSize: moderateScale(14),
    fontFamily: fonts.primary[700],
  },
  registerText1: {
    color: colors.text.primary,
    fontSize: moderateScale(14),
    fontFamily: fonts.primary[400],
  },
});
