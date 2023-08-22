import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Colors, Images } from '@/theme'
import { Icon } from '@/components'
import Task from './Task'
import Input from './Input'
import { isNow } from '@/utils'
import EmptyView from '@/components/Emptyview'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store'
import { createTask } from '@/store/task/taskReducer'

const LTask = ({ date }: any) => {
  const dispatch = useAppDispatch()

  const user = useSelector((state: RootState) => state.user.profile)
  const tasks = useSelector((state: RootState) => state.task.tasks)

  const [isPressBtnAdd, setIsPressBtnAdd] = useState(false)
  const [taskName, setTaskName] = useState('')

  const onCreate = async () => {
    try {
      const rs: any = await dispatch(
        createTask({ name: taskName, userId: user.id }),
      ).unwrap()
      // setTaskList((prev: any) => [
      //   ...prev,
      //   {
      //     taskId: rs.id,
      //     name: rs.name,
      //     isCompleted: rs.completed,
      //     dateCreate: rs.dateCreate,
      //     timeCreate: rs.timeCreate,
      //   },
      // ])
      setIsPressBtnAdd(prev => !prev)
    } catch (error) {
      console.log(error)
    }
  }

  const onCancel = () => {
    setIsPressBtnAdd(prev => !prev)
    setTaskName('')
  }
  return (
    <View style={styles.container}>
      {isNow(date) && isPressBtnAdd ? (
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity style={styles.btnAdd} onPress={onCreate}>
            <Icon
              type="MaterialIcons"
              name="check-circle"
              color={Colors.success}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAdd} onPress={onCancel}>
            <Icon
              type="MaterialIcons"
              name="cancel"
              color={Colors.red}
              size={30}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <Pressable
          style={styles.btnAdd}
          onPress={() => setIsPressBtnAdd(prev => !prev)}>
          <Icon name="pluscircleo" color={Colors.primary} size={30} />
        </Pressable>
      )}
      {isNow(date) && isPressBtnAdd && <Input onChangeValue={setTaskName} />}
      {tasks.length ? (
        <FlatList
          data={tasks}
          renderItem={({ item }: any) => (
            <Task
              taskId={item.id}
              name={item.name}
              isCompleted={item.completed}
              dateCreate={item.dateCreate}
              timeCreate={item.timeCreate}
            />
          )}
          //keyExtractor={item => item.id}
          //extraData={selectedId}
        />
      ) : (
        <EmptyView image={Images.sticky_note} title="" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 320,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  btnAdd: {
    alignSelf: 'flex-end',
    padding: 10,
  },
})

export default LTask
