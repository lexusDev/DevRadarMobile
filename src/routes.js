import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    options={{ 
                        title: 'DevRadar',
                        headerTintColor: '#fff', 
                        headerStyle: {
                            backgroundColor: '#7D40E7',
                        },
                    }} 
                    name="Main" 
                    component={Main} 
                />
                <Stack.Screen 
                    options={{ 
                        title: 'Github Profile',
                        headerTintColor: '#fff', 
                        headerStyle: {
                            backgroundColor: '#7D40E7',
                        },
                    }}
                    name="Profile" 
                    component={Profile} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

