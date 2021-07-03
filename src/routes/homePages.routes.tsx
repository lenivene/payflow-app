import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

// Pages
import { StartHomePage } from '../screens/Home/pages/Start';
import { ExtractsHomePage } from '../screens/Home/pages/Extracts';

// Components
import { HomeTabBar } from '../components/HomeTabBar';

type Props = {
  initialRouteName?: string;
}

export const HomePageRoutes: React.FC<Props> = ({ initialRouteName = "StartHome" }) => {
  return (
    <Navigator
      initialRouteName={initialRouteName}
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      tabBar={HomeTabBar}
    >
      <Screen name='StartHome' component={StartHomePage} />
      <Screen name='ExtractsHome' component={ExtractsHomePage} />
    </Navigator>
  );
}