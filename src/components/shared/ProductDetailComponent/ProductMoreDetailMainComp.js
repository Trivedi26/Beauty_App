
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import Carousel from 'react-native-banner-carousel';
import { ProductDetailStyle as styles } from '../../../assets/css/ProductDetailCss/ProductDetailStyle';
import { useToast } from 'react-native-toast-notifications';

const { width, height } = Dimensions.get('screen');

export default function ProductMoreDetailMainComp(props) {

  const toast = useToast();

  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [allImages, setAllImages] = React.useState(props.productDetail[0].allImage);
  const [largeImage, setLargeImage] = React.useState(0);

  function renderimage(image, index) {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          props.setImage(image), props.setModalVisible(true);
        }}
        style={{ ...styles.datalistView,
        backgroundColor: themecolor.BOXBORDERCOLORM,
        borderColor: themecolor.TXTBLACK, }}
      >
        <View key={index}>
          <Image
            style={{ width: width * 0.75, height: height * 0.3 }}
            source={image}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
 <View style={{ ...styles.MrT5 }} />
      {allImages.length > 0 ?
        <View style={{ ...styles.innerViewMain }}>
          <Carousel
            autoplay={false}
            index={largeImage}
            pageIndicatorStyle={{backgroundColor:themecolor.BOXBORDERCOLORM}}
            activePageIndicatorStyle={{backgroundColor:themecolor.TXTWHITE}}
          >
            {allImages.map((image, index) => renderimage(image, index))}
          </Carousel>
        </View>
        : <>
        </>
      }

      <View style={{ ...styles.MrT5 }} />

    </>

  )
}