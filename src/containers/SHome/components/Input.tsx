import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter task name" />
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
