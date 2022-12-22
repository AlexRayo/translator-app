import React from 'react';
import { View, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';

import { DataContext } from "../context/DataContext";

import styles from '../styles/Styles';
import Txt from '../components/misc/Text';
import Btn from '../components/misc/Button';
import ComboBox from '../components/misc/Combobox';

import formReducer  from '../controllers/formReducer';

///// STATELESS COMPONENT /////

//IMPORTANT: PENDING TO ADD TYPES
const Form = ({visible, setVisible, client } : any) => {
    const { submitRegister, register } = React.useContext(DataContext)

    const {
        addSaks,
        technology,
        saks,
        humidity,
        location,
        imperfection,
        QQ,
        TARA,
        TotalQQ,        
        addTechnology,
        addHumidity,
        addLocation,
        addImperfection,
        addQQ,
        clearForm,
    } = formReducer();  

    return (
        <Modal visible={visible} animationType='slide' onRequestClose={setVisible}>
            <View style={[styles.containerCenter]}>
                <Txt
                    value={"Agregar nuevo registro a " + client.name}
                    format={"h2"}
                    alignment="center" 
                    style={styles.marginBottom}
                />
                <ComboBox
                    listItems = {["Tech 1", 'Tech 2']}
                    value={technology}
                    setValue={addTechnology}
                />
                <TextInput
                    label="Cantidad de sacos"
                    value= {saks.toString()}
                    onChangeText={text => addSaks(text)}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <TextInput
                    label="humidity"
                    value= {humidity.toString()}
                    onChangeText={text => addHumidity(text)}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <TextInput
                    label="location"
                    value= {location.toString()}
                    onChangeText={text => addLocation(text)}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <TextInput
                    label="imperfection"
                    value= {imperfection.toString()}
                    onChangeText={text => addImperfection(text)}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <TextInput
                    label="QQ"
                    value= {QQ.toString()}
                    onChangeText={text => addQQ(text)}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <TextInput
                    label="TARA"
                    value= {(saks * 0.005).toString()}
                    disabled={true}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <TextInput
                    label="TotalQQ"
                    value= {(QQ - (QQ * 0.005)).toString()}
                    disabled={true}
                    style={styles.marginBottom}
                    keyboardType='numeric'
                />
                <Btn
                    value="Guardar"
                    onPress={()=>{
                        submitRegister({
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
                            clearForm
                        })
                    }}
                />
            </View>
        </Modal>
    );
};

export default Form;