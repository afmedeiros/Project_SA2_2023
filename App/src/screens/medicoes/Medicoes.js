import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Context } from '../../context/dataContext'
import { Entypo } from '@expo/vector-icons';

const Medicoes = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  const [restaurants, setRestaurants] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/restaurant/find');
            setRestaurants(list.data.restaurants)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

  return (
    <View style={styles.container}>
      <Text> SUAS MEDIÇÕES</Text>

      {state.isAdmin ? (

        <CustomButton text='criar nova medição' onPress={() => navigation.navigate("NovaMedicao")} />

        ) : (
        
          <FlatList
                data={medicoes}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeReview(item)}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.item}>{item.type}</Text>
                                    <Text style={styles.item}>{item.description}</Text>
                                    <Text style={styles.item}>{item.address}</Text>
                            </TouchableOpacity>
                            <Entypo
                                name="squared-plus"
                                size={60}
                                color="green"
                                style={styles.icon}
                                onPress={() => newReview(item)}
                            />
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        )
      }

      {state.isAdmin ? (
      
        <CustomButton text='medições existentes' onPress={() => navigation.navigate("MedirLocalExistente")} />
        
        ) : (
        
          <></>
        
        )
      }

    </View>
  )
}

export default Medicoes

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
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