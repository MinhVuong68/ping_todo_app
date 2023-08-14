import React, { useState } from 'react'
import { Text, View } from 'react-native'

import styles from './styles/SRegistrationStyle'
import { Fonts } from '@/theme'
import { Button, Input, InputPassword, LinkText } from '@/components'
import { navigate } from '@/navigators/utils'

const SRegistration = () => {
  const [dataFormRegister, setDataFormRegister] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    rePassword: '',
  })

  return (
    <View style={styles.container}>
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
              text,
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
              text,
            }))
          }
        />
        <InputPassword
          label="Password"
          style={{ marginBottom: 10 }}
          onChangeValue={(text: string) =>
            setDataFormRegister(prevState => ({
              ...prevState,
              text,
            }))
          }
        />
        <InputPassword
          label="Confirm Password"
          style={{ marginBottom: 10 }}
          onChangeValue={(text: string) =>
            setDataFormRegister(prevState => ({
              ...prevState,
              text,
            }))
          }
        />
      </View>

      <View style={{ marginBottom: 50 }}>
        <Button title="Register" style={{ alignSelf: 'center' }} />
        <View style={styles.option}>
          <Text style={Fonts.textRegularBold}>Already have an account ? </Text>
          <LinkText link="Sign in" onPress={() => navigate('SLogin')} />
        </View>
      </View>
    </View>
  )
}

export default SRegistration
