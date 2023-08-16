import React, { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'

import { Colors, Fonts } from '@/theme'
import ModalEdit from './ModalEdit'

const Task = () => {
  const [isSelected, setSelection] = useState(false)
  const [modalVisible,setModalVisible] = useState(false)

  const onChangeState = () => {
    setModalVisible(true)
  }
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onChangeState}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: Colors.primary, false: '#000' }}
        />
        <View style={styles.task}>
          <Text
            style={[
              Fonts.textRegular,
              isSelected && { textDecorationLine: 'line-through' },
            ]}>
            Play game
          </Text>
          <Text>10:06:32</Text>
        </View>
      </TouchableOpacity>
      <ModalEdit
        isVisible={modalVisible}
        setVisible={setModalVisible}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
})

export default Task
