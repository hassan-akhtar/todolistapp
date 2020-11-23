import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  defaultFlex: {
    flex: 1,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  centerAlignView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
