import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { Context } from '../../context/dataContext';
import { ImageBackground } from 'react-native';

const UpdateUser = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  const [funcionarios, setFuncionarios] = useState({});

  useEffect(() => {
      const onScreenLoad = async () => {
          const list = await api.get('/funcionario/find');
          setFuncionarios(list.data.funcionarios)
          dispatch({type: "update", payload: false})
      }
      onScreenLoad();
  }, [state.update]
  )

  const deleteFunc = async (id) => {

    try{

      const data = await api.post('/funcionario/delete', {
        id: id
      });

      if(data.status === 200){

          console.log(data);
          alert(data.data.message)
          navigation.navigate('Perfil')

      }else{

          console.log(data)

      }

    }catch (error){

      console.log(error);

    }

  }

  return (
    <View style={styles.view}>
    <ImageBackground source={require('../../assets/images/medicao.png')} style={styles.imageBackground}>
      <View style={styles.container}>
      <View style={styles.Cabecario}>
        <Text style={styles.text1}>Gerenciamento de Funcionários</Text>
      <br></br></View>

      <View style={styles.corpo}>
        <View style={styles.view1}>
          <CustomButton text='Voltar' onPress={() => navigation.navigate("Perfil")} />
          <CustomButton text='Adicionar Funcionário' onPress={() => navigation.navigate("CadastroFuncionario")} />
        </View>

        <View style={styles.view2}>
        <Text style={styles.text1}>Funcionários Cadastrados</Text>
        <Text style={styles.text3}>Deseja excluir? Clique no X</Text>


          <FlatList
            data={funcionarios}
            renderItem={({ item }) => {
                return (
                    <View style={styles.containers}>
                        <TouchableOpacity style={styles.texts} >
                          <Text style={styles.title}>{item.name}</Text>
                          <Text style={styles.texts}>{item.email}</Text>
                        </TouchableOpacity>
                        <Entypo
                          name="cross"
                          size={50}
                          color="#949494"
                          style={styles.icon}
                          onPress={() => deleteFunc(item.id)}
                        />
                    </View>
                )
            }
            }
            keyExtractor={(item) => item.id}
          />  
        </View>
      </View>
    </View>
    </ImageBackground>
    </View>

  )
}

export default UpdateUser

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'left',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(136, 138, 138, 0.4)',
    padding: 15,
    width: '85%',
    height: '100%',
    textAlign: 'left',
    },
  Cabecario: {
    alignItems: 'center',
    width: '100%',
    height: '10%'
  },
  corpo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '90%'
  },
  view1: {
 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    outterSpacing: 10,
  },
  view2: {
    alignItems: 'center',
    width: '90%',
    height: '80%',
  },
  text1:{
    marginVertical: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  text3:{
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14
  },
  containers: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    maxHeight: 80,
    minWidth: 335
  },
  texts: {
      height: 120,
      width: '80%',
      justifyContent: "center",
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      justifyContent: "center",
      alignItems: 'center',
  },
  item: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  icon: {
      margin: 0,
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