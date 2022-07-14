import { Platform, Dimensions } from 'react-native';

const { OS, select } = Platform;
const {width, height} = Dimensions.get('window');

export const layout = {
  width,
  height,
  select,
  isIOS: OS === 'ios',
  isSmallDevice: width < 375,
  isAndroid: OS === 'android',
};
