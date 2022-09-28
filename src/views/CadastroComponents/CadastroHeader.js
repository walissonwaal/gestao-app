import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import TitleText from '../../components/TitleText'
import Logo from '../../assets/logo.png'
import SubTitleText from '../../components/SubTitleText'

export default props => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <TitleText>Cadastre-se</TitleText>
        </View>
        <View>
          <SubTitleText>Preencha todos os campos abaixo para realizar seu cadastro.</SubTitleText>
        </View>
      </View>

    </>

  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 26
  },
  title: {
    marginBottom: 16
  }
  })
  // logoArea: {
  //   height: 100,
  //   width: "100%",
  //   marginVertical: 26,
  //   alignItems: "center"
  // },
  // logo: {
  //   flex: 1,
  //   height: "100%",
  //   width: 50,
  //   resizeMode: 'contain',