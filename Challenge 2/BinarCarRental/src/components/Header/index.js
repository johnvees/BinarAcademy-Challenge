import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import * as React from 'react';
import {colors, fonts} from '../../utils';
import {Avatar} from '../../assets';

const Header = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
            Hi, {props.name}
          </Text>
          <Text style={styles.location} ellipsizeMode="tail" numberOfLines={1}>
            {props.location}
          </Text>
        </View>
        <Image source={Avatar} style={styles.avatar} />
      </View>
    </View>
  );
};

export default Header;

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.228,
    width: windowWidht,
    backgroundColor: colors.card,
    padding: 16,
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    height: windowHeight * 0.08,
    width: windowHeight * 0.08,
  },
  name: {
    maxWidth: '80%',
    fontSize: 20,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  location: {
    maxWidth: '80%',
    fontSize: 22,
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
  },
});
