import {TouchableOpacity} from 'react-native';
import React from 'react';

import {ICTruck, ICBox, ICKey, ICCamera} from '../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'sewa-mobil') {
      return <ICTruck />;
    }
    if (icon === 'oleh-oleh') {
      return <ICBox />;
    }
    if (icon === 'penginapan') {
      return <ICKey />;
    }
    if (icon === 'wisata') {
      return <ICCamera />;
    }
    return <ICTruck />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
