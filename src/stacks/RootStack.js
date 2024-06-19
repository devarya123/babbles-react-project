import { colours } from "../colours/colours"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack";


const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colours.backgroundBlue }
          }}
        >
        <Stack.Screen name="LoginStack" component={LoginStack}/>
        <Stack.Screen name="HomeStack" component={HomeStack}/>
        





        </Stack.Navigator>
    );
}


export default RootStack;
