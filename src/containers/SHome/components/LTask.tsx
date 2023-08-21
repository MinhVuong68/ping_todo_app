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

const LTask = ({ tasks, date }: any) => {
  const [isPressBtnAdd, setIsPressBtnAdd] = useState(false)

  const onCancel = () => {
    setIsPressBtnAdd(prev => !prev)
  }
  return (
    <View style={styles.container}>
      {isNow(date) && isPressBtnAdd ? (
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <TouchableOpacity style={styles.btnAdd}>
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
      {isNow(date) && isPressBtnAdd && <Input />}
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
          keyExtractor={item => item.id}
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
