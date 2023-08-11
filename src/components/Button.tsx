import React from 'react'
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

import { Colors } from '@/theme'

interface ButtonProps {
  title: string
  style?: ViewStyle
  titleStyle?: TextStyle
  onPress?: () => any
}

const Button = ({ title, style, titleStyle, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#62D2C3',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
})

export default Button
