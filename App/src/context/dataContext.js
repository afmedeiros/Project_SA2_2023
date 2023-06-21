import React, { useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = {
    Loading: true,
    isLogged: false,
    empresa: false,
    email: '',
    name: '',
    isAdmin: false,
    idUser: '',
    idEmpresa: '',
    idSetor: '',
    idFuncionario: '',
    update: false,
    setor: ''
}

const reducer = (state, action) => {
    switch(action.type){
        case "log":
            return { ...state, isLogged: action.payload, Loading: false, empresa: true }
        case "logIn":
            return { ...state, isLogged: action.payload, Loading: false }
        case "logOut":
            AsyncStorage.removeItem("token");
            return { 
                ...state, 
                isLogged: false,
                isAdmin: false,
                empresa: false
            }
        case "verify":
            return { 
                ...state, 
                isLogged: true, 
                Loading: false, 
                idUser: action.payload.id, 
                isAdmin: action.payload.admin, 
                name: action.payload.name,
                email: action.payload.email,
            }
        case "setSetor":
            return { 
                ...state, 
                setor: action.payload.setor,
                idSetor: action.payload.id               
            }
        case "update":
            return {
                ...state,
                update: action.payload
            }
        default:
            return state
    }
}

export const Context = React.createContext();

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
    
}