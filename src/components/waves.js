import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Dimensions } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { scale, verticalScale, moderateScale  } from "../scaling/scaling"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import { useRef } from "react";
import { colours } from "../colours/colours";
const TopWave = () => {
    return (
        
        <View style={styles.box}>
            <Svg
            height={verticalScale(160)}
            width={Dimensions.get('screen').width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}
          >
        
          <Path fill="#ECD517" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,256C1120,288,1280,256,1360,240L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
          </Svg>
        </View>
        
    )
}










const AlignText = props => {
  return (
    <View style={{
      flex: 1,
    }}>
      <Text style={{
        fontWeight: '700',
    fontSize: moderateScale(16),
    zIndex:1, 
    marginVertical: 20
    }}>{props.title}</Text>
    
      <Text style={{
        fontSize: moderateScale(15),
        zIndex: 1,
        }} textBreakStrategy={"simple"} adjustsFontSizeToFit={true} numberOfLines={2}>
          {props.content}</Text>
      
    </View>

  )
}

const LoginWave = props => {
  return (
    
      <View style={styles.loginBox}>
        <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        }}>
          <TouchableOpacity onPress={() => props.navigation.pop()}>
          <AntDesign style={{
            zIndex: 1,
            top: verticalScale(5),
            marginVertical: verticalScale(30),
            marginHorizontal: scale(15),
            
            }} name="left" color={"black"} size={21} 
            />
          </TouchableOpacity>
      
        <Text style={styles.title}>{props.title}</Text>

        </View>

        <Text textBreakStrategy={"simple"} adjustsFontSizeToFit={true} numberOfLines={2} style={styles.content}>{props.content}</Text>


        
        {/* </View> */}
        

          <Svg
          height={verticalScale(250)}
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 320"
          style={styles.topWavy}
        >
      
        {/* <Path fill="#ECD517" fill-opacity="1" d="M0,256L80,256C160,256,320,256,480,224C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" /> */}
        {/* <Path fill="#ECD517" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" /> */}
        <Path fill="#ECD517" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,112C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        {/* <Path fill="#ECD517" fill-opacity="1"  d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" /> */}
        
        </Svg>
        
      </View>
      
  )
}


// const [boxHeight, setBoxHeight] = useState(80);
// const [svgHeight, setSVGHeight] = useState(200);
const MainWave = () => {
  const [boxHeight, setBoxHeight] = useState(80);
  const [svgHeight, setSVGHeight] = useState(200);
  return (
      <View style={{height: verticalScale(svgHeight - boxHeight)}}>
      <View style={styles.mainBox(boxHeight)}>
        <TouchableOpacity>
        <Feather style={{
            zIndex: 1,
            top: verticalScale(5),
            marginVertical: verticalScale(30),
            marginHorizontal: scale(15),            
            }} name="menu" color={"black"} size={25} 
            />
          

        </TouchableOpacity>
        <Text style={styles.mainTitle}>Good Afternoon</Text>
        </View>
        <Svg
          height={verticalScale(svgHeight)}
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 320"
          style={styles.topWavy}
        >

        <Path fill="#ffbf00" fill-opacity="1" 
        // d="M0,128L60,154.7C120,181,240,235,360,224C480,213,600,139,720,117.3C840,96,960,128,1080,165.3C1200,203,1320,245,1380,266.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                              // d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,101.3C840,85,960,107,1080,138.7C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                              d="M0,160L60,186.7C120,213,240,267,360,282.7C480,299,600,277,720,234.7C840,192,960,125,1080,138C1200,135,1255,193,1360,254L1440,306L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                              // d="M0,150L60,195C120,233,200,267,360,282.7C480,299,600,277,720,234.7C840,192,960,128,1080,128C1200,128,1320,192,1380,224L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
 
                                              />
        </Svg>
        
       
        
      </View>
      

      




     
      
  )
}




const styles = StyleSheet.create({
    box: {
        backgroundColor: colours.primaryYellow,
        height: verticalScale(50),
        top: 0,
        alignItems: 'flex-start',
      },
      mainBox: box => ({
        height: box,
        backgroundColor: colours.primaryGold,
        top: 0,
        alignItems: 'flex-start'
    }),
    // mainBox: {
    //   backgroundColor: colours.primaryGold,
    //   height: verticalScale(styles.mainBoxSize(80)),
    //   top: 0,
    //   alignItems: 'flex-start'
    // },
      topWavy:{
        position:"absolute",
        alignSelf: 'flex-start'
      },
      skip : {
        right: scale(35),
        top: verticalScale(45),
        position:'absolute',
        zIndex:1
      },
      skipText:{
        fontSize: moderateScale(16)
      },
      bigBox: {
        height: verticalScale(100),
        top: 0,
      },
      loginBox: {
        backgroundColor: colours.primaryYellow,
        height: verticalScale(90),
        top: 0,
      },
      title: {
        top: verticalScale(5),
        marginVertical: verticalScale(-90),
        marginHorizontal: scale(15),
        fontWeight: '700',
        fontSize: moderateScale(16),
        zIndex:1
      },
      mainTitle: {
        // top: verticalScale(5),
        marginVertical: verticalScale(-45),
        marginHorizontal: scale(55),
        fontWeight: '400',
        fontSize: moderateScale(15),
        zIndex:1
      },
      content: {
        marginVertical: verticalScale(-16),
        marginHorizontal: scale(20),
        fontSize: moderateScale(15),
        zIndex: 1
      },
      arrow: {
        zIndex: 1,
        // left: 26,
        top: verticalScale(5),
        marginVertical: verticalScale(30),
        marginHorizontal: scale(15),
        // marginVertical: verticalScale(15),
      }
})


export {TopWave, LoginWave, MainWave}