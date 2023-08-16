import React from 'react'
import { Text, View, Image, Pressable, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { RootState } from '@/store'
import { Colors, Fonts, Layout } from '@/theme'
import HeaderWelcome from './components/HeaderWelcome'
import LTask from './components/LTask'
import { Icon } from '@/components'

const SHome = () => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)
  return (
    <View style={Layout.full}>
      <HeaderWelcome />
      <View style={styles.viewTasks}>
        <Text style={[Fonts.textExtraLargeBold, { marginBottom: 10 }]}>
          Task List
        </Text>
        <LTask />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewTasks: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
})

export default SHome
