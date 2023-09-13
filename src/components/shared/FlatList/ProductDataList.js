import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  Alert
} from 'react-native';
import { DashboardStyle } from '../../../assets/css/DashboardCss/DashboardStyle';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MUI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { FontFamily } from '../../../assets/fonts/FontFamily';

const { width, height } = Dimensions.get('screen');

function ProductDataFlateList({ item, themecolor }) {
  const navigation = useNavigation();
  const toast = useToast();
  const [showWishListed, setShowWishListed] = useState(0);
  const [show,setShow]=useState(false)
  const [text,setText]=useState(false)

  const handleWishListed = async (any) => {
        if(any=='add'){
        setShowWishListed(1);
        toast.show("Item Added to Wishlist!", {
          type: 'success',
          placement: 'bottom',
          duration: 3000,
          offset: 30,
          animationType: 'slide-in',
        });
        }else{
          setShowWishListed(0);
          toast.show("Item removed from wishlist!", {
            type: 'success',
            placement: 'bottom',
            duration: 3000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
  };

  const handleShow=async()=>{
    if(show)
    {
      setShow(false)
    }
    else{
      setShow(true)
    }
  }
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
          ...DashboardStyle.datalistView,
          backgroundColor: themecolor.BOXBORDERCOLORM,
          borderColor:themecolor.TXTWHITE
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              productId: item.product_id,
              title: item.title,
            })
          }
          style={{ ...DashboardStyle.innerImage,borderColor:themecolor.TXTWHITE }}>
          <Image
            source={item.icon}
            style={{...DashboardStyle.productImage}}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={{width:width*0.33,height:height*0.03,backgroundColor:themecolor.TXTWHITE,position:'absolute',alignSelf:'center',marginTop:-10,borderRadius:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
<Image source={item.image} resizeMode='contain' style={{width:13,height:13,marginRight:2}}/>
        <Text allowFontScaling={false} style={{color:themecolor.LOGINTHEMECOLOR1,fontSize:14,fontFamily:FontFamily.serif}}>
{item.remark}
</Text>
</View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              productId: item.product_id,
              title: item.title,
            })
          }
          style={{
            ...DashboardStyle.inner,
          }}>
          <View>
            <Text
              allowFontScaling={false}
              style={{ ...DashboardStyle.txt, color: themecolor.TXTWHITE }}
              numberOfLines={2}>
              {item.title}
            </Text>
            <Text
              allowFontScaling={false}
              style={{ ...DashboardStyle.txt1, color: themecolor.TXTGREYS }}
              numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>

<View style={{height:'22%',width:'100%',justifyContent:'space-around',alignItems:'flex-end',flexDirection:'row', paddingLeft:8,paddingRight:8,}}>
   
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
                paddingLeft:15,
                paddingRight:15,
              }}>
          <Text
              allowFontScaling={false}
              style={{ ...DashboardStyle.txt2, color: text?themecolor.TXTWHITE1:themecolor.TXTWHITE }}
              numberOfLines={2}>
              View
            </Text>
                </TouchableOpacity>
        </View>

        <View
          style={{
            ...DashboardStyle.wishlistIconButton,
          }}>
          {showWishListed == 1 ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleWishListed('remove')}
              style={{
                padding: 2
              }}>
              <FontAwesome name="heart" size={26} color={themecolor.TEXTRED} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => handleWishListed('add')}
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
        <View style={{padding:5}}>
        <TouchableOpacity 
        activeOpacity={0.8}
              onPress={() => handleShow()}
              style={{
                padding: 2,
                borderRadius:25,
                borderColor:show?themecolor.TXTWHITE:themecolor.TXTGREY,
                borderWidth:1.5,
                backgroundColor:show?themecolor.TXTWHITE:'transparent'
              }}>
          <MUI name="dots-horizontal" size={23}
                color={show?themecolor.TXTWHITE1:themecolor.TXTWHITE} />
                </TouchableOpacity>
        </View>
       </View>
      </View>
    </>
  );
}

export function ProductDataList(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return (
    <>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <ProductDataFlateList item={item} themecolor={themecolor} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
      <View style={{ marginVertical: 15 }} />
    </>
  );
}
