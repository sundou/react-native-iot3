import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements';
import CardView from 'react-native-cardview';

function getButtonStyle(type, tintColor) {
    if (type == 'outline') {
        return {
            borderColor: tintColor,
            borderWidth: 1
        }
    }

    return {
        backgroundColor: tintColor
    }


}
function getTitleStyle(type, tintColor) {
    if (type == 'outline') {
        return {
            color: tintColor,
            fontSize: 17,
            // fontWeight: '400'
        }
    }

    if (tintColor == 'white') {
        return { color: '#303F4B' }
    }
    return {

    }
}

const CommonButton = ({
    tintColor,
    selected,
    selectedTintColor,
    type,
    raised,
    titleStyle,
    containerStyle,
    buttonStyle,
    onPress,
    ...otherProps
}) => {
    // return (

    //         <Button
    //             titleStyle={getTitleStyle(type, tintColor)}
    //             buttonStyle={getButtonStyle(type, tintColor)}
    //             type={type}
    //             {...otherProps}
    //         />
    // )
    if (selected == true) {
        tintColor = selectedTintColor;
        onPress = () => { };
    }


    return (
        <Button
            containerStyle={[{
                margin: raised ? 5 : 0
            }, containerStyle]}
            titleStyle={[getTitleStyle(type, tintColor), titleStyle]}
            buttonStyle={[getButtonStyle(type, tintColor), buttonStyle]}
            type={type}
            onPress={onPress}
            raised={raised}
            {...otherProps}
        />
    )
}

export default CommonButton
