import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import LandingImage from './../assets/icons/landing.jpg';

class Landing extends React.Component{
  render() {
    return(
      <View>
        <Image source={LandingImage}>
        </Image>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>Welcome to PokeSearch!
          </Text>
          <Button block={true} style={styles.buttonStyle} onPress={()=>this.props.switchScreen("search")}>
            <Text style={styles.buttonText}>Start Adventure</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -350,
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: 'white',
  }
}

export default Landing;
