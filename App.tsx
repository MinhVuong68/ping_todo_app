/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import ApplicationNavigator from '@/navigators/Application'
import React from 'react'
import { GlobalScreen } from '@/components'
import { Provider } from 'react-redux'
import store from '@/store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalScreen>
        <ApplicationNavigator />
      </GlobalScreen>
    </Provider>
  )
}

export default App
