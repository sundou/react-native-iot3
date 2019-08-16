import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Row } from '@local/react-native-lcwl-ui'


const AlarmHistoryButton = ({
    onPress=()=>{}
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Row >
                <Text style={styles.text}>历史记录</Text>

                <Icon style={{
                    marginTop: Platform.OS == 'ios'?0:3
                }}  name="md-more" size={13} color="#0880DF"/>
            </Row>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingRight: 15,
    },
    text: {
        color: '#0880DF',
        fontSize: 13,
        marginRight: 4
    }
})


export default AlarmHistoryButton