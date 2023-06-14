import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import api from '../../api';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Context } from '../../context/dataContext'

const Relatorios = ({navigation}) => {

  const { state, dispatch } = useContext(Context);


  const [relatorios, setRelatorios] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/relatorio/find');
            setRelatorios(list.data.relatorios)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    const seeReview = async (item) => {
        await dispatch({type: 'setRestaurant', payload: item});
        //navigation.navigate('RestaurantReviews');
    }

    const newReview = async (item) => {
        await dispatch({type: 'setRestaurant', payload: item});
        //navigation.navigate('RegisterReview');
    }



  return (
    <View style={styles.container}>
   
      <Text style={styles.text}>relatório</Text>
     
      {state.isAdmin ? (
     
        <CustomButton text='criar relatório' onPress={() => navigation.navigate("NovoRelatorio")} />
       
        ) : (
        
          <></>
        
        )
      }

      <FlatList
          data={relatorios}
          renderItem={({ item }) => {
              return (
                  <View style={styles.containers}>
                      <TouchableOpacity style={styles.texts} onPress={() => seeReview(item)}>
                              <Text style={styles.title}>{item.name}</Text>
                              <Text style={styles.item}>{item.description}</Text>
                      </TouchableOpacity>
                      {/* <Entypo
                          name="squared-plus"
                          size={60}
                          color="green"
                          style={styles.icon}
                          onPress={() => newReview(item)}
                      /> */}
                  </View>
              )
          }
          }
          keyExtractor={(item) => item.id}
      />
      
   </View>
  )

}

export default Relatorios

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      padding: 20,
      width: '100%',
      height: '100%'
  },
  text:{
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20
  },
  containers: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    minWidth: 335
  },
  texts: {
      height: 120,
      width: '80%',
      justifyContent: "center",
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
  },
  item: {
      fontSize: 15,
      fontWeight: 'bold',
  },
  icon: {
      margin: 0
  }
});