import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

const ExploreScreen = () => {
  const cameraRef = React.useRef(null);

  const takePhoto = async () => {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('data', data.uri);

      /*if (data) {
        const result = await CameraRoll.save(data.uri);
        console.log('result', result);
      }*/
    }
  };

  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <TouchableOpacity>
          <Text>+</Text>
        </TouchableOpacity>
        <RNCamera
          ref={cameraRef}
          style={{width: '80%', height: '75%'}}
          captureAudio={false}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              takePhoto();
              console.log('hello');
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              border: 'gray',
              borderWidth: 1,
              backgroundColor: 'pink',
            }}
          />
        </View>
      </View>
    </>
  );
};

export default ExploreScreen;
