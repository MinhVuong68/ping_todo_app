import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { Colors, Fonts, Images, Layout } from '@/theme'
import { ImageAvatar } from '@/components'

const HeaderWelcome = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.shape_opacity} />
      <View style={Layout.center}>
        <ImageAvatar uri="https://salt.tikicdn.com/cache/w400/ts/product/6e/8e/24/5446c8a0d74e4673e92df7021f66b232.jpg" />
        <Text style={[Fonts.textLargeBold, styles.name]}>
          Welcome Minh Vuong
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 292,
    backgroundColor: Colors.primary,
  },
  name: {
    color: Colors.white,
    marginTop: 8,
  },
})

export default HeaderWelcome
