import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { Row } from '@local/react-native-lcwl-ui'
import Dash from 'react-native-dash'
import ImagePicker from '../../ImagePicker'

import icon_step from '../../Image/common/display_icon/step.png'
import icon_time from '../../Image/common/display_icon/time.png'

export const ContentType = {
    DefaultText: 'DefaultText',
    GrayText: 'GrayText',
    Images: 'Images'
}

const DefaultText = ({ text }) => (
    <Text style={{
        fontSize: 14,
        color: '#333333',
        marginBottom: 9
    }}>{text}</Text>
)

const GrayText = ({ text }) => (
    <Text style={{
        fontSize: 14,
        color: '#999999',
        marginBottom: 9
    }}>{text}</Text>
)



const AlarmHandleResultCell = ({
    time = '2019-07-24 19:02占位',
    title = '发生警报占位',
    content,
}) => {
    return (
        <View style={styles.container}>
            <Row style={styles.headContainer}>
                <Image source={icon_step} style={styles.step} />

                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Row style={{ alignItems: 'center' }}>
                        <Image source={icon_time} />
                        <Text style={styles.time}>{time}</Text>
                    </Row>
                </View>
            </Row>
            {content && <View style={styles.contentContainer}>
                <Dash style={{ width: '100%', height: 1, marginBottom: 9 }} dashColor='#E3E6E9' />
                <View style={styles.rightPoint} />
                <View style={styles.leftPoint} />
                <View style={styles.content}>
                    {Array.isArray(content) && content.map(item => {
                        switch (item.type) {
                            case ContentType.DefaultText:
                                return <DefaultText text={item.value} />
                            case ContentType.GrayText:
                                return <GrayText text={item.value} />
                            case ContentType.Images:
                                return <ImagePicker images={item.value} 
                                    readOnly={true}
                                    imageWidth={72}
                                    style={{
                                        marginLeft: -5,
                                        marginBottom: 9
                                    }}
                                />

                                
                            default:
                                return <></>
                        }
                    })}
                </View>
            </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    headContainer: {
        paddingTop: 15,
        paddingBottom: 13,
        paddingLeft: 17,
        paddingRight: 17,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems: 'center'
    },
    step: {
        width: 25,
        height: 27,
        marginRight: 24,
    },
    title: {
        color: '#22C9A4',
        fontSize: 17,
        marginBottom: 5
    },
    time: {
        fontSize: 14,
        color: '#999999',
        marginLeft: 6
    },

    contentContainer: {
        backgroundColor: 'white',
        borderRadius: 6,
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        marginLeft: 50,
    },
    leftPoint: {
        position: 'absolute',
        top: -6, left: -6,
        width: 12, height: 12, borderRadius: 6,
        backgroundColor: '#F3F3F3'
    },
    rightPoint: {
        position: 'absolute',
        top: -6, right: -6,
        width: 12, height: 12, borderRadius: 6,
        backgroundColor: '#F3F3F3'

    }
})


export default AlarmHandleResultCell
