import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const SHome = () => {
  const user = useSelector((state:RootState) => state.user)
  console.log(user);
  return (
    <View>
      <Text>SHome</Text>
    </View>
  )
}

export default SHome
