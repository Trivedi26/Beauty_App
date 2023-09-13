import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {Colors} from '../../assets/config/Colors';
import {FontFamily} from '../../assets/fonts/FontFamily';
import {MyThemeClass} from '../../components/Theme/ThemeDarkLightColor';
import {MainNavigatorstyle} from '../../assets/css/MainNavigatorstyle';
import { Dashboard } from '../../screens/Dashboard/Dashboard';
import FA from 'react-native-vector-icons/FontAwesome';
import { Categories } from '../../screens/Categories/Categories';
import { Profile } from '../../screens/Profile/Profile';
import AD from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

export default function BottomNavigationStack() {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();
   
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 51,
          backgroundColor: themecolor.THEMECOLOR1,
          borderColor: themecolor.BOXBORDERCOLOR,
          keyboardHidesTabBar: true,
          labelStyle: MainNavigatorstyle.tab1,
          style: MainNavigatorstyle.tab2,
          animationEnabled: true,
          inactiveTintColor: Colors.gray,
          activeTintColor: themecolor.HEADERTHEMECOLOR,
          showLabel: false,
          fontFamily: FontFamily.PopinsMedium,
          headerShown: false,
          
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: {bottom: -5},
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <AD name="home" color={themecolor.BACKICON} size={24} />
                <View
                  style={{
                    ...MainNavigatorstyle.tabbarbottomborder,
                    backgroundColor: themecolor.BACKICON,
                  }}
                />
              </>
            ) : (
              <>
                <AD name="home" size={24} color={themecolor.TXTGREY} />
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: {bottom: -5},
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <AD name="appstore-o" color={themecolor.BACKICON} size={22} />
                <View
                  style={{
                    ...MainNavigatorstyle.tabbarbottomborder,
                    backgroundColor: themecolor.BACKICON,
                  }}
                />
              </>
            ) : (
              <>
                <AD name="appstore-o" size={22} color={themecolor.TXTGREY} />
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          MyTransition,
          tabBarLabel: ' ',
          tabBarLabelStyle: {bottom: -5},
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <FA name="user-o" color={themecolor.BACKICON} size={22} />
                <View
                  style={{
                    ...MainNavigatorstyle.tabbarbottomborder,
                    backgroundColor: themecolor.BACKICON,
                  }}
                />
              </>
            ) : (
              <>
                <FA name="user-o" size={22} color={themecolor.TXTGREY} />
              </>
            ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
