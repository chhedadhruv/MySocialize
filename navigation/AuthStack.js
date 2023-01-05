import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const Stack = createStackNavigator()

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
        GoogleSignin.configure({
            webClientId: '119179979586-c23u9klhoogjehrc7k6urdqkompf52k4.apps.googleusercontent.com',
        });
    }, []);

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = "Onboarding"
    } else {
        routeName = "Login"
    }

  return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{ header: () => null }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ header: () => null }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack