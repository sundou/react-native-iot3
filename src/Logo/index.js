import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import icon_alarm_handle from '../Image/logo/alarm_handle.png'

function getIconSource(type) {
    switch (type) {
        case 'alarmHandle':
            return icon_alarm_handle;
        default:
            return null;
    }
}

const Logo = ({
    style,
    type
}) => {
    return (
        <Image style={style}
            source={getIconSource(type)}
        />
    )
}

export default Logo
