import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState }  from 'react';
import CustomButton from '../../components/CustomButton';
import CustomButton3 from '../../components/CustomButton3';
import CustomInput2 from '../../components/CustomInput2';
import { Context } from '../../context/dataContext';
import api from '../../api'



const Perfil = ({navigation}) => {

  const [novaSenha, setNovaSenha] = useState("");
  const [senhaAntiga, setsenhaAntiga] = useState("");
  const [confNovaSenha, setConfNovaSenha] = useState("");

  const { state, dispatch } = useContext(Context);

  const onRegisterSenha = async () => {

      try{

          const data = await api.post('/perfil/senhaUpdate', {
              admin: state.isAdmin,
              email: state.email,
              password: senhaAntiga,
              newPassword: novaSenha,
              confirmacao: confNovaSenha
          });

          if(data.status === 200){

              console.log(data);
              alert(data.data.message)
              setNovaSenha('')
              setsenhaAntiga('')
              setConfNovaSenha('')
              navigation.navigate('Menu')

          }else{

              console.log(data)

          }

      }catch (error){

          console.log(error);

      }

  };


 return (
    <View style={styles.container}>

        <View style={styles.view1}>

          <View style={styles.Cabecario}>

            <Text style={styles.text1}>Olá {state.name}</Text>
            <Text style={styles.text2}>Email cadastrado: {state.email}</Text>

          </View>

          <View style={styles.corpo}>

            <View style={styles.campos2}>
              <CustomInput2 placeholder="senha atual" value={senhaAntiga} setValue={setsenhaAntiga} />

            </View>

            <View style={styles.campos2}>
              <CustomInput2 placeholder="nova senha" value={novaSenha} setValue={setNovaSenha} />
            </View>


            <View style={styles.campos2}>
              <CustomInput2 placeholder="confirmar nova senha" value={confNovaSenha} setValue={setConfNovaSenha} />

            </View>
              <CustomButton text= 'Alterar senha' onPress={onRegisterSenha} />

          <CustomButton text= 'Adicionar foto de perfil' onPress={Perfil} />

          {state.isAdmin ? (

            <CustomButton text='Adicionar Funcionário' onPress={() => navigation.navigate("CadastroFuncionario")} />

            ) : (
            
              <></>
            
            )
          }

          </View>

        </View>
    
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  Cabecario: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
    borderRadius: 60
  },
  corpo: {
    alignItems: 'center',
    width: '100%',
    height: '70%',
    borderRadius: 60
  },
  campos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    margin: 5
  },
  view1: {
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    marginVertical: 20,
    padding: 20,
    width: '90%',
    height: '90%',
    borderRadius: 60
  },
  text1:{
    marginVertical: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35
  },
  text2:{
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  campos2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    margin: 2
  },
});

 