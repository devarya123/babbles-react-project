import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Dimensions } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { colours } from "../colours/colours";
var name = "Name"
const ComponentScreen = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.skip}>Skip</Text>
      {/* <Text>Skip</Text> */}
      <Svg
      //400
        height={200}
        width={Dimensions.get('screen').width}
        viewBox="0 0 1440 320"
        style={styles.topWavy}
      >
        <Path fill={colours.primaryYellow} fill-opacity="1" d="M0,320L60,277.3C120,235,240,149,360,128C480,107,600,149,720,192C840,235,960,277,1080,277.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
      </Svg>
    {/* <Text style={styles.text}>Hi!</Text>
    <Button 
    title="Components"
    onPress={() => props.navigation.navigate('Components')}
    />
    <TouchableOpacity onPress={() => props.navigation.navigate('Lists')}>
        <Text>Go to the List</Text>
    </TouchableOpacity> */}
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
    right: 40,
    top: 53
  },
  box: {
    backgroundColor: colours.primaryYellow,
    height: 80, //170
    alignItems: 'flex-end'
  },
  vertical: {
    marginVertical: 15
  },
  container: {
    fles: 1
  },
  topWavy:{
    position:"relative"
  }
});

export default ComponentScreen;
