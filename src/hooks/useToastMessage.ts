import { useRef, useEffect } from 'react'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import Toast from 'react-native-root-toast'

const useToastMessage = () => {
  const { message, latestShowDate } = useSelector(
    (state: RootState) => state.app.toast,
  )
  const prevToast = useRef(null)
  useEffect(() => {
    if (!message) {
      return
    }
    if (prevToast.current) {
      Toast.hide(prevToast.current)
    }
    prevToast.current = Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      containerStyle: {
        marginTop: 24,
      },
    })
  }, [message, latestShowDate])
  return null
}

export default useToastMessage

