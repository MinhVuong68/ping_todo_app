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
import { isNow } from '@/utils'
import { useAppDispatch } from '@/store'
import { updateTaskStatus } from '@/store/user/userReducer'

type TaskType = {
  taskId: number
  name: string
  isCompleted: boolean
  dateCreate: string
  timeCreate: string
}

const Task = ({
  taskId,
  name,
  isCompleted,
  dateCreate,
  timeCreate,
}: TaskType) => {
  const dispatch = useAppDispatch()
  const [isSelected, setSelection] = useState(isCompleted)
  const [modalVisible, setModalVisible] = useState(false)

  const onPressTask = () => {
    if (!isNow(dateCreate)) return
    setModalVisible(prev => !prev)
  }

  const onChangeState = async () => {
    await dispatch(updateTaskStatus(taskId)).unwrap()
    setSelection(prev => !prev)
  }

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPressTask}>
        <CheckBox
          disabled={!isNow(dateCreate)}
          value={isSelected}
          onValueChange={onChangeState}
          tintColors={{ true: Colors.primary, false: '#000' }}
        />
        <View style={styles.task}>
          <Text
            style={[
              Fonts.textRegular,
              isSelected && { textDecorationLine: 'line-through' },
            ]}>
            {name}
          </Text>
          <Text>{timeCreate}</Text>
        </View>
      </TouchableOpacity>
      <ModalEdit isVisible={modalVisible} setVisible={setModalVisible} />
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
