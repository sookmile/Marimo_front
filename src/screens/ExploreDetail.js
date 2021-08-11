import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const ExploreDetail = ({navigation, route}) => {
  return (
    <>
      <View style={{flex: 1, zIndex: -1, display: 'flex'}}>
        <Text>결과 페이지</Text>
        <Text>{route.params.image}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text>메인으로 이동</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ExploreDetail;
