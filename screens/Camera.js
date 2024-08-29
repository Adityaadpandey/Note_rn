import React from 'react';
import { Button, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const CameraScreen = () => {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        console.log('Image URI: ', source);
      }
    });
  };

  return (
    <View>
      <Button title="Open Camera" onPress={openCamera} />
    </View>
  );
};

export default CameraScreen;
