import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Car1, ICLuggage, ICPassenger} from '../../assets';
import CarData from './Data';

const index = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={CarData}
      keyExtractor={item => item.carId}
      renderItem={({item}) => (
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.carlist}>
              <Image style={styles.carImage} source={Car1} />
              <View>
                <Text style={styles.carType}>{item.title}</Text>
                <View style={styles.information}>
                  <View style={styles.detailInformation}>
                    <ICPassenger style={styles.iconInformation} />
                    <Text style={styles.textInformation}>{item.passenger}</Text>
                  </View>
                  <View style={styles.detailInformation}>
                    <ICLuggage style={styles.iconInformation} />
                    <Text style={styles.textInformation}>{item.luggage}</Text>
                  </View>
                </View>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
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
    fontFamily: fonts.primary.normal,
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
    fontFamily: fonts.primary[300],
    color: colors.icon.text,
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.tertiary,
  },
});
