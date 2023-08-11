import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SHome, SIntro, SLogin, SRegistration } from '@/containers'
import { navigationRef } from './utils'

const Stack = createStackNavigator()
const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SIntro" component={SIntro} />
        <Stack.Screen name="SLogin" component={SLogin} />
        <Stack.Screen name="SRegistration" component={SRegistration} />
        <Stack.Screen name="SHome" component={SHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ApplicationNavigator
