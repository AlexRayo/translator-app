import React from "react";
import { View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import styles from "../../styles/Styles";
import Txt from '../misc/Text';

//
const Cb = ({ value, setValue, cbName, disabled }:any) => {

    return (
        <View style={[styles.checkboxContainer, styles.my2]}>
            <CheckBox
                value={value}
                onValueChange={setValue}
                style={styles.checkbox}
                disabled={disabled}
            />
            <Txt
                value={cbName}
                onPress={() => setValue(disabled == false ? !value : true)}
            />
        </View>
    )
}
export default Cb;