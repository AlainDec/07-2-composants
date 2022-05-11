import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default function App() {
  
  const win = Dimensions.get('window');
  const imageWidth = 1920;
  const imageHeight = 1536;
  const ratio = win.width * 0.75 / imageWidth;
  const heightImg = imageHeight * ratio;

  return (
    <View style={styles.container}>
        <Image source={require('./assets/rover.jpg')} style={[styles.img, {height: heightImg}]} />
        <Text style={styles.txt}>Le rover Opportunity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    flex: 3,
  },
  txt: {
    flex: 1,
  }
});
