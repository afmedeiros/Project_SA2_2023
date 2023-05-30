import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewMedicao = () => {
  return (
    <View style={styles.container}>
      <Text>NewMedicao</Text>
    </View>
  )
}

export default NewMedicao

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
});