import * as React from 'react';
import { View, Text , AsyncStorage} from 'react-native';
// import AppLoading from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from '@use-expo/font';

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/Signup'
import Welcome from '../screens/AuthScreens/Welcome'
import StackNavigator from './StackNavigator'
import ProfilePicture from '../screens/AuthScreens/ProfilePicture'
import Onboard from '../screens/AuthScreens/OnboardScreen';




const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({

        'logo-font': require('../assets/fonts/Roboto-LightItalic.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>;
    } else {
        // const [isFirstLaunch, setIsFirstlaunch] = React.useState(null);
        // useEffect(()=>
        // {
        //     AsyncStorage.getItem('alreadyLaunched').then(value =>{
        //         if(value===null)
        //         {
        //             AsyncStorage.setItem('alreadyLaunched','true');
        //             setIsFirstlaunch(true);
        //         }
        //         else {
        //             setIsFirstlaunch(false);
        //         }
        //     })
        // },[]);
        // if(isFirstLaunch===null){
        //     return null;

        // }
        // else if(isFirstLaunch===true)
        // {
            return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Onboard' component={Onboard} options={{headerShown: false,}}/>
                    <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false,}}/>
                    <Stack.Screen name='Login' component={Login} options={{headerShown: false, title:'Login'}}/>
                    <Stack.Screen name='Signup' component={Signup}options={{headerStyle: {backgroundColor:'#f5f5dc' } }} />
                    <Stack.Screen name='ProfilePicture' component={ProfilePicture} options={{headerStyle: { backgroundColor:'#f5f5dc' } }} />
                    <Stack.Screen name='StackNavigator' component={StackNavigator}  options={{headerShown: false,}} />
                </Stack.Navigator>
            </NavigationContainer>
            )
        // }
        // else
        // {
        //    return (
        //     <NavigationContainer>
        //         <Stack.Navigator>
        //             <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false,}}/>
        //             <Stack.Screen name='Login' component={Login} options={{headerShown: false, title:'Login'}}/>
        //             <Stack.Screen name='Signup' component={Signup}options={{headerStyle: {backgroundColor:'#f5f5dc' } }} />
        //             <Stack.Screen name='ProfilePicture' component={ProfilePicture} options={{headerStyle: { backgroundColor:'#f5f5dc' } }} />
        //             <Stack.Screen name='StackNavigator' component={StackNavigator}  options={{headerShown: false,}} />
        //         </Stack.Navigator>
        //     </NavigationContainer>
        //     )
        // }

    }
}