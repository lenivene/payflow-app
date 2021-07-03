import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

// Screens
import { SignInScreen } from '../screens/SignIn';
import { HomeScreen } from '../screens/Home';


export const AuthRoutes: React.FC = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  )
}