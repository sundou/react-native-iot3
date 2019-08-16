import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'



const TextCenterSeparate = ({
    style
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.line}/>
            <Text style={styles.text}>请选择</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center'
    },
    line: {
        width: '100%',
        height: 1,
        position: 'absolute',
        left: 0,
        backgroundColor:'#E5E5E5'
    },
    text: {
        color: '#999999',
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white'
    }, 
})


export default TextCenterSeparate


