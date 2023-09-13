import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../fonts/FontFamily';
import {FontSize} from '../../fonts/Fonts';
import {Colors} from '../../config/Colors';
const {width, height} = Dimensions.get('window');

const ProductDetailStyle = StyleSheet.create({
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
  wishlistIconButton: {
    padding: 5,
  },
  datalistView: {
    width: width * 0.85,
    marginTop: 3,
    padding: 13,
    borderRadius: 8,
    borderWidth: 0.5,
    marginBottom: 40,
    alignSelf: 'center',
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerViewMain: {
    flexDirection: 'row',
    width: '100%',
  },
  HeadText: {
    fontSize: FontSize.labelText4,
    color: Colors.black,
    fontFamily: FontFamily.PopinsMedium,
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    // backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalCloseView: {
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  modalCloseTouch: {
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  MrT5: {
    marginTop: 20,
  },
  head: {
    width: width * 0.9,
    alignSelf: 'center',
    marginVertical: 20,
  },
  head1: {
    width: width * 0.95,
    alignSelf: 'center',
    marginVertical: 20,
  },
  txt2: {
    fontFamily: FontFamily.serif,
    fontSize: FontSize.labelText,
    fontWeight: 700,
  },
  btn: {
    paddingLeft: 20,
    paddingRight: 20,
    height: '98%',
    width: '45%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
  },
  btn1: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    alignSelf:'center',
    marginBottom:30
  },
  btnCon: {
    width: width * 0.9,
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: height * 0.063,
    alignSelf: 'center',
    marginVertical:20,
  },
  card: {
    width: width * 0.9,
    height:'auto',
    margin: 10,
    borderRadius: 20,
    borderWidth:1,
    alignSelf:'center',
    marginVertical:20,
    padding:20,
  },
  circ: {
    borderWidth: 1,
    width:50,
    height:50,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  card1: {
    width: width * 0.7,
    height:'auto',
    margin: 10,
    borderRadius: 20,
    borderWidth:1.5,
    marginBottom:20,
    padding:20,
  },
});
export {ProductDetailStyle};
