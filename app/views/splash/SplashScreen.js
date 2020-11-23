import React from 'react';
import {View} from 'react-native';
import GeneralStyle from '../../theme/GeneralStyles';
import LottieView from 'lottie-react-native';
import styles from './styles';
import Routes from '../../navigation/Routes';

function SplashScreen({navigation}) {
  return (
    <View style={GeneralStyle.centerAlignView}>
      <LottieView
        style={styles.animationContainer}
        resizeMode="cover"
        source={require('../../assets/anim_splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.replace(Routes.mainScreen)}
      />
    </View>
  );
}
export default SplashScreen;
