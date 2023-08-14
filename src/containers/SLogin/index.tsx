import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './styles/SLoginStyle'
import Fonts from '@/theme/Fonts'
import { Images } from '@/theme'
import { Button, Input, InputPassword, LinkText } from '@/components'
import { navigate } from '@/navigators/utils'

const SLogin = () => {
  const [dataFormLogin, setDataFormLogin] = useState({
    phoneNumber: '',
    password: '',
  })

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={Fonts.textExtraLargeBoldCenter}>Welcome Back!</Text>
        <Image source={Images.login} style={styles.image} />
      </View>
      <View style={styles.viewFormLogin}>
        <Input
          label="Phone number"
          style={{ marginBottom: 10 }}
          onChangeValue={(text: string) =>
            setDataFormLogin(prevState => ({
              ...prevState,
              phoneNumber: text,
            }))
          }
        />
        <InputPassword
          label="Password"
          style={{ marginBottom: 10 }}
          onChangeValue={(text: string) =>
            setDataFormLogin(prevState => ({
              ...prevState,
              password: text,
            }))
          }
        />
        <LinkText link="Forgot Password?" style={{ alignSelf: 'flex-end' }} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <Button title="Login" style={{ alignSelf: 'center' }} />
        <View style={styles.option}>
          <Text style={Fonts.textRegularBold}>Don't have an account ?</Text>
          <LinkText
            link="Sign up"
            style={{ marginLeft: 8 }}
            onPress={() => navigate('SRegistration')}
          />
        </View>
      </View>
    </View>
  )
}

export default SLogin
