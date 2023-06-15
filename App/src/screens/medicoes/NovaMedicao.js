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
    const [medicao, setMedicao] = useState('Insira a medida');
    const [comment, setComment] = useState('Comentários?')
    const [selectedValue, setSelectedValue] = useState("Escolha o setor");
    

  useEffect(() => {
      const onScreenLoad = async () => {
          const list = await api.get('/setor/find');
          setSetors(list.data.setors)
          dispatch({type: "update", payload: false})
      }
      onScreenLoad();
  }, [state.update]
  )
  
  const setorSala = setors.map(function(setors){
    return setors.sala;
  });
  


    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/medicao/register", {
                idFuncionario: state.name,
                salaSetor: selectedValue,
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
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                 {
                    setorSala.map(cr => {
                        return <Picker.Item label={cr} value={cr} />
                    }
                    )};
            </Picker>
                             
            <CustomInput
                placeholder="medicao"
                value={medicao}
                setValue={setMedicao}
            />

            <CustomInput
                placeholder="comment"
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
    }
});

export default NovaMedicao