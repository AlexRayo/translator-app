import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return ( 
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Inicio" component={Home} />
        </Drawer.Navigator>
     );
}
 
export default DrawerNav;