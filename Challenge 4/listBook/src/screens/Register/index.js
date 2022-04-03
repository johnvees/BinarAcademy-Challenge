import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors, fonts} from '../../utils';
import {ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {ms} from 'react-native-size-matters';

const Login = ({navigation}) => {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Gap height={16} />
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.title}>Hi! Nice To See You</Text>
      <Text style={styles.titleDesc}>Create Your Account Below!</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Full Name"
        placeholderTextColor={colors.text.primary}
        selectionColor={colors.button.background}
        onChangeText={text => {
          setFullname(text);
        }}
      />
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
        placeholder="Password"
        placeholderTextColor={colors.text.primary}
        selectionColor={colors.button.background}
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Gap height={16} />
      <Button type={'fullButton'} title={'Register'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Button
          onPress={() => navigation.navigate('Successful')}
          type={'textOnly'}
          secondaryTitle={`Already Have an Account?`}
          primaryTitle={' Login Here'}
        />
      </View>
      <Gap height={16} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    padding: ms(24),
  },
  logo: {
    marginBottom: ms(32),
    height: ms(80),
    resizeMode: 'contain',
  },
  title: {
    fontSize: ms(24),
    fontFamily: fonts.secondary[700],
    color: colors.text.primary,
    marginBottom: ms(8),
  },
  titleDesc: {
    fontSize: ms(20),
    fontFamily: fonts.secondary[600],
    color: colors.text.primary,
    marginBottom: ms(24),
  },
  textInput: {
    borderRadius: ms(8),
    backgroundColor: colors.white,
    height: ms(50),
    paddingStart: ms(16),
    color: colors.text.primary,
    fontFamily: fonts.primary[400],
    fontSize: ms(14),
    marginBottom: ms(16),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
