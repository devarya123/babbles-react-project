import { colours } from "../colours/colours"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/bottomMenu/HomePage";
import Groups from "../screens/bottomMenu/Groups";
import DM from "../screens/bottomMenu/DM";
import Bottles from "../screens/bottomMenu/Bottles";
import Explore from "../screens/bottomMenu/Explore";
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'white' }
          }}
        >

        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="Groups" component={Groups}/>
        <Stack.Screen name="Bottles" component={Bottles}/>
        <Stack.Screen name="DM" component={DM}/>
        <Stack.Screen name="Explore" component={Explore}/>





        </Stack.Navigator>
    );
}


export default HomeStack;
