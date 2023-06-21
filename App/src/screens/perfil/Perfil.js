import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState }  from 'react';
import CustomButton from '../../components/CustomButton';
import CustomButton3 from '../../components/CustomButton3';
import CustomInput2 from '../../components/CustomInput2';
import { Context } from '../../context/dataContext';
import api from '../../api'
import { ImageBackground } from 'react-native';


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
  <View style={styles.view}>
  <ImageBackground source={require('../../assets/images/medicao.png')} style={styles.imageBackground}>

    <View style={styles.container}>
      <br></br>
      {state.isAdmin ? (

<CustomButton text='Gerenciar Funcionários? Clique aqui' onPress={() => navigation.navigate("UpdateUser")} />

) : (

  <></>

)
}
<br></br>

            <Text style={styles.text1}>Altere sua senha</Text><br></br>
              <CustomInput2 value={state.name} editable={false}/>

              <CustomInput2 value={state.email} editable={false}/>
    
              <CustomInput2 placeholder="Digite a senha atual" value={senhaAntiga} setValue={setsenhaAntiga} />

              <CustomInput2 placeholder="Digite a nova senha" value={novaSenha} setValue={setNovaSenha} />
       
              <CustomInput2 placeholder="Confirme a nova senha" value={confNovaSenha} setValue={setConfNovaSenha} />

              <CustomButton text= 'Alterar senha' onPress={onRegisterSenha} />




          </View>
    </ImageBackground>
    </View>

  )
}

export default Perfil

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'left',
  },
  placeholder:{
    color: 'blue'
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
    height: '30%',
    borderRadius: 60
  },
  item: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
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
    padding: 5,
    width: '90%',
    height: '90%',
    borderRadius: 60
  },
  text1:{
    
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 20
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
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",

  },
});

 