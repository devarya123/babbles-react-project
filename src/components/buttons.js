import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Dimensions } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { scale, verticalScale, moderateScale  } from "../scaling/scaling"
import { colours } from "../colours/colours";

const Skip = props => {
    return (
        <View style={styles.skip}>
          <TouchableOpacity onPress={() => props.navigation.navigate(props.screen)} 
          hitSlop={{ top: 1000, bottom: 1000, left: 1000, right: 1000 }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          </View>
        
    )
}
// props.navigation.navigate(props.screen)
const Proceed = ({text, screen, navigation}) => {
  return (
    <TouchableOpacity style={styles.nextButton} 
          onPress={() => navigation.navigate(screen)
          } 
        >
            <Text style={styles.nextText}>{text}</Text>
          </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
      skip : {
        right: scale(35),
        top: verticalScale(45),
        position:'absolute',
        zIndex:1
      },
      skipText:{
        fontSize: moderateScale(16)
      },
      nextButton: {
        zIndex:1,
        right:-1 * moderateScale(10),
        bottom:-1 * moderateScale(2),
        position: 'absolute',
        alignContent: 'center',
        width: scale(170),
        height: verticalScale(110),
        justifyContent: 'center',
        backgroundColor: colours.primaryYellow,
        borderTopLeftRadius: moderateScale(300),
        borderTopRightRadius: moderateScale(90),
        borderBottomLeftRadius: moderateScale(60),
        borderBottomRightRadius: moderateScale(30)
      },
      nextText: {
        fontSize : moderateScale(20),
        alignSelf: 'center',
        fontWeight: '300'
      },
})


export {Skip, Proceed}