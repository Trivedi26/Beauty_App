import { View, Text,ImageBackground,StatusBar,Dimensions,TouchableOpacity,ScrollView,BackHandler, Image } from 'react-native';
import React,{useState} from 'react';
import { ProductDetailStyle } from '../../assets/css/ProductDetailCss/ProductDetailStyle';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import AN from 'react-native-vector-icons/AntDesign';
import { useToast } from 'react-native-toast-notifications';
import FE from 'react-native-vector-icons/Feather';
import IO from 'react-native-vector-icons/Ionicons';
import ProductMoreDetailMainComp from '../../components/shared/ProductDetailComponent/ProductMoreDetailMainComp';
import { ProductDetailData } from '../../components/shared/Data/ProductDetailData';
import ImageZoomerModel from '../../components/shared/Model/ImageZoomerModel';
import { FontFamily } from '../../assets/fonts/FontFamily';
import FO from "react-native-vector-icons/Fontisto";
import { VideoFlatList,CardFlatList } from '../../components/shared/FlatList/VideoFlatList';
import StarRating from 'react-native-star-rating';

const {width, height} = Dimensions.get('screen');

export default function ProductDetail(props) {
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

    const toast = useToast();
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor()

    const [showWishListed, setShowWishListed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState('');
    

    const handleWishListed = async () => {
        if(showWishListed){
        setShowWishListed(false);
        toast.show("Item removed from wishlist!", {
          type: 'success',
          placement: 'bottom',
          duration: 3000,
          offset: 30,
          animationType: 'slide-in',
        });
        }else{
          setShowWishListed(true);
          toast.show("Item Added to Wishlist!", {
            type: 'success',
            placement: 'bottom',
            duration: 3000,
            offset: 30,
            animationType: 'slide-in',
          });
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
            style={{...ProductDetailStyle.imagebackground,backgroundColor:themecolor.LOGINTHEMECOLOR1}}>
            
            <View style={{...ProductDetailStyle.header, marginTop: StatusBar.currentHeight + 5,}}>

<View style={{width:'70%'}}>
<View
          style={{
            ...ProductDetailStyle.wishlistIconButton,
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
</View>
<View style={{width:'30%',flexDirection:'row',justifyContent:'space-around'}}>
<View
          style={{
            ...ProductDetailStyle.wishlistIconButton,
          }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleWishListed()}
              style={{
                padding: 2
              }}>
              <FE name="share-2" size={26} color={themecolor.TXTWHITE} />
            </TouchableOpacity>
           
        </View>
<View
          style={{
            ...ProductDetailStyle.wishlistIconButton,
          }}>
          {showWishListed?
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleWishListed()}
              style={{
                padding: 2
              }}>
              <AN name="heart" size={26} color={themecolor.TEXTRED} />
            </TouchableOpacity>
            : (
            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => handleWishListed()}
              style={{
                padding: 2
              }}>
              <AN
                name="hearto"
                size={26}
                color={themecolor.TXTWHITE}
              />
            </TouchableOpacity>
          )}
        </View>
</View>
  </View>

  <ScrollView showsVerticalScrollIndicator={false}>

<ProductMoreDetailMainComp productDetail={ProductDetailData} setImage={setImage} setModalVisible={setModalVisible} />

<View style={{...ProductDetailStyle.head}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTGREYS,fontSize:16,fontFamily:FontFamily.serif}}>
m.a.c. cosmetics
</Text>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:20,fontFamily:FontFamily.serif,marginTop:10}}>
m.a.c. cosmetics professional makeup
</Text>
</View>

<View style={{...ProductDetailStyle.btnCon}}>
<TouchableOpacity 
        activeOpacity={0.8}
              onPress={() =>console.log('discover')}
              style={{...ProductDetailStyle.btn,
                backgroundColor:themecolor.TXTWHITE1,
                borderWidth:1,
                borderColor:themecolor.TXTWHITE
              }}>
          <Text
              allowFontScaling={false}
              style={{ ...ProductDetailStyle.txt2, color:themecolor.TXTWHITE }}>
              View Brand
            </Text>
                </TouchableOpacity>
<TouchableOpacity 
        activeOpacity={0.8}
              onPress={() =>console.log('discover')}
              style={{
                ...ProductDetailStyle.btn,
                backgroundColor:themecolor.TXTWHITE,
              }}>
          <Text
              allowFontScaling={false}
              style={{ ...ProductDetailStyle.txt2, color:themecolor.TXTWHITE1 }}>
              Add to Kit
            </Text>
                </TouchableOpacity>
</View>

<View style={{...ProductDetailStyle.head1}}>

<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:24,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
Key Benefits
</Text>
</View>

<View
        style={{
          ...ProductDetailStyle.card,
          backgroundColor: themecolor.BOXBORDERCOLORM,
          borderColor:themecolor.TXTWHITE,
        }}
      >
      <View style={{flexDirection:'row',marginVertical:10}}>
      <View style={{...ProductDetailStyle.circ,borderColor:themecolor.TXTGREY}}> 
      <Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
17
</Text>
      </View>
      <View style={{marginLeft:20}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
users &#x003C;3 this
</Text>
 <Text allowFontScaling={false} style={{color:themecolor.TXTGREYS,fontSize:16,fontFamily:FontFamily.serif}}>
and we think you will too
</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',marginVertical:10}}>
      <View style={{...ProductDetailStyle.circ,borderColor:themecolor.TXTGREY}}> 
      <Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
8
</Text>
      </View>
      <View style={{marginLeft:20}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
experts recommend this
</Text>
 <Text allowFontScaling={false} style={{color:themecolor.TXTGREYS,fontSize:16,fontFamily:FontFamily.serif}}>
for your face profile
</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',marginVertical:10}}>
      <View style={{...ProductDetailStyle.circ,borderColor:themecolor.TXTGREY}}> 
     <FO name="blood-drop" size={20} color={themecolor.TXTWHITE}/>
      </View>
      <View style={{marginLeft:20}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
waterproof
</Text>
 <Text allowFontScaling={false} style={{color:themecolor.TXTGREYS,fontSize:16,fontFamily:FontFamily.serif}}>
splash away, makeup stays afe
</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',marginVertical:10}}>
      <View style={{...ProductDetailStyle.circ,borderColor:themecolor.TXTGREY}}> 
      <FO name="female" size={20} color={themecolor.TXTWHITE}/>
      </View>
      <View style={{marginLeft:20}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:16,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
moisturising
</Text>
 <Text allowFontScaling={false} style={{color:themecolor.TXTGREYS,fontSize:16,fontFamily:FontFamily.serif}}>
bye-bye dryness!
</Text>
      </View>
      </View>
      <View style={{marginVertical:10}}>
<Text allowFontScaling={false} style={{color:themecolor.TXTGREYS,fontSize:16,fontFamily:FontFamily.serif}}>
Product recommendations are based on your skin profile. To know more aboutmy process, data privacy and other things read our terms and conditions. To know why this specific product is a match. Tap below
</Text>
      </View>
      </View>

      <View style={{...ProductDetailStyle.head1}}>

<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:24,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
Expert Reviews
</Text>
</View>
<View style={{marginLeft:width*0.05,marginVertical:20}}>
   <VideoFlatList/>
</View>

<View
        style={{
          ...ProductDetailStyle.card,
          backgroundColor: themecolor.BOXBORDERCOLORM,
          borderColor:themecolor.TXTWHITE,
        }}
      >
        <View style={{ width: width * 0.7,alignSelf:'center',marginBottom:20,marginTop:30 }}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={0}
            selectedStar={rating => onStarRatingPress(rating)}
            starSize={36}
            fullStarColor={themecolor.TXTWHITE}
          />
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
              onPress={() =>console.log('discover')}
              style={{
                ...ProductDetailStyle.btn1,
                backgroundColor:themecolor.TXTWHITE,
              }}>
          <Text
              allowFontScaling={false}
              style={{ ...ProductDetailStyle.txt2, color:themecolor.TXTWHITE1 }}>
              Rate this product
            </Text>
                </TouchableOpacity>
      </View>

      <View style={{...ProductDetailStyle.head1}}>

<Text allowFontScaling={false} style={{color:themecolor.TXTWHITE,fontSize:24,fontFamily:FontFamily.serif,fontWeight:'bold'}}>
You may also like
</Text>
</View>

<View style={{marginLeft:width*0.05,marginVertical:10}}>
<CardFlatList/>
      </View>
</ScrollView>
              
  <ImageZoomerModel image={image} modalVisible={modalVisible} setModalVisible={setModalVisible} />
         </ImageBackground>
         
        
        </>
      );
}