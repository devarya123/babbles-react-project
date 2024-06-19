import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Dimensions } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { colours } from "../colours/colours";
// import WavyBackground from "react-native-wavy-background";
const ListScreen = () => {
    return (
      <View style={styles.box}>
      {/* <View style={{
      top: 0,
      left: 0,
      right: 0,
}}> */}
      <Text style={styles.skip}>Skip</Text>

      {/* <WavyBackground
          height={100}
          width={Dimensions.get('screen').width}
          amplitude={10}
          frequency={3}
          offset={50}
          color="#ECD517"
        /> */}

      <Svg
        height={200}
        width={Dimensions.get('screen').width}
        viewBox="0 0 1440 320"
        style={styles.topWavy}
      >
        <Path fill={colours.primaryYellow} fill-opacity="1.6" d="M0,64L80,101.3C160,139,320,213,480,208C640,203,800,117,960,106.7C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
      </Svg>
      </View>
    );
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 45,
    },
    subHeader: {
      fontSize: 20
    },
    skip : {
      right: 50,
      top: 30
    },
    box: {
      backgroundColor: colours.primaryYellow,
      height: 80,
      alignItems: 'flex-end'
    },
    vertical: {
      marginVertical: 15
    },
    container: {
      fles: 1
    },
    topWavy:{
      position:"absolute"
    }
  });
  


export default ListScreen;
