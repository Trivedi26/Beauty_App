import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../fonts/FontFamily';
import {FontSize} from '../../fonts/Fonts';
import { Colors } from '../../config/Colors';
const {width, height} = Dimensions.get('window');

const DashboardStyle = StyleSheet.create({
  imagebackground: {
    flex: 1,
    zIndex: 9999,
    width: width,
    height: height,
},
  header: {
    height: height * 0.05,
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    alignItems: 'center',
  },
  heading: {
    height: height * 0.04,
    width: width,
    paddingRight: 10,
    paddingLeft: 10,
  },
  caro: {
    margin: 5,
    width: 'auto',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  flexDR: {
    flexDirection: 'row',
  },
  HeadText2: {
    fontSize: FontSize.labelText2,
    fontFamily: FontFamily.PopinsMedium,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 20, 
    height: 20,
    marginRight:4,
  },
  touchableop:{
    height:height*0.1,
    justifyContent:'center',
  },
  datalistView: {
    width: width * 0.43,
    height: height *0.46,
    margin: 10,
    borderRadius: 10,
    borderWidth:1,
  },
  innerImage: {
    height: height * 0.246,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:1,
    width:'100%',
    borderTopLeftRadius:9,
    borderTopRightRadius:9,
    backgroundColor:'#f5f5f5'
  },
  inner: {
    marginTop:'7%',
    padding: 2, 
    width:"100%",
    paddingLeft:'4%'
  },
    txt:
    {
        fontFamily: FontFamily.serif,
        fontSize: FontSize.labelText4
    },
    txt1:
    {
      marginTop:'2%',
        fontFamily: FontFamily.serif,
        fontSize: FontSize.labelText3
    },
    txt2:
    {
        fontFamily: FontFamily.serif,
        fontSize: FontSize.labelText3,
        fontWeight:600
    },
    txtHead:
    {
        fontFamily: FontFamily.serif,
        fontSize: FontSize.labelText24,
        fontWeight:600,
        width:width*0.5,
    },

  wishlistIconButton:{
    padding: 5,
  },
  productImage:{
    width: width * 0.36,
    height: '100%',
  },
  card: {
    width: width * 0.94,
    height: height *0.35,
    margin: 10,
    borderRadius: 10,
    borderWidth:1,
    alignSelf:'center',
    marginVertical:20,
    padding:20
  },
  imageS:{
    width: width * 0.4,
    marginTop:'5%',
    height: '90%',
  }
});
export {DashboardStyle};
