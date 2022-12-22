import React from 'react'
import { View, FlatList } from 'react-native'
import { List } from 'react-native-paper'

import styles from '../styles/Styles'

import { DataContext } from "../context/DataContext";

import Txt from '../components/misc/Text';

export default function Register() {
    const {register}= React.useContext(DataContext)

  return (
    <View style={[styles.container, styles.bgWhite]}>
        <View>
            <Txt
                value={"Register"}
                format={"h2"}
                alignment= {"center"}
                style={styles.my}
            />           
        </View>

        <FlatList
            keyExtractor={(item) => item.id}
            data={register?.slice(0).reverse()}
            renderItem={({ item }) => (
            <List.Item
                title={`${item.client.name}`}
                description={`Hora: ${item.time}, Technology: ${item.technology},`}
                style={[styles.bgLight, styles.my2, styles.bgLight]}
                titleStyle={[styles.uppercase, styles.textBold]}
            /> )}
        />        
        
    </View>
  )
}
