// const queryClient = new QueryClient();

import HomeScreen from "../screens/introduction/Home";
import HomePage from "../screens/bottomMenu/HomePage";
import Groups from "../screens/bottomMenu/Groups";
import DM from "../screens/bottomMenu/DM";
import Bottles from "../screens/bottomMenu/Bottles";
import Explore from "../screens/bottomMenu/Explore";
import ExpressScreen from "../screens/introduction/Express"
import ComponentScreen from '../screens/Components';
import ListScreen from '../screens/Lists';
import ConnectScreen from '../screens/introduction/Connect.js';
import ConfessScreen from '../screens/introduction/Confess.js';
import LoginScreen from '../screens/auth/Login.js';
import VerifyScreen from '../screens/auth/Verify.js';
import { colours } from "../colours/colours"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function LoginStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            // cardStyle: { backgroundColor: colours.backgroundBlue }
            cardStyle: { backgroundColor: 'white' }
          }}
        >
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="Groups" component={Groups}/>
        <Stack.Screen name="Bottles" component={Bottles}/>
        <Stack.Screen name="DM" component={DM}/>
        <Stack.Screen name="Explore" component={Explore}/>




        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Express" component={ExpressScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen} />
        <Stack.Screen name="Confess" component={ConfessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} /> 
        
        </Stack.Navigator>

    );
}

export default LoginStack;