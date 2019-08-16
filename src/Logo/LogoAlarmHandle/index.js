import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import icon_alarm_handle from '../../Image/logo/alarm_handle.png'

const LogoAlarmHandle = ({
    style
}) => {
    return (
        <Image style={style}
            source={icon_alarm_handle}
        />
    )
}

export default LogoAlarmHandle
