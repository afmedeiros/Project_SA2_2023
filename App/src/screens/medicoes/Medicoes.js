
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { Context } from '../../context/dataContext';
import { ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import api from '../../api';


const Medicoes = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  const [medicoes, setMedicoes] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/medicao/find');
            setMedicoes(list.data.medicoes)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )


  return (
  <View style={styles.view}>
    <ImageBackground source={require('../../assets/images/medicao.png')} style={styles.imageBackground}>

      <View style={styles.container}>
      <br></br>

      {state.isAdmin ? (

        <CustomButton text='Nova medição' onPress={() => navigation.navigate("NovaMedicao")} />

        ) : (
          <></>
        )
      }
      <br></br>
    <Text style={styles.text}> Medições Cadastradas</Text>
              <FlatList
                data={medicoes}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.containers}>
                            <TouchableOpacity style={styles.texts}>                                    
                                    <Text style={styles.title}>Valor: {item.medicao} lux</Text>
                                    <Text style={styles.item}>Ambiente: {item.idSala}</Text>
                                    <Text style={styles.item}>Comentário: {item.comment}</Text>
                                    <Text style={styles.item}>Registrado: {item.createdAt.slice(0,10)}</Text>
                            </TouchableOpacity>
                           </View>
                    )
                }
                }
               
            />
    </View>
    </ImageBackground>
    </View>
  )
}

export default Medicoes

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(136, 138, 138, 0.4)',
    padding: 15,
    width: '85%',
    height: '100%'
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
    text:{
      fontWeight: 'bold',
      alignItems: 'center',
      fontSize: 20,
      color: 'white',
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































// COLOCAR NA ROTA DE CADASTRO DE MEDICOES BACKEND
// restaurant.get('/find', async (req, res) => {
//   const medicoes = await Medicao.findAll().catch(
//       (err) => {
//           console.log(err)
//       }
//   );

//   if (medicoes){
//       return res.json({medicoes})
//   } else {
//       return null
//   }