
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'
import Home from '../../screens/Home';
import Player from '../../screens/Player';


const Drawer = () => {
    const Drawer = createDrawerNavigator()
  return (
   <Drawer.Navigator
   >
         <Drawer.Screen name="Matches" component={Home}    />
         <Drawer.Screen name="test" component={Player}   />


    </Drawer.Navigator>
  )
}

export default Drawer