import React, { isValidElement, useRef } from "react";
import { Text, StyleSheet, View, ScrollView, TouchableWithoutFeedback, TextInput, Image, Button, TouchableOpacity, Dimensions, Keyboard, ActivityIndicator } from "react-native";
import Svg, {Path} from 'react-native-svg';
import { TopWave, LoginWave } from "../../components/waves";
// import { OtpInput } from "../../components/components";
import { scale, verticalScale, moderateScale  } from "../../scaling/scaling";
import PhoneInput from 'react-native-phone-input'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colours } from "../../colours/colours";
import { OtpInput } from "react-native-otp-entry";
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {base_url} from "../../api/apis";
import axios from 'axios';
import { showAlertBox } from "../../alert/alertBox"; 




// import PhoneInput from "react-native-phone-number-input";
// import SegmentedControl from '@react-native-segmented-control/segmented-control';
// import SegmentedControl from 'rn-segmented-control';
// import OtpInputs from 'react-native-otp-inputs';











const VerifyScreen = ({route, navigation}) => {
    const phoneRef = useRef<PhoneInput>(null);
    var mobileNumber = route.params.mobileNumber;
    var otp = route.params.otp;
    var country = route.params.country;
    var countryCode = route.params.countryCode;
    // var {mobileNumber, otp} = route.params;  

    // const handleValidate = () => {

    //     mutation.mutate();

        



    // }
    
    const validateOtp = async() => {
        console.log('validate')
        // console.log(value)
        // const number = parsePhoneNumber(value);
        // console.log(parsePhoneNumber(value).country);
        const url = `${base_url}/validateOTP`;
        // console.log(url)    
        console.log("mobileNumber : ", mobileNumber);
        console.log("otp : ", otp);
    // isLoading activity indicator and disable button

    
        try {
          const {data} = await axios.post(`${base_url}/validateOTP`,
        {
          mobileNumber : mobileNumber,
          otp: otp,    
        })
        console.log("data : ", data);
        return data;
        }
        catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log("request")
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            console.log("message");
            console.log(error.message);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config)
        }
        
      }


      const ResendOtp = async() => {
        console.log('resend')
        // console.log(value)
        // const number = parsePhoneNumber(value);
        // console.log(parsePhoneNumber(value).country);
        const url = `${base_url}/resendOTP`;
        // console.log(url)    
        console.log("mobileNumber : ", mobileNumber);
        // console.log("otp : ", otp);
    // isLoading activity indicator and disable button
        try {
          const {data} = await axios.post(`${base_url}/resendOTP`,
        {
          mobileNumber : mobileNumber,
          otp: otp,
          countryName: country,
          countryCode: countryCode    
        })
        console.log("data : ", data);
        return data;
        }
        catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log("request")
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            console.log("message");
            console.log(error.message);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config)
        }
        
      }



      const 
      {mutate: validate,
        isPending: isValidating
      }
        = useMutation({
        mutationFn: () => validateOtp(),
        onSuccess: mutationData => {
          if (mutationData) {
            console.log("mutation Data : ", mutationData);
            navigation.reset({index: 1, routes:[{name: "HomeStack"}]})
            // navigation.navigate("Confess");
          }
          
          //console.log("mutation Data 2 : ", mutationData);
          // Invalidate and refetch
          // queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onError: error => console.log("error mutate : ", error)
      });
      if (isValidating) {
        <ActivityIndicator size="large" color="white"/>
    }


    const 
      {mutate: resend,
        isPending: isReSend
      }
        = useMutation({
        mutationFn: () => ResendOtp(),
        onSuccess: mutationData => {
          if (mutationData) {
            console.log("mutation Data : ", mutationData);
            showAlertBox("OTP resent.");
            //navigation.navigate("Confess");
          }
          console.log("mutation Data 2 : ", mutationData);
          // Invalidate and refetch
          // queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onError: error => console.log("error mutate : ", error)
      });
      if (isReSend) {
        <ActivityIndicator size="large" color="white"/>
    }

    








  return (

    <>
     <View style={styles.container}>

      
      <View>
       
        <LoginWave title="Verify your phone number" content="Your anonymity is important to us! Babbles will never share your number!"
        navigation={navigation}/>
        
      </View>

      
      {/* <YellowWelcomeShape text=''/> */}
        
      {/* <Proceed text='Next' screen="Confess" navigation={navigation}/> */}
      
      <View style = {styles.screenText}>
        
      <Image source={require('../../../assets/Babble.png')}></Image>
        <Text style={styles.text}>We have sent you a verification code. Please enter otp.</Text>



<ScrollView contentContainerStyle={{
    alignItems: 'center'
}} 
keyboardDismissMode='on-drag'>
<OtpInput
  numberOfDigits={6}
  focusColor={colours.primaryYellow}
  onTextChange={(text) => console.log(text)}
  onFilled={(text) => {Keyboard.dismiss; otp=text; console.log("otp : ", otp)}}
  textInputProps={{
    accessibilityLabel: "One-Time Password"
  }}
  theme={{
    containerStyle: styles.containerStyle,
    pinCodeTextStyle: styles.pinCodeText
  }}
/>
<Text style={{
    color: colours.primaryYellow,
    marginTop: verticalScale(30),
    alignSelf: 'center'
    }}>By clicking submit you agree
to the terms and conditions of Babbles : {mobileNumber}</Text>



<TouchableOpacity 
        style={styles.next}
        disabled={isValidating}
        onPress={() => {
            // console.log("pressed");
            validate();
        }}
        >
            <Text style={{color: 'black', fontSize: scale(15)}}>VERIFY</Text>
        </TouchableOpacity>

<TouchableOpacity>
    <Text style={{color:'gold', marginTop: verticalScale(50)}}
    disabled={isReSend}
    onPress={() => {
        // console.log("pressed");
        resend();
    }}
    >Resend Code</Text>
</TouchableOpacity>
    


</ScrollView>

{/* <View style={{
    // flex: 1, 
// flexDirection: 'row', gap: scale(25)
}}
  keyboardDismissMode='on-drag'
> */}
  {/* <TextInput style={styles.phone2}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={'number-pad'}/> */}

    {/* <OtpInput/>
    <OtpInput/>
    <OtpInput/>
    <OtpInput/> */}




{/* </View> */}








        

        {/* FEFF70 */}






      </View>
        
    </View>

    </>

  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(15),
    color: colours.primaryYellow,
    textAlign: 'center',
    marginTop: verticalScale(5)
  },
  container: {
    flex: 1,
    
  },
  phone: {
    borderColor: colours.primaryYellow,
    // backgroundColor: '#20056c',
    borderBottomWidth: 0.7,
    paddingBottom:12,
    marginTop: verticalScale(50),
    width: scale(275)
    // height: '100%',
    // width: 1,
    // borderWidth:1,
    // margin: 15,
    // width: 100
  },
  phone2: {
    // borderColor: colours.primaryYellow,
    // borderBottomWidth: 0.5,
    // height: scale(15),
    // width: scale(15),
    // paddingBottom:13,
    // width: scale(25),
    // marginTop: verticalScale(20),

        borderWidth: 1.5,
        borderColor: colours.primaryYellow,
        borderRadius: 8,
        height: verticalScale(40),
        width: scale(30),
        marginTop: verticalScale(20)
        // paddingHorizontal: scale(13)
  },
  phoneText: {
    color: colours.primaryYellow

  },
  screenText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: verticalScale(40)
    // backgroundColor: "white"
    // backgroundColor: "#20056c"
  },
  next: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colours.secondaryYellow,
    justifyContent: 'center',
    marginTop: verticalScale(40),
    width: scale(200),
    height: verticalScale(40)
  },
  pinCodeText: {
    color: 'white',
    fontSize: scale(25)
  },
  containerStyle: {
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(15)
  },
});


export default VerifyScreen;
