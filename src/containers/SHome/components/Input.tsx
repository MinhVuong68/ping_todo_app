import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

interface InputProps {
  onChangeValue: (v: string) => any
}
const Input = ({ onChangeValue }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter task name" onChangeText={onChangeValue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
})

export default Input
