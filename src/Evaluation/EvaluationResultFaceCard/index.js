import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, Platform } from 'react-native'
import FaceCard from '../FaceCard'
import {  Row } from '@local/react-native-lcwl-ui'


const MainColor='white';
const BorderColor='rgba(0, 0, 0, 0.1)';

function convertTime(time) {
    if (time && time.indexOf(' '!=-1)) {
        return time.split(' ')[0];
    } else {
        return time;
    }
}

const SLine = ({height=1}) => (
    <View style={{height: height, width: 2}}/>
)


const FaceGroup = ({
    level, type, title, subTitle
}) => {
    return (
        <Row>
            <FaceCard 
                style={{
                    width: 32,
                    height: 32,
                    marginRight: 9
                }}
                type={type} 
                level={level}
            />
            <View style={{
                height: '100%',
            }}>
                <Text style={{
                    fontSize: 14,
                    color: '#333333'
                }}>{title}</Text>
                    <View style={{flex: 1}}/>
                <Text style={{
                    fontSize: 12,
                    color: '#999999',
                }}>{subTitle}</Text>
            </View>
        </Row>
    )
}


const EvaluationResultFaceCard = ({
    style={},
    onPressLink,
    subtitleOne='',
    subtitleTwo='',
    tagName='',

    faceResult = '',

    title='',
    monitorEvaluationFace='',
    monitorEvaluationTime='',
    selfEvaluationFace='',
    selfEvaluationTime='',
    lastEvaluationFace='',

    
    // monitorEvaluationFace='normal',
    // monitorEvaluationTime='2019-04-12',
    // selfEvaluationFace='error',
    // selfEvaluationTime='2019-05-12',
    // lastEvaluationFace='normal',

    cardName="",
    cardLevel='',
    btnText='编 辑',
    onPressBtn=()=>{}
}) => {
    monitorEvaluationTime = convertTime(monitorEvaluationTime);
    selfEvaluationTime = convertTime(selfEvaluationTime);
    return (
        <View style={styles.container}>

            <View style={styles.secondCard}>
                <Row style={styles.faceContainer}>
                    <FaceCard level={faceResult} style={styles.faceResult} />
                    {/* <View style={{width: 100, height: 100, backgroundColor: 'blue'}}/> */}
                    <View >
                        <FaceGroup title="最新监管评定" subTitle={monitorEvaluationTime} level={monitorEvaluationFace}/>
                            <SLine height={20}/>
                        <FaceGroup title="最新单位自评" subTitle={selfEvaluationTime} level={selfEvaluationFace}/>
                            <SLine height={20}/>
                        <FaceGroup type="card" title="红黄牌警告" subTitle={cardName} level={cardLevel}/>
                    </View>
                </Row>
                
                <View style={styles.pointLeft}/>
                <View style={styles.pointRight}/>
                <View style={styles.covertLeft}/>
                <View style={styles.coverRight}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // margin: 10
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },

    secondCard: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: MainColor,
        borderColor: BorderColor,
        borderWidth: 1,
        flexDirection: 'row',
        // overflow: 'hidden'
    },
    pointLeft: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: MainColor,
        borderColor: BorderColor,
        borderWidth: 1,
        position: 'absolute',
        alignSelf: 'center',
        left: -7,
    },
    pointRight: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: MainColor,
        borderColor: BorderColor,
        position: 'absolute',
        borderWidth: 1, 
        alignSelf: 'center',
        right: -7,
    },
    covertLeft: {
        width:20,
        height: 20,
        backgroundColor: MainColor,
        borderColor: BorderColor,
        position: 'absolute',
        alignSelf: 'center',
        left: -21,
    },
    coverRight: {
        width:20,
        height: 20,
        backgroundColor: MainColor,
        borderColor: BorderColor,
        position: 'absolute',
        alignSelf: 'center',
        right: -21,

    },
    faceContainer: {
        alignItems: 'center',
        paddingTop: 26,
        paddingBottom: 26,
        paddingLeft: 36,
    },
    faceResult: {
        width: 110, height: 110,
        marginRight: 45
    },
    
})


export default EvaluationResultFaceCard
