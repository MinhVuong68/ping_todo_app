import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modal'

import { Colors, Fonts, Images, Layout } from '@/theme'
import { useAppDispatch } from '@/store'
import { deleteTask, updateTaskName } from '@/store/task/taskReducer'

interface ModalEditProps {
  isVisible: boolean
  setVisible: (b: boolean) => any
  value?: any
}

const ModalEdit = ({ isVisible, setVisible, value }: ModalEditProps) => {
  const dispatch = useAppDispatch()

  const [inputs, setInputs] = useState({
    taskName: value?.taskName,
  })
  const onUpdate = async () => {
    try {
      await dispatch(
        updateTaskName({ taskId: value?.taskId, taskName: inputs.taskName }),
      ).unwrap()
      setVisible(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onDelete = async () => {
    try {
      await dispatch(deleteTask(value.taskId)).unwrap()
    } catch (error) {}
  }

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.4}
      onBackButtonPress={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <Image source={Images.light_bulb} />
        <TextInput
          style={styles.input}
          value={inputs.taskName}
          onChangeText={(text: string) =>
            setInputs(prev => ({ ...prev, taskName: text }))
          }
        />
        <View style={[Layout.row, { marginTop: 10 }]}>
          <TouchableOpacity
            style={[styles.btn, styles.btnUpdate]}
            onPress={onUpdate}>
            <Image source={Images.update} style={styles.iconBtn} />
            <Text style={Fonts.textRegularBold}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnDelete]}
            onPress={onDelete}>
            <Image source={Images.bin} style={styles.iconBtn} />
            <Text style={Fonts.textRegularBold}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eaedf0',
    marginTop: 10,
    borderRadius: 8,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
  },
  iconBtn: {
    marginRight: 5,
  },
  btnUpdate: {
    borderColor: Colors.success,
  },
  btnDelete: {
    borderColor: Colors.red,
    marginLeft: 10,
  },
})

export default ModalEdit
