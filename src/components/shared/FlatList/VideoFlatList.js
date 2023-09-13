import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, Dimensions,ImageBackground,TouchableOpacity,Image } from 'react-native';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import { VideoData } from '../Data/VideoData';
import AN from 'react-native-vector-icons/AntDesign';
import { FontFamily } from '../../../assets/fonts/FontFamily';
import { ProductDetailStyle } from '../../../assets/css/ProductDetailCss/ProductDetailStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('screen');

function VideoList({item,themecolor}) {
  
  return (
    <>
         <ImageBackground source={require('../../../assets/images/lotionA.jpeg')} 
    resizeMode='stretch'
    imageStyle={{ borderRadius: 20}}
    style={{width:width*0.36,height:height*0.3,padding:20,marginRight:20}}>
<View style={{alignSelf:'flex-start',flexDirection:'row',height:'13%',alignItems:'center'}}>
<AN name="caretright" size={20} color={"#fff"}/>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:20,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
30s
</Text>
</View>
<View style={{height:'87%',justifyContent:'flex-end'}}>
<Text allowFontScaling={false} style={{color:"#fff",fontSize:14,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
This product is best for you
</Text>
</View>
    </ImageBackground>
    </>
  );
}
function CardList({item,themecolor}) {

  const [showWishListed1, setShowWishListed1] = useState(false);
  const [text,setText]=useState(false)

  const handleWishListed1 = async (any) => {
    if(any=='add'){
    setShowWishListed1(1);
    toast.show("Item Added to Wishlist!", {
      type: 'success',
      placement: 'bottom',
      duration: 3000,
      offset: 30,
      animationType: 'slide-in',
    });
    }else{
      setShowWishListed1(0);
      toast.show("Item removed from wishlist!", {
        type: 'success',
        placement: 'bottom',
        duration: 3000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
};

  const handleText=async()=>{

    if(text)
    {
      setText(false)
    }
    else{
      setText(true)
      navigation.navigate('ProductDetail', {
        productId: item.product_id,
        title: item.title,
      })
    }
  }

  
  return (
    <>
        <View
        style={{
          ...ProductDetailStyle.card1,
          backgroundColor: themecolor.BOXBORDERCOLORM,
          borderColor:themecolor.TXTWHITE,
          flexDirection:'row'
        }}
      >
<View style={{width:'60%'}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:14,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
NYKAA
</Text>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:12,fontFamily:FontFamily.serif}}>
Bath & body works pineapple coconut...
</Text>
<View style={{justifyContent:'space-around',alignItems:'flex-end',flexDirection:'row',width:'70%'}}>
   
   <View style={{padding:5}}>
           <TouchableOpacity 
           activeOpacity={0.8}
                 onPress={() => handleText()}
                 style={{
                   padding: 5,
                   borderRadius:25,
                   borderColor:text?themecolor.TXTWHITE:themecolor.TXTGREY,
                   borderWidth:1.5,
                   backgroundColor:text?themecolor.TXTWHITE:'transparent',
                   paddingLeft:10,
                   paddingRight:10,
                 }}>
             <Text
                 allowFontScaling={false}
                 style={{ ...ProductDetailStyle.txt2, color: text?themecolor.TXTWHITE1:themecolor.TXTWHITE }}
                 numberOfLines={2}>
                 View
               </Text>
                   </TouchableOpacity>
           </View>
   
           <View
             style={{
               ...ProductDetailStyle.wishlistIconButton,
             }}>
             {showWishListed1 == 1 ? (
               <TouchableOpacity
                 activeOpacity={0.8}
                 onPress={() => handleWishListed1('remove')}
                 style={{
                   padding: 2
                 }}>
                 <FontAwesome name="heart" size={26} color={themecolor.TEXTRED} />
               </TouchableOpacity>
             ) : (
               <TouchableOpacity
                 activeOpacity={0.1}
                 onPress={() => handleWishListed1('add')}
                 style={{
                   padding: 2
                 }}>
                 <FontAwesome
                   name="heart-o"
                   size={26}
                   color={themecolor.TXTWHITE}
                 />
               </TouchableOpacity>
             )}
           </View>
          </View>
</View>
<View style={{width:'40%',borderColor:text?themecolor.TXTWHITE:themecolor.TXTGREY,
                   borderWidth:1.5,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
<Image source={require('../../../assets/images/makeup1.png')} resizeMode='contain' style={{width:60,height:60}}/>
</View>
      </View>
    </>
  );
}

export function VideoFlatList(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <>
      <FlatList
        data={VideoData}
        renderItem={({ item }) => (
          <VideoList item={item} themecolor={themecolor}/>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </>
  );
}
export function CardFlatList(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <>
      <FlatList
        data={VideoData}
        renderItem={({ item }) => (
          <CardList item={item} themecolor={themecolor}/>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </>
  );
}
