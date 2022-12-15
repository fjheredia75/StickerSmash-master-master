import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Button from './components/Button';
import Button from './components/Button';
import Button from './components/Button2';
import Button from './components/Button3';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage1 = require('./assets/images/imagen1.jpg')
const PlaceholderImage2 = require('./assets/images/imagen2.jpg')
const PlaceholderImage3 = require('./assets/images/imagen3.jpg')

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage1} style={styles.image}/>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Image source={PlaceholderImage2} style={styles.image}/>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Image source={PlaceholderImage3} style={styles.image}/>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Argentina" />
        <Button label="Francia" />
        <Button label="Croacia" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image : {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
});
