import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewSetor = () => {
  return (
    <View style={styles.container}>
      <Text>NewSetor</Text>
    </View>
  )
}

export default NewSetor

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
});