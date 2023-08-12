import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  Pressable,
  TouchableOpacity,
} from 'react-native'

import Icon from './Icon'
import { Fonts } from '@/theme'

interface InputProps {
  label?: string
  value?: string
  input?: TextInputProps
  onChangeValue?: (v: string) => any
  style?: ViewStyle
}
const Input = ({
  label,
  value,
  input,
  onChangeValue = () => {},
  style,
}: InputProps) => {
  const [textInputValue, setTextInputValue] = useState(value)

  const handleChangeText = (text: string) => {
    setTextInputValue(text)
    onChangeValue(text)
  }

  const handleCleanInput = () => {
    setTextInputValue('')
  }

  return (
    <View style={style}>
      <Text style={[Fonts.textRegularBold, styles.label]}>{label}</Text>
      <View style={styles.conntainer}>
        <TextInput
          style={styles.input}
          {...input}
          onChangeText={handleChangeText}
          value={textInputValue}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        {!!textInputValue && (
          <TouchableOpacity onPress={handleCleanInput}>
            <Icon name="closecircle" color="#ccc" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conntainer: {
    width: '100%',
    borderRadius: 20,
    height: 50,
    backgroundColor: '#fff',
    paddingRight: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    flex: 1,
  },
  label: {
    marginLeft: 20,
    marginBottom: 4,
  },
})
export default Input
