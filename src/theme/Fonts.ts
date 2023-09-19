import {Dimensions, PixelRatio} from 'react-native';
import {RFValue as RF} from 'react-native-responsive-fontsize';

const WP = (elemWidth: number) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const HP = (elemHeight: number) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const FontStyle = {
  Heading: {
    fontSize: RF(20),
    fontFamily: 'Roboto-Bold',
  },
  Subheading: {
    fontSize: RF(20),
    fontFamily: 'Roboto-Medium',
  },
  Year: {
    fontSize: RF(20),
    fontFamily: 'Roboto-Regular',
  },
  Time: {
    fontSize: RF(14),
    fontFamily: 'Roboto-Italic',
  },
  Rating: {
    fontSize: RF(14),
    fontFamily: 'Urbanist-Bold',
  },
  ButtonText: {
    fontSize: RF(16),
    fontFamily: 'Urbanist-Regular',
  },
  Body: {
    fontSize: RF(14),
    fontFamily: 'Urbanist-Regular',
  },
};

export default {WP, HP, RF, FontStyle};
