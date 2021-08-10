import * as React from 'react';
import {View, Text, Stylesheet, ImageBackground} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, zIndex: -1, display: 'flex'}}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
        }}
        source={require('../assets/main(ver3).png')}
        resizeMode="cover"
      />
    </View>
  );
};

export default HomeScreen;
