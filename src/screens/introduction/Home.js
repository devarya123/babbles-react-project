import React from "react";
import { Text, StyleSheet, View, FlatList, Image, Button, TouchableOpacity, Dimensions } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { TopWave } from "../../components/waves";
import { Skip, Proceed } from "../../components/buttons";
import { YellowWelcomeShape } from "../../components/components";
import { scale, verticalScale, moderateScale  } from "../../scaling/scaling";

const HomeScreen = props => {
  return (

    <>
     <View style={styles.container}>

      
      <View>
        <TopWave/>
        <Skip screen="Login" navigation={props.navigation}/>
      </View>
      
      <YellowWelcomeShape text='Explore the anonymous social network app.'/>
        
      <Proceed text='Start' screen="Express" navigation={props.navigation}/>
    
      <View style = {styles.screenText}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Image source={require('../../../assets/Babble.png')}></Image>
        <Text style={styles.text}>Babbles!</Text>
      </View>
        
    </View>

    </>

  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(45),
    color: 'white',
    textAlign: 'center'
  },
  welcome: {
    color: 'white',
    fontSize: moderateScale(20),
    textAlign:'center'
  },
  container: {
    flex: 1,
    
  },
  screenText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: "white"
    // backgroundColor: "#20056c"
  },
});


export default HomeScreen;
