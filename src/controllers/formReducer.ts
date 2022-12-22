import { useState, useReducer } from 'react';

const formReducer = () => {
    const [cbAcopio, setCbAcopio] = useState(false);  

    const INITIAL_STATE = {
        showForm: false,
        technology: '',
        saks: 0,
        humidity: 0,
        location: 0,
        imperfection: 0,
        QQ: 0,
        TARA: 0,
        TotalQQ: 0,
    }

    type ActionType = 
        | {type: "showForm"}
        | {type: "technology", payload: string}
        | {type: "saks", payload: number}
        | {type: "humidity", payload: number}
        | {type: "location", payload: number}
        | {type: "imperfection", payload: number}
        | {type: "QQ", payload: number}
        | {type: "TARA", payload: number}
        | {type: "totalQQ", payload: number}
        
    const postForm = (state: typeof INITIAL_STATE, action:ActionType) => {
        switch (action.type) {
            case "showForm":
                return {
                    ...state,
                    showForm: !state.showForm
                }
            case "saks":
                return {
                    ...state,
                    saks: action.payload
                }
            case "technology":
                return {
                    ...state,
                    technology: action.payload
                }
            case "humidity":
                return {
                    ...state,
                    humidity: action.payload
                }
            case "location":
                return {
                    ...state,
                    location: action.payload
                }
            case "imperfection":
                return {
                    ...state,
                    imperfection: action.payload
                }
            case "QQ":
                return {
                    ...state,
                    QQ: action.payload
                }
            case "TARA":
                return {
                    ...state,
                    TARA: action.payload
                }
            case "totalQQ":
                return {
                    ...state,
                    totalQQ: action.payload
                }
                      
            default:
                return state;
        }
    }
   
    //CONSUMING REDUCER
    const [state, dispatch] = useReducer(postForm, INITIAL_STATE);
    const {
        showForm,
        technology,
        saks,
        humidity,
        location,
        imperfection,
        QQ,
        TARA,
        TotalQQ,} = state;   

    const toggleForm = () => {
        dispatch({type: 'showForm'})
    }

    const clearForm = () => {
        dispatch({type: "saks", payload: 0})
        dispatch({type: "technology", payload: ''})
        dispatch({type: "humidity", payload: 0})
        dispatch({type: "location", payload: 0})
        dispatch({type: "imperfection", payload: 0})
        dispatch({type: "QQ", payload: 0})
        dispatch({type: "TARA", payload: 0})
        dispatch({type: "totalQQ", payload: 0})
    }

    //values 
    const addTechnology = (dataString:string) => {
        dispatch({type: "technology", payload: dataString})
    }   
    const addSaks = (text:string) => {
        dispatch({type: "saks", payload: Number(text)})
    }
    const addHumidity = (text:string) => {
        dispatch({type: "humidity", payload: Number(text)})
    }
    const addLocation = (text:string) => {
        dispatch({type: "location", payload: Number(text)})
    }
    const addImperfection = (text:string) => {
        dispatch({type: "imperfection", payload: Number(text)})
    }
    const addQQ = (text:string) => {
        dispatch({type: "QQ", payload: Number(text)})
    }
    const addTARA = (text:string) => {
        dispatch({type: "TARA", payload: Number(text)})
    }
    const addTotalQQ = (text:string) => {
        dispatch({type: "totalQQ", payload: Number(text)})
    }
    const formValue = ({payloadName, value}:any) => {
        dispatch({type: payloadName, payload: Number(value)})
    }


    return {
        showForm, toggleForm,
        technology,
        saks,
        humidity,
        location,
        imperfection,
        QQ,
        TARA,
        TotalQQ,        
        addTechnology,
        addSaks,
        addHumidity,
        addLocation,
        addImperfection,
        addQQ,
        addTARA,
        addTotalQQ,
        formValue,
        cbAcopio, setCbAcopio,
        clearForm
    }
}
export default formReducer;