import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Link } from 'react-router-dom';

export default class Delhi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
        
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>worlisealink</Text>
          </View>
          <Image
            source={require('../assets/worlisealink.jpg')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about WorliSeaface :
            <br />
            <br />
          1.Worli is a locality in South Mumbai, Maharashtra.

            <br />
          2.It is one of the four peninsulas of Mumbai while the other being Colaba,
 Bandra and Malabar Hill.
            <br />
            3.The sea connects it with Bandra via the Bandra-Worli Sea Link.

            <br />
            4.Historic spellings include Warli, Worlee, Varli, and Varel.
            <br />
        5.Originally Worli was a separate island, 
      one of the Seven Islands of Bombay which were ceded by the
      Portuguese to England in 1661.
           <br />
           6.It was linked up with the other islands in the 19th century.
          </Paragraph>

          <td>
            <a href="https://en.wikipedia.org/wiki/Worli">
              Click Here to get more Information!
            </a>
          </td>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 300,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 20,
  },
});
