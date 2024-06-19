import React from "react";
import { Text, StyleSheet, View, Image, FlatList, Button, TouchableOpacity, Dimensions } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { TopWave } from "../../components/waves";
import { Skip, Proceed } from "../../components/buttons";
import { YellowWelcomeShape } from "../../components/components";
import { scale, verticalScale, moderateScale  } from "../../scaling/scaling";

const ConfessScreen = ({navigation}) => {
  return (

    <>
     <View style={styles.container}>

      
      <View>
        <TopWave/>
        <Skip screen="Login" navigation={navigation}/>
      </View>
      
      <YellowWelcomeShape text=''/>
        
      <Proceed text='Next' screen="Connect" navigation={navigation}/>
    
      <View style = {styles.screenText}>
      <Image source={require('../../../assets/Babble.png')}></Image>
        <Text style={styles.text}>CONFESS!</Text>
      </View>
        
    </View>

    </>

  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(50),
    color: 'white',
    textAlign: 'center'
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


export default ConfessScreen;
