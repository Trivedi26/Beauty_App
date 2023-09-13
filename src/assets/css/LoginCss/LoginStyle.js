import { StyleSheet, Dimensions } from 'react-native'
import { FontFamily } from '../../fonts/FontFamily'
const { width, height } = Dimensions.get('window')

const LoginStyle = StyleSheet.create({
    imagebackground: {
        flex: 1,
        zIndex: 9999,
        width: width,
        height: height,
        
    },
    container: {
        marginTop:height*0.3,
        alignSelf:'center',
        width: width*0.95,
        height:height*0.45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
    },

    bigButton: {
        // backgroundColor: props.backgroundColor,
        width: width*0.9,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: height*0.06,
        borderRadius: 10,
      },

    loginContainer: {
        alignSelf:'center',
        width: width * 0.95,
        height:height*0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image:{
        width:width,
        height:height*0.15,
        resizeMode: 'contain',
    },
    image1:{
        width:width,
        height:height*0.15,
        resizeMode:'contain',
        transform:[{rotateZ: '5deg'}],
        
    },
    textInputView:{
        width: width * 0.9,
        flexDirection: 'row',
        borderRadius: 12,
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.8,
    },
    textInput:{
        fontSize: 14,
        height: 45,
        fontFamily: FontFamily.PopinsRegular,
        left: 15
    },
    textInputpswd:{
        fontSize: 14,
        height: 45,
        fontFamily: FontFamily.PopinsRegular,
        left: 15,
        width: width * 0.81,
    },
    MGv5:{
        marginVertical: 5 
    },
    MGv15:{
        marginVertical: 15
    },
    eyeButton:{
        width: width * 0.07,
    },

})
export { LoginStyle }