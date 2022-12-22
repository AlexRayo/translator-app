import React from "react";
import styles from '../../styles/Styles';
import { TextInput } from 'react-native-paper';

//This input component works for 3 types: text, password and search
const TxtInput = ({ value, keyboardType, maxLength, label, placeholder, onChangeText, multiline, type, onPressIcon, disabled, style }:any) => {

    //use "isInputPass = {true}" as prop when InputText needs to be password type
    //useState when isInputPass
    const [isSecureEntry, setIsSecureEntry] = React.useState(type === 'password' ? true : false)

    return (
        <TextInput
            style={[styles.marginTop, styles.marginBottom, style]}
            placeholder={placeholder}
            label={label}
            value={value}
            maxLength={maxLength === undefined ? 256 : maxLength}
            secureTextEntry={isSecureEntry}
            keyboardType={keyboardType === undefined ? 'default' : keyboardType}
            multiline={multiline === undefined ? false : multiline}
            onChangeText={onChangeText}
            disabled={disabled}

            right={
                //Add icon or not depending on the input type
                type === 'password' ?
                    <TextInput.Icon
                        name={isSecureEntry ? 'eye' : 'eye-off'}
                        onPress={() => {
                            setIsSecureEntry(!isSecureEntry);
                        }}
                    />
                    :
                    type === 'search' ?
                        <TextInput.Icon
                            name={value !== "" ? 'close' : 'account-search'}
                            onPress={onPressIcon}
                        />
                        : null
            }
        />
    )
}
export default TxtInput;