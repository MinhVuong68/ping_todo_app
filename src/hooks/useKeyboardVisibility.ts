import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native' // Assuming you're using React Native

function useKeyboardVisibility() {
  const [keyBoardIsShown, setKeyBoardIsShown] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyBoardIsShown(true)
      },
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyBoardIsShown(false)
      },
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return keyBoardIsShown
}

export default useKeyboardVisibility
