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
            <Text style={styles.titleText}>juhubeach</Text>
          </View>
          <Image
            source={require('../assets/juhubeach.webp')}
            style={styles.image}></Image>

          <Paragraph>
           
            Here are 5 interesting facts about juhubeach :
            <br />
            <br />
          1.Juhu is an upmarket neighbourhood of Mumbai.
            <br />

            2.  It is surrounded by the Arabian Sea to the west, Versova to the north, Santacruz and Vile Parle to the east and Khar to the south
            <br />
            3.Juhu is among the most affluent areas of the city and home to many Bollywood celebrities.
            <br />
            4. The nearest railway stations are Santacruz, Andheri and Vile Parle on the Western Line and Harbour Line of the Mumbai Suburban Railway. The nearest metro station is D. N. Nagar
            <br />
            5.There are two minor B.E.S.T bus depots in Juhu.
            <br />
            6.J. R. D. Tata, the father of civil aviation in India, made his maiden voyage to Juhu Airport from Drigh Road airstrip, Karachi, via Ahmedabad, on 15 October 1932 carrying mail in a Puss Moth aircraft.
          </Paragraph>

          <td>
            <a href= "https://www.mumbai.org.uk/marine-drive/juhu-beach.html">
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
