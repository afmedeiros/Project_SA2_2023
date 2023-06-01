import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MedirLocalExistente = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MedirLocalExistente</Text>
    </View>
  )
}

export default MedirLocalExistente

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
});