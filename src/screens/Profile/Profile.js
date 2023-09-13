import { View, Text,ImageBackground,StatusBar,Dimensions,TouchableOpacity,Image,BackHandler } from 'react-native';
import React,{useState} from 'react';
import IO from 'react-native-vector-icons/Ionicons';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import { ProfileStyle } from '../../assets/css/ProfileCss/Profile';
import { data } from '../../components/shared/Data/ProfileData';
import { ProfileDataList } from '../../components/shared/FlatList/ProfileDataFlatList';

const { width, height } = Dimensions.get('screen');


export const Profile =(props) => {

  function handleBackButtonClick() {
    props.navigation.goBack();
    return true;
  }

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

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
    style={{...ProfileStyle.imagebackground,backgroundColor:themecolor.LOGINTHEMECOLOR1}}>
       <View style={{...ProfileStyle.header, marginTop: StatusBar.currentHeight + 5,}}>

<View style={{width:'100%',flexDirection:'row'}}>
<View
          style={{
            ...ProfileStyle.wishlistIconButton,
          }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>handleBackButtonClick()}
              style={{
                padding: 2
              }}>
              <IO name="chevron-back" size={30} color={themecolor.TXTWHITE} />
            </TouchableOpacity>
           
        </View>
        <View style={{padding:7}}>
        <Text  allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:24,fontFamily:FontFamily.serif}}>
Profile
</Text>
</View>
</View>
  </View>

  <View
                  style={{
                    ...ProfileStyle.datalistView,
                    backgroundColor: themecolor.BOXBORDERCOLORM,
                    borderColor: themecolor.BOXBORDERCOLOR1,
                  }}>
                  <View
                    style={{
                      ...ProfileStyle.profileDataView,
                    }}>
                    <View>
                      <Image
                        style={{
                          ...ProfileStyle.avater,
                          borderColor: themecolor.TXTWHITE
                        }}
                        source={require('../../assets/images/profile.jpg')}
                      />
                    </View>
                    <View
                      style={{
                        ...ProfileStyle.welcomView,
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{
                          ...ProfileStyle.WellText,
                          color: themecolor.TXTWHITE,
                        }}>
                        Welcome Aishwarya!
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    ...ProfileStyle.datalistView,
                    backgroundColor: themecolor.BOXBORDERCOLORM,
                    borderColor: themecolor.BOXBORDERCOLOR1,
                  }}>
                  <ProfileDataList data={data} />
                </View>
  </ImageBackground>
  </>
  )
}