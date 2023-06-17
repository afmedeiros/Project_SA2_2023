import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React, { useContext, useState } from 'react';
import api from '../../api'
import Logo from '../../assets/images/logo.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/dataContext";
import { Picker } from "react-native-web";



const NovaMedicao = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idFuncionario, setidFuncionario] = useState(state.idFuncionario);
    const [salaSetor, setsalaSetor] = useState(state.salaSetor);
    const [medicao, setMedicao] = useState('Insira a medida');
    const [comment, setComment] = useState('Comentários?');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/medicao/register", {
                idFuncionario: state.idUser,
                sala: sala,
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
                selectedValue={state.sala}
                style={styles.picker}
                onValueChange={({itemValue}, itemIndex) => <Picker.Item key={salaSetor} label={salaSetor} value={salaSetor} />
                }>

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