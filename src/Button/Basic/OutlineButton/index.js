import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Row } from '@local/react-native-lcwl-ui'


const OutlineButton = ({
    disable = false,
    title = '按钮',
    tintColor = 'blue',
    disableColor = 'gray',
    style = {},
    titleStyle = {},
    onPress = () => { }
}) => {

    function getTintColor() {
        if (disable) {
            return disableColor;
        }
        return tintColor;
    }


    return (
        <Row>
            <TouchableOpacity style={[
                styles.container,
                style,
                {
                    borderColor: getTintColor()
                }
            ]} onPress={onPress}>

                <Text style={[
                    styles.text,
                    titleStyle,
                    {
                        color: getTintColor()
                    }
                ]}>{title}</Text>
            </TouchableOpacity>

        </Row>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row'
    },
    text: {

    }
})

export default OutlineButton
