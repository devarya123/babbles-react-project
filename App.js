// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/introduction/Home";
import ExpressScreen from "./src/screens/introduction/Express.js"
import ComponentScreen from './src/screens/Components';
import ListScreen from './src/screens/Lists';
import ConnectScreen from './src/screens/introduction/Connect.js';
import ConfessScreen from './src/screens/introduction/Confess.js';
import LoginScreen from './src/screens/auth/Login.js';
import VerifyScreen from './src/screens/auth/Verify.js';
import LoginStack from './src/stacks/LoginStack';
import { colours } from './src/colours/colours';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import RootStack from './src/stacks/RootStack';


 
  const queryClient = new QueryClient();


const Stack = createStackNavigator();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
       
 
        
    <NavigationContainer>
    <RootStack/>
      {/* <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: colours.backgroundBlue }
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Express" component={ExpressScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen} />
        <Stack.Screen name="Confess" component={ConfessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />        
      </Stack.Navigator> */}
    </NavigationContainer>
    {/* The rest of your application */}
 
 
 </QueryClientProvider>
  );
}

export default App;

