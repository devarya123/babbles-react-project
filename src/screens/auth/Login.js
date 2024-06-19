import React, { useRef, useState } from "react";
import { Text, StyleSheet, View, ScrollView, TouchableWithoutFeedback, TextInput, Image, Keyboard, Button, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import { TopWave, LoginWave } from "../../components/waves";
import { scale, verticalScale, moderateScale  } from "../../scaling/scaling";
import PhoneInput from 'react-native-phone-input'
import { colours } from "../../colours/colours";
import { defaults } from "../../default/default";
import axios from 'axios';
import {base_url} from "../../api/apis";
import { showAlertBox } from "../../alert/alertBox"; 
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'

// "mobileNumber
// deviceTocken
// latitude
// longitude
// locationName
// countryName
// countryCode 
// platform"




const LoginScreen = ({navigation}) => {
    const phoneRef = useRef();
    const [value, setValue] = useState();
    const [countryCode, setCountryCode] = useState(defaults.countryCode);
    const [country, setCountry] = useState(defaults.country);
    const [valid, setValid] = useState(false);
    
    const generateOtp = async() => {
      console.log('generate')
      // console.log(value)
      // const number = parsePhoneNumber(value);
      // console.log(parsePhoneNumber(value).country);
      const url = `${base_url}/requestOTP`;
      // console.log(url)    

      try {
        const {data} = await axios.post(`${base_url}/requestOTP`,
      {
        mobileNumber : value,
        deviceTocken: '',
        latitude: '',
        longitude: '',
        locationName : '',
        countryName: country,
        countryCode: countryCode,
        // countryName : parsePhoneNumber(value).country,
        // countryCode : getCountryCallingCode(number.country),
        platform : ''

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



    // const queryClient = new useQueryClient();
    // const {data, isLoading, error} = useQuery({queryKey: ['otp'], queryFn: generateOtp, enabled: false})
    // if (isLoading) {
    //   return <ActivityIndicator style={{alignSelf: 'center', top: verticalScale(200)}}/>
    // }
    // if (error) {
    //   return <Text>{error.message}</Text>
    // }
    const {mutate, isPending} = useMutation({
      mutationFn: () => generateOtp(),
      onSuccess: mutationData => {
        if (mutationData) {
          navigation.navigate("Verify", {
            mobileNumber: value,
            otp: mutationData.success,
            country: country,
            countryCode: countryCode
          });
        }
        console.log("mutation Data : ", mutationData)
        // Invalidate and refetch
        // queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
      onError: error => console.log("error mutate : ", error)
    })
    if (isPending) {
      <ActivityIndicator size="large" color="white"/>
  }

  

  return (

    <>
     <View style={styles.container}>

      
      <View>
        <LoginWave title="Activate your Account" content="Your anonymity is important to us! Babbles will never share your number!"
        navigation={navigation}/>
      </View>

      
      {/* <YellowWelcomeShape text=''/> */}
        
      {/* <Proceed text='Next' screen="Confess" navigation={navigation}/> */}
      
      <View style = {styles.screenText}>
      <Image source={require('../../../assets/Babble.png')}></Image>
        <Text style={styles.text}>Get activation code</Text>
       

        
        {/* <Text>Phone Number</Text> */}

        {/* <PhoneInput
        // ref={phoneRef}
      containerStyle={styles.phone}
      layout="first"
    //   onChange={value => updateFormData('phoneNumber', value)}
    //   defaultValue={defaultValue}
      placeholder="Enter Phone Number"
      defaultCode="GB"
      keyboardType="phone-pad"
      textInputStyle={styles.phoneText}
    /> */}


        <PhoneInput initialCountry={defaults.country} style={styles.phone} 
        textStyle={styles.phoneText}
        ref={(ref) => this.phone = ref}
        value={value}
        onSelectCountry={(country) => {
          // console.log(country);
          setCountry(country);
          setCountryCode(this.phone.getCountryCode());
        }}
        onChangePhoneNumber={ (value) => {
          setValue(value);
          // console.log("value")
          // console.log(value);
          // console.log(text);
          setValid(this.phone.isValidNumber());
          // console.log(this.phone.getPickerData());
          
        }
          
        }
        offset={15}
        cancelText="Cancel"
        confirmText="Confirm"
        textProps={placeholder= "Enter Number"}
        getValue={()=>{}}
        //  console.log(val)
        
        />

        <TouchableOpacity style={styles.next}
        disabled={isPending}
        onPress={() => {
          console.log("verify");
          // console.log(value);
          // console.log(country);
          // console.log(countryCode);
          // console.log(valid);
          // console.log(isPending);
          // console.log(value);
          if (valid == true) {
            console.log("generate");
            mutate();
            // generateOtp();
            // navigation.navigate("Verify", {
            //   mobileNumber: value
            // });
          }
          else {
            showAlertBox("Please enter a valid phone number");
          }
          
          
          
        }
        }
        >
        <Text style={{color: 'black', fontSize: scale(15)}}>NEXT</Text>
        </TouchableOpacity>

        {/* FEFF70 */}

{/* <ScrollView
  keyboardDismissMode='on-drag'
>
  <TextInput style={styles.phone2}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={'number-pad'}/>
</ScrollView> */}




      </View>
        
    </View>

    </>

  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(15),
    color: '#ECD517',
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
    borderColor: colours.primaryYellow,
    borderBottomWidth: 0.5,
    paddingBottom:13,
    width: scale(250),
    marginTop: verticalScale(20),
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
  }
});


export default LoginScreen;
