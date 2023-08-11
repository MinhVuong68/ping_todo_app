import React from 'react'
import { ReactNode } from 'react'

import { View, Image, StyleSheet } from 'react-native'
import { Colors, Images } from '@/theme'

interface GlobalScreenProps {
  children: ReactNode
}

const GlobalScreen: React.FC<GlobalScreenProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={Images.shape}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
})

export default GlobalScreen
