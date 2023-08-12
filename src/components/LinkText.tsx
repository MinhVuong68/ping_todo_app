import React from 'react'
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native'

import Fonts from '@/theme/Fonts'
import { Colors } from '@/theme'

interface LinkTextProps {
  link: string
  style?: ViewStyle
  linkStyle?: TextStyle
  onPress?: () => any
}

const LinkText = ({ link, style, linkStyle, onPress }: LinkTextProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text
        style={[Fonts.textRegularBold, linkStyle, { color: Colors.primary }]}>
        {link}
      </Text>
    </TouchableOpacity>
  )
}

export default LinkText
