import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  animationContainer: {
    height: (Dimensions.get('window').height / 100) * 20,
    width: (Dimensions.get('window').width / 100) * 20,
  },
});
