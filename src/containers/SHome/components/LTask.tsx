import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { Colors } from '@/theme'
import { Icon } from '@/components'
import Task from './Task'
import Input from './Input'

type ItemData = {
  id: string
  title: string
}

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

const LTask = () => {
  const [isPressBtnAdd, setIsPressBtnAdd] = useState(false)

  const onCancel = () => {
    setIsPressBtnAdd(prev => !prev)
  }
  return (
    <View style={styles.container}>
      {isPressBtnAdd ? (
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
      {isPressBtnAdd && <Input />}
      <FlatList
        data={DATA}
        renderItem={({ item }: any) => <Task />}
        keyExtractor={item => item.id}
        //extraData={selectedId}
      />
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
