import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { Row, Space } from '@local/react-native-lcwl-ui'

import icon_time from '../../Image/common/display_icon/time.png'


const AlarmHistoryCell = ({
    title = '告警占位',
    time = '02-09 19:02占位',
    secondText = '已处理占位',
    threeText = '主机复位占位',
}) => {
    return (
        <View style={styles.container}>
            <Row style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{secondText}</Text>
            </Row>
            <Space height={10} />
            <Row style={styles.row}>
                <Row style={styles.timeContainer}>
                    <Image source={icon_time} />
                    <Text style={styles.grayText}>{time}</Text>
                </Row>
                <Text style={styles.grayText}>{threeText}</Text>
            </Row>
        </View>
    )
}

export default AlarmHistoryCell

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

        // margin: 10
        // backgroundColor:'white',
        // marginLeft: 10,
        // marginRight: 10,
        // marginBottom: 5,
        // borderRadius: 6,

        // paddingTop: 15,
        // paddingBottom: 12

        padding: 15,
        paddingTop: 18,
        paddingBottom: 11
    },
    row: {
        justifyContent: 'space-between',
    },
    timeContainer: {
        alignItems: 'center'
    },

    title: { color: '#333333', fontSize: 17 },
    subTitle: { color: '#555555', fontSize: 14 },
    grayText: { color: '#999999', fontSize: 14 }
    // leftContainer: {
    //     marginLeft: 25,
    //     // backgroundColor:'red',
    //     justifyContent: 'center'
    // },
    // rightContainer: {
    //     marginLeft: 26
    // },

    // alarmIcon: {
    //     width: 30,
    //     height: 30
    // },
    // alarmText: {
    //     fontSize: 15,
    //     color: '#D0D0D0',
    //     marginTop: 7,
    // },

    // row: {
    //     alignItems: 'center'
    // },

    // displayIcon: { width: 14, height: 14, marginRight: 5 },
    // title: { color: '#333333', fontSize: 17 },
    // subTitle: { color: '#999999', fontSize: 14 },
})
