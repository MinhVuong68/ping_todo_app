import React from 'react'
import { StyleSheet, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import Modal from 'react-native-modal'
import moment from 'moment'

import { Colors } from '@/theme'
import { isNow } from '@/utils'

interface ModalCalenderPickerProps {
  isVisible: boolean
  setVisible: (b: boolean) => any
  setValue: (v: string) => any
}

const ModalCalenderPicker = ({
  isVisible,
  setVisible,
  setValue,
}: ModalCalenderPickerProps) => {
  const onDateChange = (date: any) => {
    setVisible(false)
    setValue(moment(date).format('DD/MM/YYYY'))
  }

  
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.4}
      style={{ alignItems: 'center' }}
      onBackButtonPress={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <CalendarPicker
          previousTitle="Trước"
          nextTitle="Sau"
          onDateChange={onDateChange}
          todayBackgroundColor={Colors.primary}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8
  },
})

export default ModalCalenderPicker
