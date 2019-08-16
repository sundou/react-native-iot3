import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import OutlineButton from '../Basic/OutlineButton'

const PreviewFloorPlanButton = ({
    onPress=() => {},
    ...otherProps
}) => {
    return (
        <OutlineButton  onPress={onPress}
            style={styles.container}
            titleStyle={styles.titile}
            title='查看平面图'
            tintColor='#03A9F5'
            disableColor='#DDDDDD'
            {...otherProps}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: 30,
        justifyContent:'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop:8,
        paddingBottom: 8
    },
    titile: {
        fontSize: 13
    }
})


export default PreviewFloorPlanButton
