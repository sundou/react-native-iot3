import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import CardView from 'react-native-cardview';
import PreviewFloorPlanButton from '../../Button/PreviewFloorPlanButton'
import { Row, Space } from '@local/react-native-lcwl-ui'

import icon_address from '../../Image/common/display_icon/address.png'
import icon_check from '../../Image/common/display_icon/check.png'
import icon_time from '../../Image/common/display_icon/time.png'

function checkPlan(t) {
    if (t == '') {
        return false
    };
    return true;
}

const AlarmEquipInfoCard = ({
    onPress = () => { },
    title = '消控室监控摄像头占位',
    location = '汇智大厦-15楼-1503室占位',
    time = '07-24 19:02占位',
    secondText = '主机复位占位',
    floorPlan = ''

}) => {
    const canLookPlan = checkPlan(floorPlan);
    return (
        <CardView
            cardElevation={3}
            cardMaxElevation={2}
            cornerRadius={0}
            style={{zIndex: 10}}
        >
            <View style={styles.container}>
                <Row style={styles.between}>
                    <View >
                        <Text style={styles.title}>{title}</Text>
                        <Space height={11} />
                        <Row style={styles.center}>
                            <Image style={styles.icon} source={icon_address} />
                            <Space width={5} />
                            <Text style={styles.subTitle}>{location}</Text>
                        </Row>
                        <Space height={5} />
                        <Row style={styles.center}>
                            <Image style={styles.icon} source={icon_time} />
                            <Space width={6} />
                            <Text style={styles.subTitle}>{time}</Text>
                        </Row>
                    </View>

                    <View style={styles.between}>
                        <PreviewFloorPlanButton onPress={onPress}
                            disable={!canLookPlan}
                        />
                        <Row style={styles.center}>
                            <Image style={styles.icon} source={icon_check} />
                            <Space width={4} />
                            <Text style={styles.secondText}>{secondText}</Text>
                        </Row>
                    </View>
                </Row>
            </View>
        </CardView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        paddingRight: 15,
        paddingLeft: 20,
        paddingTop: 18,
        paddingBottom: 18
    },
    // between: {
    //     alignContent: 'space-between'
    // },
    between: {
        justifyContent: 'space-between'
    },
    center: {
        alignItems: 'center'
    },

    title: { color: '#333333', fontSize: 17 },
    subTitle: { color: '#999999', fontSize: 14 },
    secondText: { color: '#D0D0D0', fontSize: 14 },

})


export default AlarmEquipInfoCard
