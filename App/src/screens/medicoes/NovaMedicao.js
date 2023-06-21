import { StyleSheet, View, Image, useWindowDimensions, Picker } from "react-native";
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api'
import Logo from '../../assets/images/logo.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/dataContext";
import { ImageBackground } from 'react-native';






const NovaMedicao = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idFuncionario, setidFuncionario] = useState(state.idFuncionario);
    const [setors, setSetors] = useState([]);
    const [idSala, setidSala] = useState('');
    const [medicao, setMedicao] = useState('');
    const [comment, setComment] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedLabel, setSelectedLabel] = useState('');

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/setor/findAll');
            setSetors(list.data.setors)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    );

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/medicao/register", {
                idEmpresa: state.idUser,
                idSala: selectedValue,
                medicao: medicao,
                comment: comment,
                

            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setMedicao("")
                setComment("")
                dispatch({ type: "update", payload: true })
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }


    }

console.log(selectedLabel)

    return (
        <View style={styles.view}>
    <ImageBackground source={require('../../assets/images/medicao.png')} style={styles.imageBackground}>
    <View style={styles.container}>
      <br></br>
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
                style={styles.picker}
                onValueChange={(id) => {setSelectedValue(id)}}
                
            >
                {
                    setors.map((setor) => (
                        <Picker.Item 
                            label={setor.setor + " " + setor.sala} 
                            value={setor.id}
                        />
                    ))
                }
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

            <CustomButton text="Cadastrar" onPress={onRegisterPressed} />
            </View>
            </ImageBackground>
        </View>
    )
};


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
        borderWidth: 1,
        borderColor: '#e8e8e8',
        height: 60, 
        width: '90%',
        backgroundColor: 'white',
        textAlignVertical: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        fontColor: 'black',
        borderWidth: 0,
        padding: 15,
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

export default NovaMedicao