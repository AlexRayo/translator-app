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
    NativeModules,
    SafeAreaView,
} from 'react-native';

import {
    Button,
    TextInput,
} from 'react-native-paper';




const App = () => {
    const { TranslatorModule, TextToSpeechModule: tts } = NativeModules;
    const [text, setText] = useState("")

    const onChangeText = (iText: string) => {

    }
    


    return (
        <SafeAreaView>
            <Button
                mode="outlined"
                onPress={() => {
                    TranslatorModule.checkDownloadedPackages()
                }}
            >
                Download packages
            </Button>
            <TextInput
                onChangeText={(iText) => console.log(iText)}
                defaultValue={text}
            />
        </SafeAreaView>
    );
};



export default App;
