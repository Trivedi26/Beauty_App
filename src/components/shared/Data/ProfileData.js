import FA from 'react-native-vector-icons/FontAwesome';
import EP from 'react-native-vector-icons/Entypo';
import SLI from 'react-native-vector-icons/SimpleLineIcons';
import FE from 'react-native-vector-icons/Feather';
import MI from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

export const data = [
  {
    name: 'Edit Profile',
    icon: <MCI name="account-edit-outline" size={23} />,
    onpress: console.log("edit")
  },
  {
    name: 'Change Password',
    icon: <FA name="edit" size={21} />,
    onpress: console.log("edit")
  },
  {
    name: 'Manage Address',
    icon: <EP name="location" size={20} />,
    onpress: console.log("edit")
  },
  {
    name: 'My Wishlist',
    icon: <FA name="heart-o" size={20} />,
    onpress: console.log("edit")
  },
  {
    name: 'My Order',
    icon: <SLI name="handbag" size={20} />,
    onpress: console.log("edit")
  },
  {
    name: 'Return Order',
    icon: <MCI name="cart-arrow-up" size={22} />,
    onpress: console.log("edit")
  },
  {
    name: 'Support Ticket',
    icon: <FA name="file-text-o" size={19} />,
    onpress: console.log("edit")
  },
  {
    name: 'RFQ Upload',
    icon: <FE name="upload" size={20} />,
    onpress: console.log("edit")
  },
  {
    name: 'FeedBack',
    icon: <MI name="info-outline" size={20} />,
    onpress: console.log("edit")
  },
  {
    name: 'Bulk Order Enquiry',
    icon: <MCI name="message-question-outline" size={20} />,
    onpress: console.log("edit")
  },
];

