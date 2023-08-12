import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  Pressable,
} from 'react-native'

import Icon from './Icon'
import { Fonts } from '@/theme'

interface InputPasswordProps {
  label?: string
  value?: string
  input?: TextInputProps
  onChangeValue?: (v: string) => any
  style?: ViewStyle
}

const InputPassword = ({
  label,
  value,
  input,
  onChangeValue = () => {},
  style,
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [textInputValue, setTextInputValue] = useState(value)

  const handleChangeText = (text: string) => {
    setTextInputValue(text)
    onChangeValue(text)
  }

  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <View style={style}>
      <Text style={[Fonts.textRegularBold, styles.label]}>{label}</Text>
      <View style={styles.conntainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword ? false : true}
          {...input}
          onChangeText={handleChangeText}
          value={textInputValue}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize={'none'}
        />
        {!!textInputValue && (
          <>
            {!showPassword ? (
              <Pressable onPress={handleShowPassword}>
                <Icon type="Entypo" name="eye" color="#ccc" size={20} />
              </Pressable>
            ) : (
              <Pressable onPress={handleShowPassword}>
                <Icon
                  type="Entypo"
                  name="eye-with-line"
                  color="#ccc"
                  size={20}
                />
              </Pressable>
            )}
          </>
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

export default InputPassword
