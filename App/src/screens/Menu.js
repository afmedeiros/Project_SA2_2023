import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  },
});