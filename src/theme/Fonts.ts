import { StyleSheet } from 'react-native'
import Colors from './Colors'

const SIZE_TEXT_NORMAL = 15
const SIZE_TEXT_LARGE = 20
const SIZE_TEXT_EXTRA_LARGE = 22

const Fonts = StyleSheet.create({
  textRegular: {
    fontSize: SIZE_TEXT_NORMAL,
    color: Colors.text,
  },
  textRegularCenter: {
    fontSize: SIZE_TEXT_NORMAL,
    color: Colors.text,
    textAlign: 'center',
  },
  textRegularBold: {
    fontSize: SIZE_TEXT_NORMAL,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textRegularBoldCenter: {
    fontSize: SIZE_TEXT_NORMAL,
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textLarge: {
    fontSize: SIZE_TEXT_LARGE,
    color: Colors.text,
  },
  textLargeCenter: {
    fontSize: SIZE_TEXT_LARGE,
    color: Colors.text,
    textAlign: 'center',
  },
  textLargeBold: {
    fontSize: SIZE_TEXT_LARGE,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textLargeBoldCenter: {
    fontSize: SIZE_TEXT_LARGE,
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textExtraLarge: {
    fontSize: SIZE_TEXT_EXTRA_LARGE,
    color: Colors.text,
  },
  textExtraLargeCenter: {
    fontSize: SIZE_TEXT_EXTRA_LARGE,
    color: Colors.text,
    textAlign: 'center',
  },
  textExtraLargeBold: {
    fontSize: SIZE_TEXT_EXTRA_LARGE,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textExtraLargeBoldCenter: {
    fontSize: SIZE_TEXT_EXTRA_LARGE,
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Fonts
