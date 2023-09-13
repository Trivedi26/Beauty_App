import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { MyThemeClass } from '../../Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';
import { ProductDetailStyle as styles } from '../../../assets/css/ProductDetailCss/ProductDetailStyle';
import ImageZoom from 'react-native-image-pan-zoom';
import CIcon from 'react-native-vector-icons/MaterialIcons';


const { width, height } = Dimensions.get('window');

export default ImageZoomerModel = props => {
    const mode = useSelector(state => state.mode);
    const themecolor = new MyThemeClass(mode).getThemeColor();
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(!props.modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={{ ...styles.modalView, backgroundColor: themecolor.TXTWHITE1 }}>
                    <View style={{ ...styles.modalCloseView }}>
                        <TouchableOpacity activeOpacity={0.5} style={{...styles.modalCloseTouch}}
                            onPress={() => props.setModalVisible(!props.modalVisible)}>
                            <CIcon
                                name="keyboard-backspace"
                                size={26}
                                color={themecolor.TXTWHITE}
                            />
                        </TouchableOpacity>
                    </View>

                    <ImageZoom
                        cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height}
                        imageWidth={width * 0.9}
                        imageHeight={height * 0.5}>
                        <Image
                            style={{ width: width * 0.9, height: height * 0.5 }}
                            source={props.image}
                            resizeMode="contain"
                        />
                    </ImageZoom>

                </View>
            </View>
        </Modal>
    );
};
