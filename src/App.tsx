
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './context/DataContext';

import DrawerNav from './navigation/drawer'

function App() {
    return (
        <DataProvider>
            <NavigationContainer>
                <DrawerNav/>
            </NavigationContainer>
        </DataProvider>
    );
}

export default App;