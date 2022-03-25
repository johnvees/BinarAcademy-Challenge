import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILNoConnection} from '../../assets';
import {moderateScale} from 'react-native-size-matters';
import {colors, fonts} from '../../utils';

const NoConnectionComp = ({onCheck}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundScreen,
      }}>
      <Image
        source={ILNoConnection}
        style={{
          height: moderateScale(200),
          width: moderateScale(200),
          marginBottom: moderateScale(20),
        }}
      />
      <Text
        style={{
          fontSize: moderateScale(20),
          fontFamily: fonts.primary[700],
          color: colors.text.primary,
          marginBottom: moderateScale(8),
        }}>
        Connection Lost!
      </Text>
      <Text
        style={{
          fontSize: moderateScale(16),
          fontFamily: fonts.primary[400],
          color: colors.text.secondary,
          textAlign: 'center',
          marginBottom: moderateScale(16),
        }}>
        Your connection maybe lost{'\n'}Please check your internet connection
      </Text>
      <TouchableOpacity
        style={{
          paddingVertical: moderateScale(8),
          paddingHorizontal: moderateScale(32),
          borderRadius: moderateScale(8),
          backgroundColor: colors.button.background,
        }}
        onPress={onCheck}>
        <Text
          style={{
            fontSize: moderateScale(16),
            fontFamily: fonts.primary[700],
            color: colors.text.primary,
          }}>
          Refresh
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoConnectionComp;

const styles = StyleSheet.create({});
