import { View, Text,ImageBackground,StatusBar,Dimensions,TouchableOpacity,BackHandler } from 'react-native';
import React from 'react';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import { CategoryStyle } from '../../assets/css/CategoryCss/CategoryStyle';
import { CategoryData as data } from '../../components/shared/Data/CategoryData';
import { CategoryDataList } from '../../components/shared/FlatList/CategoryDataList';
import IO from 'react-native-vector-icons/Ionicons';
import { FontFamily } from '../../assets/fonts/FontFamily';

const { width, height } = Dimensions.get('screen');

export const Categories=(props)=> {

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
    style={{...CategoryStyle.imagebackground,backgroundColor:themecolor.LOGINTHEMECOLOR1}}>
       <View style={{...CategoryStyle.header, marginTop: StatusBar.currentHeight + 5,}}>

<View style={{width:'100%',flexDirection:'row'}}>
<View
          style={{
            ...CategoryStyle.wishlistIconButton,
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
  Category
</Text>
</View>
</View>
  </View>
      <View
            style={{
              ...CategoryStyle.container,
            }}>

       
              <CategoryDataList data={data} />

            <View style={{ marginVertical: 50 }} />
          </View>
    </ImageBackground>
    </>
  )
}