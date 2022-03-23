import {StyleSheet, Text, View, Alert, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {colors, fakeStoreAPI, fonts} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {ILLogo} from '../../assets';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Button} from '../../components';

let regexPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
let regexEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: phone,
      };

      // console.log(password);
      // console.log(email);

      const resultRegexPass = regexPass.test(password);
      const resultRegexEmail = regexEmail.test(email);

      // console.log(resultRegexPass);
      // console.log(resultRegexEmail);

      const results = await axios.post(`${fakeStoreAPI}/users`, body);

      if (email === '') {
        Alert.alert('Gagal', 'Email belum diisi');
      } else if (resultRegexEmail === false) {
        Alert.alert('Gagal', 'Format Email Tidak Sesuai');
      } else if (username === '') {
        Alert.alert('Gagal', 'Username belum diisi');
      } else if (password === '') {
        Alert.alert('Gagal', 'Password belum diisi');
      } else if (regexPass === false) {
        Alert.alert('Gagal', 'Format Password Tidak Sesuai');
      } else if (firstname === '') {
        Alert.alert('Gagal', 'First Name belum diisi');
      } else if (lastname === '') {
        Alert.alert('Gagal', 'Last Name belum diisi');
      } else if (phone === '') {
        Alert.alert('Gagal', 'Nomor Telepon belum diisi');
      } else if (results.status === 201 || results.status === 200) {
        navigation.replace('Login');
        console.log(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.backgroundScreen}
        barStyle="light-content"
      />
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>Hi! Nice To See You</Text>
      <Text style={styles.desc}>Create Your Account Below!</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.text.primary}
          selectionColor={colors.button.background}
          onChangeText={text => {
            setEmail(text);
          }}
        />
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
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          placeholderTextColor={colors.text.primary}
          selectionColor={colors.button.background}
          onChangeText={text => {
            setFirstname(text);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last name"
          placeholderTextColor={colors.text.primary}
          selectionColor={colors.button.background}
          onChangeText={text => {
            setLastName(text);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          placeholderTextColor={colors.text.primary}
          selectionColor={colors.button.background}
          keyboardType="phone-pad"
          onChangeText={text => {
            setPhone(text);
          }}
        />
        <View style={{marginBottom: moderateScale(16)}} />
        <Button title={'Register'} onPress={postRegister} />
        <View style={{marginBottom: moderateScale(16)}} />
      </ScrollView>
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
});
