import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Car1, ICLuggage, ICPassenger} from '../../assets';

const index = ({title, passenger, luggage, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.carlist}>
          <Image style={styles.carImage} source={Car1} />
          <View>
            <Text style={styles.carType}>{title}</Text>
            <View style={styles.information}>
              <View style={styles.detailInformation}>
                <ICPassenger style={styles.iconInformation} />
                <Text style={styles.textInformation}>{passenger}</Text>
              </View>
              <View style={styles.detailInformation}>
                <ICLuggage style={styles.iconInformation} />
                <Text style={styles.textInformation}>{luggage}</Text>
              </View>
            </View>
            <Text style={styles.price}>Rp {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 3,
  },
  carlist: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  carImage: {
    width: 50,
    height: 50,
    marginEnd: 16,
  },
  carType: {
    marginBottom: 4,
    fontSize: 18,
    color: colors.text.primary,
    fontWeight: '500',
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  detailInformation: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconInformation: {
    marginEnd: 4,
  },
  textInformation: {
    marginEnd: 8,
    fontSize: 12,
    fontWeight: '300',
    color: colors.icon.text,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.tertiary,
  },
});
