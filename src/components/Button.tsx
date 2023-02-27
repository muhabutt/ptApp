import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../theme/styles';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <View style={_styles.btnWrapper}>
      <TouchableOpacity onPress={onPress} style={_styles.button}>
        <Text style={[{...Fonts.Title}, _styles.title]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const _styles = StyleSheet.create({
  btnWrapper: {marginHorizontal: 10, width: '50%', alignSelf: 'center'},
  button: {
    alignSelf: 'center',
    width:
      Platform.OS === 'web' ? Dimensions.get('screen').width * 0.2 : '100%',
    backgroundColor: Colors.DarkBlue,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  title: {
    color: Colors.White,
    textAlign: 'center',
  },
});
export default Button;
