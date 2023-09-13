import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LoginStyle} from '../../assets/css/LoginCss/LoginStyle';
import LinearGradient from 'react-native-linear-gradient';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');

export const Login=(props)=>{
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor()
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={mode=='dark'?'light-content':'dark-content'}
      />

        <ImageBackground
        resizeMode="cover"
        source={
          mode=="dark"? require('../../assets/images/blackbg.webp'):require('../../assets/images/background.webp')
        }
        style={{...LoginStyle.imagebackground,backgroundColor:themecolor.LOGINTHEMECOLOR1}}>
        
           <View
          style={{
            flex: 1,
          }}>
       
     <View style={{...LoginStyle.container,  backgroundColor:themecolor.bgColor,}}>
     <View style={LoginStyle.loginContainer}>
            <Text style={{fontSize:48,color:themecolor.TXTWHITE}}>Login</Text>
          </View>
     <View
              style={{
                backgroundColor: 'white',
                borderColor: '#00B5E2',
                ...LoginStyle.textInputView,
              }}>
                <TextInput
                  placeholderTextColor='grey'
                  placeholder="Enter email id"
                  keyboardType="email-address"
                  style={{
                    color: 'black',
                    ...LoginStyle.textInput,
                  }}
                />
             
            </View>

            <View style={{...LoginStyle.MGv5}} />

            <View
              style={{
                ...LoginStyle.textInputView,
                backgroundColor: 'white',
                borderColor: '#00B5E2',
              }}>
            
                <TextInput
                  placeholderTextColor={'grey'}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={isPasswordSecure}
                  enablesReturnKeyAutomatically
                  style={{
                    color: 'black',
                    ...LoginStyle.textInputpswd,
                  }}
                />
          
              <View style={{...LoginStyle.eyeButton}}>
                <MaterialCommunityIcons
                  onPress={() => {
                    isPasswordSecure
                      ? setIsPasswordSecure(false)
                      : setIsPasswordSecure(true);
                  }}
                  name={isPasswordSecure ? 'eye-off' : 'eye'}
                  size={20}
                  color='#00B5E2'
                />
              </View>
            </View>

            <View style={{...LoginStyle.MGv15,}}>
            <View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Dashboard')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0.8, y: 0}}
          colors={['#0083A3','#00B5E2']}
          style={LoginStyle.bigButton}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'PermanentMarker_400Regular',
              fontSize: 20,
            }}>
            Login
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
            </View>
          
     </View>
     </View>
     </ImageBackground>
     
    
    </>
  );
}
