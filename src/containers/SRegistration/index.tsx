import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'

import styles from './styles/SRegistrationStyle'
import { Fonts } from '@/theme'
import {
  Button,
  GlobalScreen,
  Input,
  InputPassword,
  LinkText,
} from '@/components'
import { navigate } from '@/navigators/utils'
import { useAppDispatch } from '@/store'
import { register } from '@/store/user/userReducer'

const SRegistration = () => {
  const dispatch = useAppDispatch()
  const [dataFormRegister, setDataFormRegister] = useState({
    name: '',
    phoneNumber: '',
    password: '',
  })

  const onRegister = async () => {
    try {
      await dispatch(
        register({ ...dataFormRegister, avatar: 'k.png' }),
      ).unwrap()
      navigate('SHome')
    } catch (error) {}
  }

  return (
    <GlobalScreen>
      <ScrollView style={styles.container}>
        <View style={styles.intro}>
          <Text style={Fonts.textExtraLargeBoldCenter}>Welcome Onboard!</Text>
          <Text style={Fonts.textRegularCenter}>
            Lets help you in completing your tasks
          </Text>
        </View>
        <View style={styles.viewFormLogin}>
          <Input
            label="Name:"
            style={{ marginBottom: 10 }}
            onChangeValue={(text: string) =>
              setDataFormRegister(prevState => ({
                ...prevState,
                name: text,
              }))
            }
          />
          <Input
            label="Phone number:"
            style={{ marginBottom: 10 }}
            input={{ keyboardType: 'numeric' }}
            onChangeValue={(text: string) =>
              setDataFormRegister(prevState => ({
                ...prevState,
                phoneNumber: text,
              }))
            }
          />
          <InputPassword
            label="Password"
            style={{ marginBottom: 10 }}
            onChangeValue={(text: string) =>
              setDataFormRegister(prevState => ({
                ...prevState,
                password: text,
              }))
            }
          />
        </View>

        <View style={{ marginBottom: 50 }}>
          <Button
            title="Register"
            style={{ alignSelf: 'center' }}
            onPress={onRegister}
          />
          <View style={styles.option}>
            <Text style={Fonts.textRegularBold}>
              Already have an account ?{' '}
            </Text>
            <LinkText link="Sign in" onPress={() => navigate('SLogin')} />
          </View>
        </View>
      </ScrollView>
    </GlobalScreen>
  )
}

export default SRegistration
