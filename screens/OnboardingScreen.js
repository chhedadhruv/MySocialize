import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'The Title',
                subtitle: 'This is the subtitle that sumplements the title.',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Triangle',
                subtitle: "Beautiful, isn't it?",
            },
        ]}
    />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})