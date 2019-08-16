import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Row } from '@local/react-native-lcwl-ui'

const TextLeftSeparate = ({
    title,
    subtitle,
    style,
    hideLine
}) => {
    return <Row style={[{alignItems: 'center'}, style]}>
        <Text style={sty.title}>{title}</Text>
        <Text style={sty.subtitle}>{subtitle}</Text>
        {!hideLine && <View style={sty.line}/>}
    </Row>
}

const sty = StyleSheet.create({
    title: {
        color: '#333333',
        fontSize: 17
    },
    subtitle: {
        color: '#999999',
        fontSize: 13,
        marginLeft: 4,
        marginRight: 9
        
    },
    line: {
        backgroundColor: '#E5E5E5',
        flex:1,
        height:1,
    },
})



export default TextLeftSeparate