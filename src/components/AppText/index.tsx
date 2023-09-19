import {Colors, Fonts} from '@/theme';
import {FontType} from '@/types/Fonts';
import {Text, TextProps} from 'react-native';

export interface AppTextProps extends TextProps {
  type: FontType;
  color: string;
}

const AppText = ({type, color, style, children, ...rest}: AppTextProps) => {
  const customStyle = Fonts.FontStyle[type];
  const textColor = {color: color};

  return (
    <Text style={[customStyle, textColor, style]} {...rest}>
      {children}
    </Text>
  );
};

AppText.defaultProps = {
  type: 'Body',
  color: Colors.primary,
};

export default AppText;
