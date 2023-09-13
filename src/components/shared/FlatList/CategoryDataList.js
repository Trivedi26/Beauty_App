import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { CategoryStyle } from '../../../assets/css/CategoryCss/CategoryStyle';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('screen');

function CategoryDataFlateList({item, themecolor}) {

  const navigation = useNavigation();

  
  return (
      <TouchableOpacity activeOpacity={0.8}
        style={{
          ...CategoryStyle.datalistView,
          backgroundColor: themecolor.BOXBORDERCOLORM,
          borderColor: themecolor.BOXBORDERCOLOR1,
        }}
        onPress={() => console.log('subCategory')}
        >
        <View style={{...CategoryStyle.innerImage}}>
          <Image
            source={item.banner}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{...CategoryStyle.margleft15}}>
          <Text allowFontScaling={false} style={{...CategoryStyle.txt, color: themecolor.TXTWHITE}}>
            {item.name}
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:"center",alignItems:"center",left:5}}>
          <View
            style={{...CategoryStyle.iconview, borderRadius: 50, padding: 2}}
            >
            <FontAwesome name='angle-right' size={25} color={themecolor.TXTWHITE} />
          </View>
        </View>
      </TouchableOpacity>
  );
}

export function CategoryDataList(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  return ( 
    <FlatList
      data={props.data}
      renderItem={({item}) => (
        <CategoryDataFlateList item={item} themecolor={themecolor} />
      )}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
    />
  );
}
