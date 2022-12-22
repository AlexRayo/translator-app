import React, { createContext, useState } from 'react';

import {ResRegister, formParams} from '../types/types';

import registerData from '../controllers/register'

export interface RegisterProviderProps {
    register : ResRegister,
    setRegister : (data:ResRegister) => void,
    submitRegister : (data:formParams) => void,
    loadRegister : () => void
}
const INITIAL_STATE = {
    register: [],
    setRegister : () => 0,
    submitRegister : () => 0,
    loadRegister : () => 0
}

export const DataContext = createContext<RegisterProviderProps>(INITIAL_STATE);

export const DataProvider = ({ children }:any): JSX.Element => {
    const { saveRegister, fetchLocalRegister } = registerData()

    const [register, setRegister] = useState<ResRegister>([])

    const submitRegister = (singleRegister: formParams) =>{
        saveRegister(singleRegister)
            .then((resRegister)=> {
                //console.log(`Response register: ${JSON.stringify(resRegister)}`);
                setRegister(resRegister)
                //loadRegister()
            })
    }

    const loadRegister = () => {
        fetchLocalRegister()
            .then((resLocalRegister)=>{
                console.log(`Saved register: ${JSON.stringify(resLocalRegister)}`);
                setRegister(resLocalRegister)
            })
    }

    React.useEffect(()=>{
        console.log('REGISTER STATE UPDATED')
    },[register])

    return (
        <DataContext.Provider
            value={{
                register, 
                setRegister,
                submitRegister,
                loadRegister
            }}>
            {children}
        </DataContext.Provider>)
}

export default DataContext