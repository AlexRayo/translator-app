/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
    useState
} from 'react';

import {
    View,
    NativeModules,
    SafeAreaView,
} from 'react-native';

import Styles from "../styles/Styles"

import {
    Text,
    Button,
    TextInput,
} from 'react-native-paper';


const App = () => {
    const { TranslatorModule} = NativeModules;
    const [textToEnglish, setTextToEnglish] = useState("")

    const onChangeText = (text: string) => {
        TranslatorModule.toEnglish(text)
            .then((res: string) => {
                setTextToEnglish(res)
            })
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Button
                mode="outlined"
                onPress={() => {
                    TranslatorModule.checkDownloadedPackages()
                }}
                style={Styles.my1}
            >
                Descargar paquete de idiomas
            </Button>
            <TextInput
                label={"Traduce a inglés"}
                style={Styles.mb1}
                onChangeText={(iText) => onChangeText(iText)}
            />

            <Text
                style={[Styles.textCenter, Styles.textBold, Styles.textMD]}
            >
                {textToEnglish}
            </Text>

            {
                textToEnglish.length > 0 ?
                    <View>

                        <Button
                            mode="contained"
                            onPress={() => {
                                TranslatorModule.tts(textToEnglish)
                            }}
                            style={[Styles.my1]}
                        >
                            Escuchar traducción
                        </Button>
                    </View>
                    : null
            }
        </SafeAreaView>
    );
};



export default App;
