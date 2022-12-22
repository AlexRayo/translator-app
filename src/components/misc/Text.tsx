import React from 'react';
import {Text} from 'react-native-paper';
import styles from '../../styles/Styles';

//
const Txt = ({value, format, color, weight, alignment, style, onPress}:any) => {
  return (
    <Text
        style={[
            format == 'h1' ? styles.h1 :
            format == 'h2' ? styles.h2 :
            format == 'h3' ? styles.h3 :
            format == 'h4' ? styles.h4 :
            styles.p,
            color == 'primary' ? styles.textPrimary :
            color == 'secondary' ? styles.textSecondary :
            color == 'danger' ? styles.textDanger :
            color == 'warning' ? styles.textWarning :
            color == 'gray' ? styles.textGray :
            color == 'light' ? styles.textLight :
            color == 'white' ? styles.textWhite :
            styles.textDark,
            weight == 'bold' ? styles.textBold :
            null,
            alignment == 'left' ? styles.textLeft :
            alignment == 'center' ? styles.textCenter :
            alignment == 'right' ? styles.textRight :
            styles.textLeft,
            style === undefined ? null : style
        ]}        
        onPress = {onPress}
        >
      {value}
    </Text>
  );
};
export default Txt;
