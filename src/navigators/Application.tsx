import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SHome, SIntro, SLogin, SRegistration } from '@/containers'
import { navigationRef } from './utils'
import { Colors } from '@/theme'
import { SafeAreaView, StatusBar } from 'react-native'

const Stack = createStackNavigator()
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.backgroundPrimary,
  },
}
const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="SIntro" component={SIntro} />
          <Stack.Screen name="SLogin" component={SLogin} />
          <Stack.Screen name="SRegistration" component={SRegistration} />
          <Stack.Screen name="SHome" component={SHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
