import React from 'react';
import { Button } from 'react-native-paper';
import { primaryColor, darkColor, lightColor, dangerColor } from '../../styles/Styles';

//
const Btn = ({ value, color, onPress, icon, mode, disabled, style, compact, loading, uppercase }:any) => {
    return (
        <Button
            icon={icon === undefined ? '' : icon}
            mode={mode === undefined ? 'contained' : mode}
            compact={compact}
            onPress={onPress}
            loading={loading}
            uppercase={uppercase}
            color={
                color === undefined ? primaryColor :
                color === 'dark' ? darkColor :
                color === 'danger' ? dangerColor :
                lightColor}
            disabled={disabled === undefined ? false : disabled}
            style={style}
        >
            {value}
        </Button>
    );
};
export default Btn;