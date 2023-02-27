import {
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

export enum Colors {
  DarkBlue = '#163951',
  /** Passive text */
  Grey = '#7E7E7E',
  White = '#FFFFFF',
  Black = '#000000',
  Blue = '#00AAE4',
  Link = '#2a5ada',
  Grays100 = '#F3F5F7',
  MarketRed = '#ff0000',
  DarkTurquoise = '#048EAD',
}

export const Fonts: Record<
  'ExtraBig' | 'Big' | 'Title' | 'Body' | 'Subtitle' | 'Detail' | 'Heading',
  ViewStyle | TextStyle | ImageStyle
> = {
  ExtraBig: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontWeight: '500',
    fontSize: 42,
    lineHeight: 50,
    color: Colors.DarkBlue,
  },
  Big: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 38,
    color: Colors.DarkBlue,
  },
  Heading: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 24,
    color: Colors.DarkBlue,
  },
  Title: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.DarkBlue,
  },
  Body: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontSize: 14,
    lineHeight: 17,
    color: Colors.DarkBlue,
  },
  Subtitle: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
    color: Colors.Grey,
  },
  Detail: {
    fontFamily: Platform.OS === 'android' ? '' : undefined,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: Colors.Grey,
  },
};

const commonStyles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  col50: {
    flexDirection: 'column',
    marginHorizontal: 5,
    width: '50%',
  },
  col100: {
    flexDirection: 'column',
    marginHorizontal: 5,
    width: '100%',
  },
  start: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  responsiveImage: {
    width: '100%',
    height: '100%',
  },
  pH16: {
    marginHorizontal: 16,
  },
  pH5: {
    marginHorizontal: 5,
  },
  selfCenter: {
    alignSelf: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 40 / 2,
    borderColor: Colors.DarkBlue,
    borderWidth: 2,
  },
  isSelected: {
    backgroundColor: Colors.DarkBlue,
  },
  choice: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: Colors.Grays100,
    borderRadius: 10,
  },
  mV1: {
    marginVertical: 10,
  },
  mH1: {
    marginHorizontal: 10,
  },
  error: {
    color: Colors.MarketRed,
  },
});

const mobile = StyleSheet.create({
  h1: {
    ...Fonts.Big,
    padding: 5,
  },
  h2: {
    ...Fonts.Title,
    padding: 5,
  },
  p: {
    ...Fonts.Body,
    padding: 5,
  },
  tCenter: {
    textAlign: 'center',
  },
  w50: {
    width: '100%',
  },
});

const web = StyleSheet.create({
  h1: {
    ...Fonts.ExtraBig,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  h2: {
    ...Fonts.Big,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  p: {
    ...Fonts.Heading,
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  tCenter: {textAlign: 'center'},
  w50: {
    width: '80%',
  },
});

let platformStyle: any;
switch (Platform.OS) {
  case 'ios':
    platformStyle = mobile;
    break;
  case 'android':
    platformStyle = mobile;
    break;
  default:
    platformStyle = web;
    break;
}

const styles = {...commonStyles, ...platformStyle};
export default styles;
