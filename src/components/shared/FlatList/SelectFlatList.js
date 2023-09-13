import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, FlatList, Text, Dimensions,Image } from 'react-native';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import { DashboardStyle } from '../../../assets/css/DashboardCss/DashboardStyle';
import { SelectedData } from '../Data/DashboardSelectedItemList';

const { width, height } = Dimensions.get('screen');

function SelectList({ index, touch, selected, onChange, item, themecolor}) {

  const handleClick = (index,name) => {
    console.log(index,name)
    onChange(index,name)
  }
  
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => handleClick(index,item.name)} style={DashboardStyle.touchableop}>
        <View
          style={{
            ...DashboardStyle.caro,
            borderColor:themecolor.TXTWHITE,
            backgroundColor:  index == selected ? themecolor.bgM  : 'transparent',
          }}>
          <View style={{...DashboardStyle.flexDR}}>
          <Image style={DashboardStyle.image} source={item.icon}/>
            <Text
              allowFontScaling={false}
              style={{
                ...DashboardStyle.HeadText2,
                color: index == selected ?'#000':themecolor.TXTWHITE,
              }}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

export function SelectFlatList(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();
  const [selected, setSelected] = React.useState(0)

  const handleSelected = (index,item) => {
    console.log(index,item)
    setSelected(index)
    props.onChange(item)
  }

  return (
    <>
      <FlatList
        data={SelectedData}
        renderItem={({ item, index }) => (
          <SelectList index={index} selected={selected} onChange={(value,data) => handleSelected(value,data)} item={item} themecolor={themecolor} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
    </>
  );
}
