import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import * as React from 'react';
import {colors} from '../../utils';
import {Avatar} from '../../assets';

const Header = props => {
  return (
    <View style={styles.container}>
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
  );
};

export default Header;

const windowHeight = Dimensions.get('window').height;
const windowWidht = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.275,
    width: windowWidht,
    backgroundColor: colors.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    height: windowHeight * 0.08,
    width: windowHeight * 0.08,
  },
  name: {
    maxWidth: '100%',
    fontSize: 20,
    fontWeight: '300',
    color: colors.text.primary,
  },
  location: {
    maxWidth: '100%',
    fontSize: 22,
    color: colors.text.primary,
    fontWeight: '900',
  },
});
