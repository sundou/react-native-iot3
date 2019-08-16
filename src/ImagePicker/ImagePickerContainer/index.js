import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import CardView from 'react-native-cardview';
import ImagePicker from '../index'

import icon_pho_transparent from '../img/pho_transparent.png'

export default class ImagePickerContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images: [],
        }
    }
    
    render() {
        const { images } = this.state;
        const {
            style,
            cardStyle,
            pickerStyle,
            ...otherProps
        } = this.props;
        let isShowPicker = images && Array.isArray(images) && images.length>0
        return (
            <View style={style}>
                {!isShowPicker && 
                <CardView
                    style={[{
                        backgroundColor:'#F9F9FA',
                        justifyContent: 'center',
                    }, 
                    cardStyle
                    ]}
                    cardElevation={3}
                    cardMaxElevation={2}
                    cornerRadius={3}
                >
                <TouchableOpacity 
                        onPress={() => {
                            // this.setState({ images: ['a'] })
                            this.imagePicker._selectImage()
                        }}
                    >
                        <Image style={{
                            alignSelf:'center'
                        }} source={icon_pho_transparent}/>
                   </TouchableOpacity>
                   </CardView>
                }
                <ImagePicker
                    style={[{
                        margin: -5
                    },pickerStyle]}
                    onSelectImage={(images)=>{
                        this.setState({
                            images
                        })
                    }}
                    editing={true}
                    hide={!isShowPicker}
                    imageWidth={70}
                    ref={(o) => this.imagePicker=o}
                    {...otherProps}
                />
            </View>
        )
    }
}