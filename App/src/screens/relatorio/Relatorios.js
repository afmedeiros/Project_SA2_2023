import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import api from '../../api';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Context } from '../../context/dataContext'
import { ImageBackground } from 'react-native';

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
    <View style={styles.view}>
    <ImageBackground source={require('../../assets/images/relatorios.png')} style={styles.imageBackground}>

    <View style={styles.container}>
    <br></br>
    {state.isAdmin ? (
     
     <CustomButton text='Novo relatório' onPress={() => navigation.navigate("NovoRelatorio")} />
    
     ) : (
     
       <></>
     
     )
   }

   <br></br>
  
      <Text style={styles.text}>Relatórios criados</Text>
     

      <FlatList
          data={relatorios}
          renderItem={({ item }) => (
            <View style={styles.containers}>
              <TouchableOpacity style={styles.texts} onPress={() => seeReview(item)}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.containers2}>
                <Text style={styles.item}>{item.description}</Text>
                <Text style={styles.item}>Registro em: {item.createdAt.slice(0,10)}</Text>
                </View>
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
          keyExtractor={(item) => item.id}
      />
      
   </View>
   </ImageBackground>
  </View>
  )

}

export default Relatorios

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
    color: 'white'
  },
  containers: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    minWidth: 335,
    minHeight: 190
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
      fontSize: 15,
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
});