import { StyleSheet,Image} from 'react-native';

export default function ImageViewer({placeholderImageSource,  selectedImage }) {
  const ImageSource = selectedImage !== null
  ? { uri: selectedImage }
  : placeholderImageSource;

  return (
  <Image source= {ImageSource} style={styles.image} />
  );

}

const styles = StyleSheet.create ({
  image: {
   widht: 320,
   height: 440,
   borderRadius: 18,

  }

});