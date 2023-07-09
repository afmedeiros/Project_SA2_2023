import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import api from '../../api';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton'
import { Context } from '../../context/dataContext'
import { ImageBackground } from 'react-native';

const SalasDoSetor = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  const onRegisterPressed = async () => {

    try{

      const data = await api.post('/setor/register', {
          setor: name,

      });

      if(data.status === 200){

          console.log(data);
          alert(data.data.message)
          navigation.navigate('Setores')

      }else{

          console.log(data)

      }

    }catch (error){

      console.log(error);
    
    }
  }


  const [setors, setSetors] = useState({});

  useEffect(() => {
      const onScreenLoad = async () => {
          const list = await api.get('/setor/findClass', {
            params: {
                setor: state.setor,
              }
        });
        console.log(list.data)
          setSetors(list.data.setors)
          dispatch({type: "update", payload: false})
      }
      onScreenLoad();
  }, [state.update]
  )

  const seeSetor = async (item) => {
      await dispatch({type: 'setSetor', payload: item});
      navigation.navigate('MedicoesSala');
  }

  return (
    <View style={styles.view}>
  <ImageBackground source={require('../../assets/images/setor.png')} style={styles.imageBackground}>

    <View onPress={onRegisterPressed} style={styles.container}>
      <CustomButton text='Voltar' onPress={() => navigation.navigate("Setors")} />
      <br></br> 
         <Text style={styles.text}>Salas Cadastradas</Text>
      <FlatList
          data={setors}
          renderItem={({ item }) => {
              return (
                  <View style={styles.containers}>
                      <TouchableOpacity style={styles.texts} onPress={() => seeSetor(item)}>
                              <Text style={styles.title}>{item.sala}</Text>
                      </TouchableOpacity>
                  </View>
              )
          }
          }
          keyExtractor={(item) => item.id}
      />
    </View>
    </ImageBackground>
  </View>
  )
}

export default SalasDoSetor

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(136, 138, 138, 0.4)',
    padding: 15,
    width: '85%',
    height: '100%'
},
  text:{
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
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
    view: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F8B500',
    width: '100%',
    height: '100%',
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
      fontSize: 18,
      fontWeight: 'bold',
  },
  icon: {
      margin: 0
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",

  },
})