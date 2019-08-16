import React, { Component } from 'react'
import { Text, View, Modal,Image, TouchableOpacity, Alert, TextInput, StyleSheet, Platform } from 'react-native'

import icon_blue from './img/blue_suc.png'
import icon_red from './img/red_suc.png'

import OutlineButton from '../../Button/Basic/OutlineButton'

export default class AlarmModal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          visible: false
      }
    }

    static defaultProps = {
        showAlertFunc: () => {}
    }
    

    onPressOk = () => {

        let {

        } = this.state;

    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }
    dismissModal = () => {
        this.setState({
            visible: false
        })
    }
    
    

    alert = () => {
        // alert('alert');
        this.showModal();
    }
    
    
    
  render() {
      const {
        visible,
      } = this.state;
      const {
          type='blue',
          onPress = () => {}
      } = this.props;
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={()=>{}}
        >
        <View style={{
            flex:1,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                // width:270,
                // minHeight:135,
                // backgroundColor:'white',
                borderRadius:13,
                alignItems: 'center'
            }}>
                <Image source={type=='blue'? icon_blue: icon_red}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>恭喜您成功处理了此问题</Text>
                    <OutlineButton
                        onPress={(params) => {
                            onPress();
                            this.dismissModal();
                        }}
                        
                        style={{
                            alignItems:'center',
                            height: 40,
                            borderRadius: 20
                        }}
                        titleStyle={{fontSize: 20, marginLeft:20, marginRight:20}}
                        title="确定"
                        tintColor={type=='blue'? '#0880DF':'#ED7109'}
                    />
                </View>
            </View>
        </View>
        </Modal>
    )
  }
}


const styles = StyleSheet.create({
    contentContainer: {
        position:'absolute',
        top:0, left:0, right:0, bottom:0,
        alignItems:'center'
    },
    title:{
        color: 'white',
        fontSize: 16,
        marginTop: 110,
        marginBottom: 57
    }

})
