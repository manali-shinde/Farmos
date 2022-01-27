// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import CustomSidebarMenu from './Components/CustomSidebarMenu';

import TabNavigator from '../navigation/TabNavigator'
import {settingScreenStack} from '../navigation/StackNavigator'
import Icon from 'react-native-vector-icons/Ionicons';  



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false,
          activeTintColor: '#fff',
          color: '#fff',
          itemStyle: {marginVertical: 5, color: 'white'},
          labelStyle: {
            color: '#ffff',
          },
      }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home', 
        drawerIcon: (({focused}) => <Icon name="home-outline" size={25} color="#fff" />)
      }}
        
        component={TabNavigator}

      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Settings', color:'#ffff',
        drawerIcon: (({focused}) => <Icon name="settings-outline" size={25} color="#fff" />)
      }}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  
  );
};

export default DrawerNavigatorRoutes;