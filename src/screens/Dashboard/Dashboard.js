import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import { DashboardStyle } from '../../assets/css/DashboardCss/DashboardStyle';
import { FontFamily } from '../../assets/fonts/FontFamily';
import { SelectFlatList } from '../../components/shared/FlatList/SelectFlatList';
import { ProductDataList } from '../../components/shared/FlatList/ProductDataList';
import { MakeupData,SkinCareData } from '../../components/shared/Data/ProductData';

const {width, height} = Dimensions.get('screen');

export const Dashboard=(props)=>{
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor()

  const [data, setData] = useState(MakeupData);

  const handleOnChange = (item) => {
    if (item == 'Makeup') {
      setData(MakeupData);
    }
    if (item == 'Skin Care') {
      setData(SkinCareData);
    }
  };

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
        style={{...DashboardStyle.imagebackground,backgroundColor:themecolor.LOGINTHEMECOLOR1}}>
        
           <View
          style={{
            flex: 1,
          }}>
       
  <View style={{...DashboardStyle.header, marginTop: StatusBar.currentHeight + 5,}}>
<Text  allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif}}>
  Hi,aishwarya!
</Text>
<MaterialCommunityIcons name="menu"
 color={themecolor.TXTWHITE}
 size={30}
/>
  </View>
  <View style={{...DashboardStyle.heading,}}>
<Text  allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:24,fontFamily:FontFamily.serif}}>
Beauty starts here,
</Text>
  </View>
 
 <View style={{height:height*0.1,width:width}}>
<SelectFlatList onChange={(value) => handleOnChange(value)} />
</View>
<ScrollView showsVerticalScrollIndicator={false}>
  <View style={{...DashboardStyle.heading,}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:24,fontFamily:FontFamily.serif}}>
Weekly top 4,
</Text>
  </View>
  <View style={{...DashboardStyle.heading,}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif}}>
Perfect-for-you based on your goals!
</Text>
  </View>
  <View style={{width:width,alignItems:'center'}}>
<ProductDataList data={data}/>
  </View>
  <View
        style={{
          ...DashboardStyle.card,
          backgroundColor: themecolor.BOXBORDERCOLORM,
          borderColor:themecolor.TXTWHITE,
        }}
      >
      <View style={{height:'30%'}}>
         <Text
              allowFontScaling={false}
              style={{ ...DashboardStyle.txtHead, color: themecolor.TXTWHITE }}
              numberOfLines={2}>
             say goodbye to guesswork
            </Text>
            </View>
            <View style={{...DashboardStyle.flexDR,justifyContent:'space-around',height:'70%'}}>
            <View style={{width:'55%',height:'100%',flexDirection:'column'}}>
            <View style={{height:'70%'}}>
            <Text
              allowFontScaling={false}
              style={{ ...DashboardStyle.txt2, color: themecolor.TXTWHITE }}>
             Want even more smudgtastic matches? Tap the button below to discover!
            </Text>
            </View>
            <View style={{height:'30%'}}>
        <TouchableOpacity 
        activeOpacity={0.8}
              onPress={() =>console.log('discover')}
              style={{
                padding: 10,
                borderRadius:25,
                backgroundColor:themecolor.TXTWHITE,
                paddingLeft:20,
                paddingRight:20,
                width:'70%',
                alignItems:'center'
              }}>
          <Text
              allowFontScaling={false}
              style={{ ...DashboardStyle.txt2, color:themecolor.TXTWHITE1 }}>
              Discover
            </Text>
                </TouchableOpacity>

            </View>
            </View>
            <View style={{height:'100%',width:'45%'}}>
              <Image
                source={require('../../assets/images/sparkle.png')}
                style={DashboardStyle.imageS}
                resizeMode='contain'
              />
            </View>
            </View>
      </View>
  </ScrollView>
     </View>
     </ImageBackground>
     
    
    </>
  );
}
