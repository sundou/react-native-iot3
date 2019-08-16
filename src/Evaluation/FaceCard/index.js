import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


import cry_face_disable from './Image/cry_face_disable.png'
import normal_face_disable from './Image/normal_face_disable.png'
import happy_face_disable from './Image/happy_face_disable.png'
import cry_face from './Image/cry_face.png'
import normal_face from './Image/normal_face.png'
import happy_face from './Image/happy_face.png'
import no_face from './Image/no_face.png'

import red_card from './Image/red_card.png'
import yellow_card from './Image/yellow_card.png'
import no_card from './Image/no_card.png'

function switchIcon(type, level, status) {
    if (status == 'disable') {
        if (type == "face") {
            switch (level) {
                case 'good':
                case '1':
                    return happy_face_disable;
                case 'normal':
                case '2':
                    return normal_face_disable;
                case 'error':
                case '3':
                    return cry_face_disable;
            }
        } else if (type == 'card') {
        }
    } else {
        if (type == "face") {
            switch (level) {
                case 'good':
                case '1':
                    return happy_face;
                case 'normal':
                case '2':
                    return normal_face;
                case 'error':
                case '3':
                    return cry_face;
                default:
                    return no_face;
            }
        } else if (type == 'card') {
            switch (level) {
                case 'normal':
                case '2':
                    return yellow_card;
                case 'error':
                case '3':
                    return red_card;
                default:
                    return no_card;
            }
        }
    }

}

const FaceCard = ({
    type = 'face',
    level = 'normal',
    status = 'able',
    style = {}
}) => {
    let iconSource = switchIcon(type, level, status);
    return (
        <Image source={iconSource}
            resizeMode='contain'
            style={[{
                height: 55,
                width: 55,
            }, style]}
        />
    )
}

export default FaceCard

