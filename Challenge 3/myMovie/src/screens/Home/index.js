import {StyleSheet, Text, StatusBar} from 'react-native';
import React, {Component, useState} from 'react';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ILAvatar} from '../../assets';
import {colors} from '../../utils';
import {LatestMovie, PopularMovie, NoConnection} from '../../components';
import NetInfo from '@react-native-community/netinfo';

class StatusHome extends Component {
  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
    };
  }

  componentDidMount() {
    this.NetInfoSubscribtion = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );
  }

  componenWillUnmount() {
    this.NetInfoSubscribtion && this.NetInfoSubscribtion();
  }

  _handleConnectivityChange = state => {
    this.setState({connection_status: state.isConnected});
  };

  render() {
    return (
      <SafeAreaView>
        {this.state.connection_status ? (
          <Text>Connected To Internet</Text>
        ) : (
          <Text>No Internet Connection</Text>
        )}
      </SafeAreaView>
    );
  }
}

const Home = () => {
  // const [connectStatus, setConnectStatus] = useState(false);
  // checkConnected().then(res => {
  //   setConnectStatus(res);
  // });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.backgroundScreen}
        barStyle="light-content"
      />
      <StatusHome />

      <Header name={'Yohanes Velly'} img={ILAvatar} />
      <LatestMovie />
      <PopularMovie />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
});
