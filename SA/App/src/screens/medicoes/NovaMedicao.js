import { StyleSheet, View, Image, useWindowDimensions, Picker } from "react-native";
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api'
import Logo from '../../assets/images/logo.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/dataContext";






const NovaMedicao = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idFuncionario, setidFuncionario] = useState(state.idFuncionario);
    const [setors, setSetors] = useState([]);
    const [medicao, setMedicao] = useState('');
    const [comment, setComment] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    

  useEffect(() => {
      const onScreenLoad = async () => {
          const list = await api.get('/setor/findAll');
          setSetors(list.data.setors)
          dispatch({type: "update", payload: false})
      }
      onScreenLoad();
  }, [state.update]
  );
  
  const setorSala = setors.map(function(setors){
    return setors.setor + " " + setors.sala;
  });
  

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/medicao/register", {
                idFuncionario: state.idUser,
<<<<<<< HEAD
                sala: setors.sala,
=======
                sala: sala,
>>>>>>> ff31461b618d7bcf1c1207dc79771824b6078767

                medicao: medicao,
                comment: comment,
                

              
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setMedicao("")
                setComment("")
                dispatch({type: "update", payload: true})
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }

     
    }
    
   

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                value={state.name}
                editable={false}
            />

           <Picker
                placeholder="Escolha o setor"
                selectedValue={selectedValue}
                style={{ height: 50, width: '90%' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                
            >   <Picker.Item label={'Escolha o setor'} value={0}/>
                 {
                    setorSala.map(cr => {
                        return <Picker.Item label={cr} value={cr} />
                    }
                    )};
            </Picker>
                             
            <CustomInput
                placeholder="Insira a medida"
                value={medicao}
                setValue={setMedicao}
            />

            <CustomInput
                placeholder="Comentários?"
                value={comment}
                setValue={setComment}
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});

export default NovaMedicao