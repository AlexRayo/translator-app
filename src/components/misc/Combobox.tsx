import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import styles from "../../styles/Styles";
//
const ComboBox = ({ listItems, value, setValue }:any) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={[styles.bgLight]}>
            <Text style={[styles.marginLeft, styles.pl, styles.marginTop, styles.textBold, styles.textSM]}>{"Cambiar de Gateway"}</Text>
            <List.Accordion
                title={value}
                left={props => <List.Icon {...props} icon="phone" />}
                expanded={expanded}
                style={[styles.bgLight]}
                onPress={handlePress}>
                {
                    listItems?.map((item:any, i:any) => {
                        return <List.Item
                            key={i}
                            title={item}
                            left={props => <List.Icon {...props} icon="phone" />}
                            onPress={() => {
                                setValue(item);
                                setExpanded(!expanded);

                            }} />
                    })
                }
            </List.Accordion>
        </View>
    );
};

export default ComboBox;