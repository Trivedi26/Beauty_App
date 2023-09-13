import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { MyThemeClass } from '../../components/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import { useNavigation} from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: 'Beauty Secret',
    text: 'The Ultimate Natural Beauty Destination',
    image: require('../../assets/images/slide1.png'),
  },
  {
    key: 2,
    title: 'Right Place',
    text: 'Great Skin Can Be Created',
    image: require('../../assets/images/slide2.png'),
  },
  {
    key: 3,
    title: 'Get the product and Shine',
    text: "Easy, Breezy, Beautiful",
    image: require('../../assets/images/slide3.png'),
  },
];



export default function ViewPager(props) {

    const mode = useSelector(state => state.mode);
    const Color = new MyThemeClass(mode).getThemeColor()

    const navigation=useNavigation()

  const renderItem = (data) => {
    return (
      <View style={{...styles.slide,backgroundColor:Color.LOGINTHEMECOLOR}}>
        <ImageBackground source={data.item.image} style={styles.image}>
          <Text allowFontScaling={false} style={styles.title}>{data.item.title}</Text>
          <Text allowFontScaling={false} style={{...styles.text,color:Color.TXTWHITE}}>{data.item.text}</Text>
        </ImageBackground>
      </View>
    );
  };
  const onDone = () => {
    navigation.navigate('Splash');
  };
  const renderNextButton = () => {
    return (
      <View>
        <Text allowFontScaling={false} style={{...styles.next,color:Color.TXTWHITE}}>Next</Text>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View>
        <Text allowFontScaling={false} style={{...styles.done,color:Color.TXTBLACK}}>Done</Text>
      </View>
    );
  };
  
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={mode=='light' ? "dark-content":"light-content"}
        />
        <AppIntroSlider
          renderItem={(item)=>renderItem(item)}
          data={slides}
          onDone={()=>onDone()}
          dotStyle={{backgroundColor:Color.TXTGREY}}
          activeDotStyle={{backgroundColor:Color.TXTBLACK}}
          renderDoneButton={()=>renderDoneButton()}
          renderNextButton={()=>renderNextButton()}
        />
      </View>
    );
  }


  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'flex-end',
      paddingBottom: 100,
    },
    text: {
      // color: Color.graylight,
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      // color: Color.gray,
      textAlign: 'center',
    },
    dots: {
      // backgroundColor: Color.gray,
    },
    activeDots: {
      // backgroundColor: Color.colorPrimary,
    },
    next: {
      fontSize: 14,
      fontWeight: '700',
      // color: Color.gray,
    },
    done: {
      fontSize: 14,
      fontWeight: '700',
      // color: Color.colorPrimaryDark,
    },
  });