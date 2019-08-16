import React, { Component } from 'react'
import { 
    Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity,
    Image
} from 'react-native'

import icon_alarm from '../../Image/alarm/alarm.png'
import icon_breakdown from '../../Image/alarm/breakdown.png'
import icon_feedback from '../../Image/alarm/feedback.png'
import icon_fire from '../../Image/alarm/fire.png'
import icon_normal from '../../Image/alarm/normal.png'
import icon_shield from '../../Image/alarm/shield.png'
import icon_supervise from '../../Image/alarm/supervise.png'
import icon_address from '../../Image/common/display_icon/address.png'
import icon_time from '../../Image/common/display_icon/time.png'

import { Row, Space } from '@local/react-native-lcwl-ui'
import { Toast } from '@ant-design/react-native'

const alarmType = {
    alarm : 1,
    breakdown : 2,
    feedback : 3,
    fire : 4,
    normal : 5,
    shield : 6,
    supervise : 7
}

function getAlarmIcon(type) {
    switch (type) {
        case alarmType.alarm:
            return icon_alarm
    
        default:
            return icon_fire
    }
}
function getValidType(type) {
    if (type==alarmType.alarm || type==alarmType.breakdown) {
        return true
    }
    return false
}


// const Space = ({width=1, height=1}) => <View style={{width, height}}/>

const AlarmCell = ({
    type=0
}) => {

    const isValidType = getValidType(type);
    
    return (
        <View style={[styles.container,{backgroundColor: isValidType?'white':'#F8F8F8'}]}>
        <TouchableOpacity onPress={() => {
            alert('sdf')
            if (!isValidType) {
                Toast.info('此类报警无法在手机上处\n理,请前往该设备手动恢\n复正常');
            }
        }
        }>
            <Row>
                <View style={styles.leftContainer}>
                    <Image style={styles.alarmIcon} source={getAlarmIcon(type)}/>
                    <Text style={styles.alarmText}>警报</Text>
                </View>

                <View style={styles.rightContainer}>
                    <Text style={styles.title}>独立式NB感烟探测器</Text>
                    {/* <View style={{width: 10, height: 10, bgc}}> */}
                    <Space height={11}/>
                    <Row style={styles.row}>
                        <Image style={styles.displayIcon} source={icon_address}/>
                        <Text style={styles.subTitle}>汇智大厦-15楼-1503室</Text>
                    </Row>
                    <Space height={5}/>
                    <Row style={styles.row}>
                        <Image style={styles.displayIcon} source={icon_time}/>
                        <Text style={styles.subTitle}>07-24 19:02</Text>
                    </Row>
                </View>
            </Row>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // margin: 10
        backgroundColor:'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 6,

        paddingTop: 15,
        paddingBottom: 12
    },
    leftContainer: {
        marginLeft: 25,
        // backgroundColor:'red',
        justifyContent: 'center'
    },
    rightContainer: {
        marginLeft: 26
    },

    alarmIcon: {
        width: 30,
        height: 30
    },
    alarmText: {
        fontSize: 15,
        color: '#D0D0D0',
        marginTop: 7,
    },

    row: {
        alignItems: 'center'
    },

    displayIcon: { width: 14, height: 14, marginRight: 5 },
    title: { color: '#333333', fontSize: 17 },
    subTitle: { color: '#999999', fontSize: 14 },
})

export default AlarmCell

