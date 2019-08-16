import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

const TextInputArea = ({
    style,
    ...otherProps
}) => {
    return (
        <View style={[{
            padding: 15,
            backgroundColor: 'white',
            // height: 100
            // flex:0,
            // height: 80
        }, style]}>
            <TextInput style={{
                // width: 100,
                // height: 100,
                textAlignVertical: 'top',
                padding: 0,
                color: '#333333',
                fontSize: 17,
                flex: 1,
            }}
                multiline={true}
                placeholder="*请输入"
                {...otherProps}
            />
        </View>
    )
}

export default TextInputArea
