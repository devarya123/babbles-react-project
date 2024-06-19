import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, Button, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { LoginWave, TopWave, MainWave } from "../../components/waves";
import { HomeBottomSelect, CenterBottom, ExploreBottom, HomeBottom, CenterBottomSelect } from "../../components/components";
import { scale, verticalScale, moderateScale } from "../../scaling/scaling";
import { colours } from "../../colours/colours";


const Groups = ({navigation}) => {
    return (
        <>
     <View style={styles.container}>

      
      <Text style={{color: 'black', marginHorizontal: scale(20),
    marginVertical: verticalScale(20)}}>GROUPS</Text>
      {/* <View> */}
        
      <MainWave/>

      <View style = {styles.screenText}>
        <Text style={styles.discover}>Discover</Text>
        <Text style={styles.view}>View all</Text>
      </View>      
      <ScrollView style={{}}>
        <Text style={{color: 'black', justifyContent: 'center', alignSelf:'center'}}>
          Hello
        </Text>
      </ScrollView>

      <View style={{flex: 1, justifyContent: 'flex-end', shadowOpacity: 5}}>
        <View style={{flexDirection: 'row', position: 'absolute'}}>
          <HomeBottom screen="HomePage" navigation={navigation}/>
          <CenterBottomSelect name="Groups" screen="Groups" navigation={navigation}/>
          <CenterBottom name="Bottles" screen="Bottles" navigation={navigation}/>
          <CenterBottom name="DM" screen="DM" navigation={navigation}/>
          <ExploreBottom name="Explore" screen="Explore" navigation={navigation}/>
        </View>
      
      </View>



      </View>
      </>

    );
}
const styles = StyleSheet.create({
    discover: {
      fontSize: moderateScale(20),
      fontWeight: '500',
      color: 'black',
      marginHorizontal: scale(20),
      marginVertical: verticalScale(20)
      // textAlign: 'left'
    },
    view: {
      color: 'black',
      fontWeight: '100',
      fontSize: moderateScale(15),
      marginVertical: verticalScale(20),
      marginHorizontal: scale(20)
      // justifyContent: 'space-between',
      // alignSelf:'flex-end',
      // marginEnd: 'auto'
    },
    container: {
      flex: 1,
      flexDirection: 'column'
      
    },
    screenText: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
      // alignItems: 'flex-end',
      // justifyContent: 'flex-start'
      // backgroundColor: "white"
      // backgroundColor: "#20056c"
    },
  });
export default Groups