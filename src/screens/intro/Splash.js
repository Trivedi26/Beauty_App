import React from 'react';
import {Dimensions, StatusBar, View, StyleSheet,Text} from 'react-native';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import { FontFamily } from '../../assets/fonts/FontFamily';
const {width} = Dimensions.get('window');

export const Splash=(props)=>{

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor()
  
  React.useEffect(()=>
   {
      setTimeout(async () => {
          props.navigation.reset({
            index: 0,
            // routes: [{name: 'ViewPager'}],
            routes: [{name: 'Login'}],
          });
      }, 1000)
   
      return ()=>{
        
      } },[])
  

  return (
    <>
    <StatusBar translucent={true} backgroundColor={'transparent'}    barStyle={mode=='dark'?'light-content':'dark-content'}/>
    <View
      style={{
        ...styles.MainContainer,
        backgroundColor: themecolor.LOGINTHEMECOLOR,
      }}>
      <Text
        style={{
          color:themecolor.TXTWHITE,
          fontSize:40,
          fontFamily:FontFamily.PopinsExtraBold
        }}
      >
      Beauty Secret
</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  
});
