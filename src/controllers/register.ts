import { ToastAndroid } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

import { ResRegister, formParams } from '../types/types';

const RegisterData = () => {

    const fetchLocalRegister = () => {
        return new Promise<ResRegister>((resolve, reject) => {
            console.log("Loading register...")
            try {
                EncryptedStorage.getItem('register')
                    .then(result => {
                        if (result != null) {
                            const _result: [] = JSON.parse(result);
                            resolve(_result)
                        } else {
                            console.log(`No data saved found in register: ` + result);
                        }
                    });
            } catch (error) {
                reject(error)
            }
        });
    }

    const saveRegister = ({
        client,
        technology,
        saks,
        humidity,
        location,
        imperfection,
        QQ,
        TARA,
        TotalQQ,
        register,
        clearForm,
    }: formParams): Promise<ResRegister> => {
        
        console.log("register length****: " + register?.length)
        
        console.log(`Saved register: ${JSON.stringify(register)}`);

        return new Promise(async (resolve, reject) => {
            try {
                if (saks === 0) {
                    ToastAndroid.show(`Hay campos vacíos o en cero`, ToastAndroid.LONG);
                }
                else {
                    const newRegData: ResRegister = [...register];

                    const date = new Date();
                    const hours = date.getHours();
                    const minutes = date.getMinutes();
                    const seconds = date.getSeconds();

                    const data = {
                        id: date.getTime().toString(),
                        time: `${hours}:${minutes}:${seconds}`,
                        client,
                        technology,
                        saks,
                        humidity,
                        location,
                        imperfection,
                        QQ,
                        TARA,
                        TotalQQ,
                    }
                    
                    console.log("register length before saving: " + register?.length)
                    newRegData?.push(data);

                    EncryptedStorage.setItem('register', JSON.stringify(newRegData))
                        .then(() => {
                            ToastAndroid.show(`Nuevo registro agregado!`, ToastAndroid.LONG);
                            console.log("NEW register length: " + newRegData?.length)

                            console.log("register length after saving: " + register?.length)
                            resolve(newRegData);// 
                            clearForm();                             
                        })
                }

            } catch (error) {
                console.log('ERROR SAVING DATA: ' + error);
                ToastAndroid.show(`Error de guardado`, ToastAndroid.LONG);
                reject(error);
            }
        });
    }
    return {
        fetchLocalRegister,
        saveRegister,
    }
}

export default RegisterData;