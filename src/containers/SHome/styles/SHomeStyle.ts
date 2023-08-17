import { StyleSheet } from 'react-native'

import { Colors } from '@/theme'

const styles = StyleSheet.create({
  viewDate: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
    padding: 10,
    backgroundColor: Colors.white,
    alignSelf: 'flex-end'
  },
  viewTasks: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
})

export default styles
