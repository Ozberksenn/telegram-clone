import React, {useEffect, useState} from 'react';
import {UserProvider} from './Context/UserContext';
import ThemeProvider from './Provider/ThemeProvider';
import {MessageProvider} from './Context/MessageContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import Login from './Screens/Login/Login';

import Contact from './Screens/Main/Contact/Contact';
import Messages from './Screens/Main/Messages/Messages';

import Chat from './Screens/Main/Chat/Chat';

import Settings from './Screens/Main/Settings/Settings';
import Theme from './Screens/Main/Settings/Theme/Theme';
import EditProfile from './Screens/Main/Settings/EditProfile/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Contact') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'message-circle' : 'message-circle';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }
          return <Icon name={iconName} size={size} style={{color: '#000'}} />;
        },
        tabBarActiveTintColor: 'black',
        headerShown: false,
      })}>
      <Tab.Screen name="Contact" component={Contact}></Tab.Screen>
      <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
      <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  const [_user, set_User] = useState();
  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const _user = userData ? JSON.parse(userData) : null;
    set_User(_user);
  };
  
 useEffect(() => {
  getUser()
  }, [])


  return (
    <NavigationContainer>
      <ThemeProvider>
        <UserProvider>
          <MessageProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              {!_user && (
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
              )}
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Theme" component={Theme} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
          </MessageProvider>
        </UserProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
