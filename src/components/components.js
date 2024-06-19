import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Dimensions, TextInput, Image } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { scale, verticalScale, moderateScale  } from "../scaling/scaling"
import { colours } from "../colours/colours";

const YellowWelcomeShape = props => {
    return (
        <View style={styles.bottomleft}>
            <Text textBreakStrategy={"simple"} adjustsFontSizeToFit={true} numberOfLines={2} style={styles.shapeText}>
                {props.text}</Text>
          </View>
        
    )
}

const OtpInput = () => {
    return (
        <TextInput style={styles.otp}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={'number-pad'}/>
    )
}


const HomeBottom = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.screen)} >
            <View style={styles.homeBottom}>
            <Image 
            style={{
                resizeMode: 'contain',
                //flex:1,
                width: 30,
                height: 30,
                alignSelf: 'center'
                }} 
            source={require('../../assets/Babble-blackwhite.png')}/>

            <Text style={
                {
                color: 'white', 
                //color: colours.backgroundBlue, 
                alignSelf: 'center', 
                //textAlign:'center',
                alignContent: 'flex-start'
                }
                }>Home</Text>
          </View>
        </TouchableOpacity>
        
         
    )
}

const HomeBottomSelect = props => {
    return (
        <TouchableOpacity>
            <View style={styles.background}>
            <View style={styles.homeBottomSelect}>
            <Image 
            style={{
                resizeMode: 'contain',
                //flex:1,
                width: 30,
                height: 30,
                alignSelf: 'center'
                }} 
            source={require('../../assets/Babble-blackwhite.png')}/>
            
            <Text style={
                {
                color: colours.backgroundBlue, 
                alignSelf: 'center', 
                //textAlign:'center',
                alignContent: 'flex-start'
                }
                }>Home</Text>
          </View>
            </View>
           
        </TouchableOpacity>
        
         
    )
}

const CenterBottom = props => {
    return (
       <TouchableOpacity onPress={() => props.navigation.navigate(props.screen)}>
        
        <View style={styles.centerBottom}>
            <Text style={{color: 'white', alignSelf: 'center', textAlign:'center', alignContent: 'center'}}>{props.name}</Text>
          </View>
         
       </TouchableOpacity>
        
    )
}
const CenterBottomSelect = props => {
    return (
       <TouchableOpacity onPress={() => props.navigation.navigate(props.screen)}>
        <View style={styles.background}>
        <View style={styles.centerBackground}>
            <Text style={{color: colours.backgroundBlue, alignSelf: 'center', textAlign:'center', alignContent: 'center'}}>{props.name}</Text>
          </View>
          </View>
       </TouchableOpacity>
        
    )
}





const ExploreBottom = props => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate(props.screen)}>
            <View style={styles.exploreBottom}>
            <Text style={{color: 'white', alignSelf: 'center', textAlign:'center', alignContent: 'center'}}>{props.name}</Text>
          </View>
        </TouchableOpacity>
        
          
    )
}


const styles = StyleSheet.create({
    bottomleft: {
        flex: 1,
        width: scale(250),
        height: verticalScale(190),
        // bottom: moderateScale(90),
        // left: moderateScale(15),
        left: -1 * moderateScale(10),
        bottom:-1 * moderateScale(2),
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: colours.secondaryYellow,
        borderTopLeftRadius: moderateScale(50),
        borderTopRightRadius: moderateScale(300),
        borderBottomLeftRadius: moderateScale(60),
        borderBottomRightRadius: moderateScale(30)
      },
      shapeText: {
        fontSize : moderateScale(15),
        fontWeight: '300',
        marginLeft: scale(15),
        marginRight: scale(15)
      },
      otp: {
            color: 'white',
            borderWidth: 1.5,
            borderColor: colours.primaryYellow,
            borderRadius: 8,
            height: verticalScale(40),
            width: scale(30),
            marginTop: verticalScale(20)
            // paddingHorizontal: scale(13)
      },
      homeBottom: {
        backgroundColor: colours.backgroundBlue, 
        //backgroundColor: 'white', 
        borderBottomLeftRadius: moderateScale(30),
        width: Dimensions.get('window').width/5, 
        height: moderateScale(90), 
        justifyContent: 'center',
        flexDirection: 'column',
        borderRightWidth: '0.5',
        borderRightColor: colours.secondaryYellow
      },
      background: {
        //backgroundColor: colours.backgroundBlue,
        width: Dimensions.get('window').width/5, 
        height: moderateScale(90), 
        justifyContent: 'center',
        flexDirection: 'column',
        borderRightWidth: '1',
        borderColor: colours.secondaryYellow
      },
      centerBackground: {
        backgroundColor: 'white',
        borderBottomLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        width: Dimensions.get('window').width/5, 
        height: moderateScale(90), 
        justifyContent: 'center',
        flexDirection: 'column',
        borderRightWidth: '1',
        borderColor: colours.secondaryYellow

      },
      homeBottomSelect: {
        backgroundColor: 'white',
        elevation: 5,
        borderBottomLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        width: (Dimensions.get('window').width/5), 
        height: moderateScale(90), 
        marginLeft: scale(2),
        justifyContent: 'center',
        flexDirection: 'column',
        borderRightWidth: '1',
        borderColor: colours.secondaryYellow
      },
      centerBottom: {
        backgroundColor: colours.backgroundBlue, 
        //borderBottomLeftRadius: moderateScale(30),
        width: (Dimensions.get('window').width/5), 
        height: moderateScale(90), 
        justifyContent: 'center',
        borderRightWidth: '0.5',
        borderRightColor: colours.secondaryYellow
      },
      exploreBottom: {
        backgroundColor: colours.backgroundBlue, 
        borderTopRightRadius: moderateScale(20),
        width: (Dimensions.get('window').width/5), 
        marginRight: scale(1),
        height: moderateScale(90), 
        justifyContent: 'center'
      },
})





export {YellowWelcomeShape, 
    OtpInput, HomeBottom, CenterBottom, ExploreBottom, 
    CenterBottomSelect,
    HomeBottomSelect}