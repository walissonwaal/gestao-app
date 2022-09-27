import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import TitleText from '../../components/TitleText'
import Logo from '../../assets/logo.png'
import SubTitleText from '../../components/SubTitleText'

export default props => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoArea}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.title}>
          <TitleText>Bem-vindo ao Gestão App</TitleText>
        </View>
        <View>
          <SubTitleText>Digite seu e-mail e sua senha de registro.</SubTitleText>
        </View>
      </View>

    </>

  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f5c41c',
    // marginVertical: 26
  },
  logoArea: {
    height: 100,
    width: "100%",
    marginVertical: 26,
    alignItems: "center"
  },
  logo: {
    flex: 1,
    height: "100%",
    width: 50,
    resizeMode: 'contain',
  },
  title: {
    marginBottom: 16
  }
})