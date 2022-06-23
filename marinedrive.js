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
            <Text style={styles.titleText}>marinedrive</Text>
          </View>
          <Image
            source={require('../assets/marineDrive.jpg')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about marineDrive:
            <br />
            <br />
            1.Marine Drive is a 3 kilometre-long Promenade along the Netaji Subhash Chandra Bose Road in Mumbai, India.

            <br />

           2.The road and promenade were constructed by Pallonji Mistry.
            <br />
            3.It is a 'C'-shaped six-lane concrete road along the coast of a natural
            <br />
           4. At the northern end of Marine Drive is Girgaon Chowpatty.

            <br />
            5.Marine Drive is situated on reclaimed land facing west-south-west.
            <br />
            6. Marine Drive is also known as the Queen's Necklace because,
   when viewed at night from an elevated point anywhere along the drive,
   the street lights resemble a string of pearls in a necklace.

          </Paragraph>

          <td>
            <a href= "https://en.wikipedia.org/wiki/Marine_Drive,_Mumbai">
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
