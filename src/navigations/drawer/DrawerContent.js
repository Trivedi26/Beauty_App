import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { MainNavigatorstyle } from '../../assets/css/MainNavigatorstyle';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Image as ImageR } from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import AD from 'react-native-vector-icons/AntDesign';
import FA from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../NavigationDrw/NavigationService';

export default function DrawerContent(props) {

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...MainNavigatorstyle.DrawerContentSView,
        backgroundColor: themecolor.THEMECOLOR1,
        borderColor: themecolor.BOXBORDERCOLOR1,
      }}>
      <View style={MainNavigatorstyle.userinfo1}>
        <View style={{ ...MainNavigatorstyle.ImageRView }}>
          <ImageR
            style={{ ...MainNavigatorstyle.userimg }}
            source={require('../../assets/images/logo.webp')}
          />
        </View>

        <View style={{ marginVertical: 2 }} />

        <View
          style={{
            ...MainNavigatorstyle.Borderline,
            borderWidth: 1,
            borderColor: themecolor.BOXBORDERCOLOR1,
          }}
        />
        <View style={{ marginVertical: 7 }} />
          <TouchableOpacity
            onPress={() =>navigate('Dashboard')}
            style={MainNavigatorstyle.viewstyle1}>
            <AD name="home" size={20} color={themecolor.BACKICON} />
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.TXTWHITE,
              }}>
              Home
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() =>navigate('Profile')}
            style={MainNavigatorstyle.viewstyle1}>
            <FA name="user-o" size={18} color={themecolor.BACKICON} />
            <Text
              allowFontScaling={false}
              style={{
                ...MainNavigatorstyle.labelstylecss,
                color: themecolor.TXTWHITE,
              }}>
              Profile
            </Text>
          </TouchableOpacity>

        <View
          style={{
            ...MainNavigatorstyle.Borderline,
            borderWidth: 1,
            borderColor: themecolor.BOXBORDERCOLOR1,
          }}
        />
        <View style={{ marginVertical: 7 }} />

        <TouchableOpacity
          onPress={() =>console.log('blog')}
          style={MainNavigatorstyle.viewstyle}>
          <Text
            allowFontScaling={false}
            style={{
              ...MainNavigatorstyle.labelstylecss,
              color: themecolor.BACKICON,
            }}>
            Blog
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            console.log('about us')
          }
          style={MainNavigatorstyle.viewstyle}>
          <Text
            allowFontScaling={false}
            style={{
              ...MainNavigatorstyle.labelstylecss,
              color: themecolor.BACKICON,
            }}>
            About us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            console.log('FAQ')
          }
          style={MainNavigatorstyle.viewstyle}>
          <Text
            allowFontScaling={false}
            style={{
              ...MainNavigatorstyle.labelstylecss,
              color: themecolor.BACKICON,
            }}>
            FAQ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            console.log('Terms and Conditions')
          }
          style={MainNavigatorstyle.viewstyle}>
          <Text
            allowFontScaling={false}
            style={{
              ...MainNavigatorstyle.labelstylecss,
              color: themecolor.BACKICON,
            }}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            console.log('Privacy Policy')
          }
          style={MainNavigatorstyle.viewstyle}>
          <Text
            allowFontScaling={false}
            style={{
              ...MainNavigatorstyle.labelstylecss,
              color: themecolor.BACKICON,
            }}>
            Privacy policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            console.log('Return Policy')
          }
          style={MainNavigatorstyle.viewstyle}>
          <Text
            allowFontScaling={false}
            style={{
              ...MainNavigatorstyle.labelstylecss,
              color: themecolor.BACKICON,
            }}>
            Return policy
          </Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 7 }} />

        <View style={MainNavigatorstyle.view2}>
          <View
            style={{
              ...MainNavigatorstyle.Borderline,
              borderWidth: 1,
              borderColor: themecolor.BOXBORDERCOLOR1,
            }}
          />
          <View style={{ marginVertical: 3 }} />
          <Text allowFontScaling={false} style={{ ...MainNavigatorstyle.view2txt }}>App Version 1.0</Text>
          <View style={{ marginVertical: 3 }} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
