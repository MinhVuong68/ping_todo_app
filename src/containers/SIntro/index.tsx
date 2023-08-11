import React from 'react'
import { Image, View } from 'react-native'

import styles from './styles/SIntroStyle'
import { Images } from '@/theme'
import TextIntro from './components/TextIntro'
import { Button } from '@/components'
import { navigate } from '@/navigators/utils'

const SIntro = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.intro} style={styles.image} />
      <TextIntro />
      <Button title='Get Started' onPress={() => navigate('SLogin')} style={{marginTop: 150}}/>
    </View>
  )
}

export default SIntro
