import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

const ExploreScreen = () => {
  // for data to  send api
  const [image, setImage] = useState('');
  // for picture address
  const [url, setUrl] = useState('');
  const cameraRef = React.useRef(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    console.log(pageNum);
  }, [setPageNum]);
  const takePhoto = async () => {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync({
        quality: 1,
        exif: true,
      });
      console.log('data', data.uri);

      if (data) {
        setUrl(await CameraRoll.save(data.uri));
        console.log('result', url);
      }
    }
  };

  const getPhotos = async () => {
    console.log('...');
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 1,
        assetType: 'Photos',
      });
      await setImage(edges[0].node.image.uri);
    } catch (error) {
      console.log('getPhoto', error);
    }
    setPageNum(() => 2);
  };
  if (pageNum === 1) {
    /*메인 페이지 */
    return (
      <>
        <View style={{flex: 1, zIndex: -1, display: 'flex'}}>
          <TouchableOpacity onPress={() => setPageNum(3)}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={require('../assets/explore(ver3).png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </>
    );
  } else if (pageNum === 2) {
    return (
      <>
        <View style={{flex: 1, zIndex: -1, display: 'flex'}}>
          <Text>결과 페이지</Text>
          <TouchableOpacity onPress={() => setPageNum(1)}>
            <Text>메인으로 이동</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  } else {
    /* 카메라 페이지 */

    return (
      <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <RNCamera
            ref={cameraRef}
            style={{marginTop: '10%', width: '80%', height: '75%'}}
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
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={async () => {
                await takePhoto();
                await getPhotos();
                // post api
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
  }
};

export default ExploreScreen;
