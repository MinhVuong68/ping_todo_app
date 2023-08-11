import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors } from '@/theme'

const TextIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get things done with TODO</Text>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          TODO: The ultimate task management app for organizing your day-to-day
          tasks with ease and simplicity
        </Text>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
  },
  description: {
    width: '73%',
  },
  descriptionText: {
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.black,
    fontSize: 15,
  },
})

export default TextIntro
