import React from 'react';
import {Image, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Back from '../../assets/images/arrow_back.png';
import Back3X from '../../assets/images/arrow_back_3x.png';
import {Colors} from '../theme/styles';

type Props = {
  onPress: () => void;
};

const HeaderBackButton: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
      <Image
        source={Platform.OS === 'web' ? Back3X : Back}
        style={Platform.OS === 'web' ? styles.icon3X : styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon3X: {
    width: 40,
    height: 40,
    borderRadius: 80 / 2,
  },
  icon: {
    marginRight: 10,
  },
  btn: {
    marginHorizontal: 10,
  },
});

export default HeaderBackButton;
