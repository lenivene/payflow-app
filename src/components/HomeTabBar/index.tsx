import React from 'react';

// Assets
import homeIcon from "../../assets/homeIcon.png";
import homeActiveIcon from "../../assets/homeActiveIcon.png";
import addMoreIcon from "../../assets/addMoreIcon.png";
import detailsIcon from "../../assets/detailsIcon.png";
import detailsActiveIcon from "../../assets/detailsActiveIcon.png";

// Components
import {
  Container,
  ContainerIcon,
  GradientBar,
  Icon
} from './styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const icons = {
  home: {
    route: 'StartHome',
    method: {
      simple: homeIcon,
      active: homeActiveIcon,
    }
  },
  addMore: {
    route: null,
    method: {
      simple: addMoreIcon,
      active: addMoreIcon,
    }
  },
  details: {
    route: 'ExtractsHome',
    method: {
      simple: detailsIcon,
      active: detailsActiveIcon,
    }
  },
}

type IconsName = keyof typeof icons;
type Props = BottomTabBarProps;
export const HomeTabBar: React.FC<Props> = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const getRouteName = (iconName: string) => icons[iconName as IconsName]['route'];

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const onPress = (iconName: string, isFocused: boolean) => {
    if(iconName == 'addMore'){
      return null;
    }

    const routeName = getRouteName(iconName);
    const route = state.routes.find(route => route.name == routeName);

    if(route){
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    }
  }

  return (
    <>
      <GradientBar
        start={{x: 0, y: .9}}
        end={{x: 0, y: 0}}
      />
      <Container>
        {Object.keys(icons).map((iconName) => {
          const routeName = getRouteName(iconName);
          const isFocused = state.routeNames[state.index] == routeName;

          return (
            <ContainerIcon
              key={String(iconName)}
              name={iconName}
              onPress={() => onPress(iconName, isFocused)}
            >
              <Icon source={icons[iconName as IconsName]['method']['simple']} />
            </ContainerIcon>
          );
        })}
      </Container>
    </>
  );
}