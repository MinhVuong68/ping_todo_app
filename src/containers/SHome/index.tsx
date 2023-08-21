import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Keyboard,
} from 'react-native'
import { useSelector } from 'react-redux'

import { RootState, useAppDispatch } from '@/store'
import { Fonts, Layout } from '@/theme'
import HeaderWelcome from './components/HeaderWelcome'
import LTask from './components/LTask'
import { Icon } from '@/components'
import styles from './styles/SHomeStyle'
import { getCurrentDate, isNow } from '@/utils'
import ModalCalenderPicker from './components/ModalCalendarPicker'
import { useKeyboardVisibility } from '@/hooks'
import { getTasks } from '@/store/user/userReducer'
import { setApiAccessToken } from '@/services/Api'

const SHome = () => {
  const dispatch = useAppDispatch()
  const user = useSelector((state: RootState) => state.user)

  const [date, setDate] = useState(getCurrentDate())
  const [modalCalenderVisible, setModalCalenderVisible] = useState(false)
  const [tasks,setTasks] = useState([])

  const keyboardIsShown = useKeyboardVisibility()

  useEffect(() => {
    dispatch(
      getTasks({
        userId: user.profile.id,
        date: date,
      }),
    )
      .unwrap()
      .then((data:any) => setTasks(data))
  }, [date])

  return (
    <View style={Layout.full}>
      {!keyboardIsShown && <HeaderWelcome />}
      <View style={styles.viewTasks}>
        <Pressable
          style={styles.viewDate}
          onPress={() => setModalCalenderVisible(prev => !prev)}>
          <Text style={[Fonts.textRegular, { marginRight: 10 }]}>{date}</Text>
          <Icon name="search1" size={20} />
        </Pressable>
        <ModalCalenderPicker
          isVisible={modalCalenderVisible}
          setVisible={setModalCalenderVisible}
          setValue={setDate}
        />
        <Text style={[Fonts.textExtraLargeBold, { marginBottom: 10 }]}>
          Task List
        </Text>
        <LTask tasks={tasks} date={date}/>
      </View>
    </View>
  )
}

export default SHome
