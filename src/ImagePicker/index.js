import React, { Component } from 'react';
import {
 Platform,
 StyleSheet,
 View,
 Text,
 TouchableOpacity,
 TouchableWithoutFeedback,
 Modal,
 Alert,
 Image
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import ImageViewer from 'react-native-image-zoom-viewer';
const CANCEL_INDEX = 0;
const options = ['取消', '拍摄', '从手机相册选取'];

import pickerBtnIcon from './img/picker.png';
import btnPhoIcon from './img/btn_pho.png';
// import { Marker } from '../../utils';
import { isEqual } from 'lodash';
/*
#props
readOnly: bool 只预览图片
hide: bool 隐藏图片选择器默认样式
editing: bool 编辑删除图片
imageWidth: number 图片宽度
onSelectImage: array 返回选中图片
enableAlbum: bool default false 开启相册选择
maxImages: number default 999 图片最多可选则数量
needMarker: bool default false 图片水印
imageMargin: number default 5 图片margin  未完善不建议使用

isAddFirst: bool default true 添加按钮前后位置
addIcon: string|object 
  string: default|phoBtn
*/

class ImagePickerComponent extends Component {
 constructor(props) {
  super(props);
  this.state = {
   images: props.images || [],

   displayImage: false,
   selectedImage: [],
   selectedIndex: 0,
  };
 }
 static defaultProps = {
   isAddFirst: true
 }

 static getDerivedStateFromProps(props,state) {
   if (!isEqual(props.images, state.images)) {
     return {
       images: props.images || state.images
     }
   }
   return null;

 }

 imagePickerFromCamera() {
  let { imageWidth, onSelectImage } = this.props;
  ImagePicker.openCamera({
   compressImageQuality: 0.5
  }).then(images => {
    let pickedImages = this.state.images;
    pickedImages.push(images);
    this.onSelectImage(pickedImages);

  //  this.state.images.push(images);
  //  this.setState({
  //   images: this.state.images,
  //  });
  //  this.onSelectImage();
   //onSelectImage && onSelectImage(this.state.images);
  });
 }

 _renderImages() {
  if (this.state.images.length <= 0) { return; }

  var images = [];
  for (var i = 0; i < this.state.images.length; i++) {
   var image = this.state.images[i];
   images.push(
    this._renderOneImage(image, i)
   )

  }

  return images;
 };

 _renderOneImage(image, i) {
  let { imageWidth, imageHeight, onSelectImage, imageMargin = 5 } = this.props;
  imageWidth = imageWidth ? imageWidth : 100;
  imageHeight = imageWidth && imageHeight ? imageHeight : imageWidth;
  let { editing, readOnly } = this.props;
  if (readOnly) {
   editing = false;
  }
  return (
   <View key={i} >
    <TouchableWithoutFeedback onPress={() => {
     this.onPressImage(image);
    }}>
     <Image key={i} source={{ uri: image.path || image }} style={{ width: imageWidth, margin: imageMargin, height: imageHeight, borderRadius: 3 }} />
    </TouchableWithoutFeedback>


    {editing && <TouchableOpacity
     style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: 10, position: 'absolute', top: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}
     onPress={() => {
      this.state.images.splice(i, 1)
      let splicedImages = this.state.images;
      // this.setState({
      //  images: this.state.images
      // })
      this.onSelectImage(splicedImages);
      //onSelectImage && onSelectImage(this.state.images);
     }}>
     <Text style={{   fontSize: 22, color: 'white', backgroundColor: 'transparent',
      // backgroundColor: 'blue'
      marginTop: Platform.OS == 'ios' ? -3.5: -2,
        }}>-</Text>
    </TouchableOpacity>}
   </View>
  )
 }

 onPressImage(image) {
  let index = this.state.images.indexOf(image);
  this.setState({
   selectedImage: [{ url: image.path || image }],
   displayImage: true,
   selectedIndex: index,
  });
 }

 checkIsMaxImagesWithAlert(showAlert = true) {
  const { maxImages = 999 } = this.props;
  if (this.state.images.length >= maxImages) {
   if (showAlert) {
    Alert.alert(`最多可选择${maxImages}张照片! `);
   }
   return true;
  }
  return false;
 }

 onSelectImage(images) {
  // this.props.needMarker ? Marker.markText(images, '智慧消防').then((array) => {
  //   this.props.onSelectImage && this.props.onSelectImage(array);
  //   this.setState({
  //     images: array,
  //   })
  // }) : 
  this.props.onSelectImage && 
  this.props.onSelectImage(images),
  this.setState({
    images: images,
   });

  // this.props.onSelectImage(images)
 }

 render() {
  let {
   imageWidth,
   imageHeight,
   style,
   readOnly,
   hide,
   isAddFirst,
  //  addIcon='default'
   addIcon='phoBtn'
  } = this.props;
  imageWidth = imageWidth ? imageWidth : 100;
  imageHeight = imageWidth && imageHeight ? imageHeight : imageWidth;
  let addBtnIcon = pickerBtnIcon;
  if (addIcon == 'phoBtn') addBtnIcon = btnPhoIcon;
  return (
   <View style={[
    {
     backgroundColor: 'transparent',
     flexDirection: 'row',
     flexWrap: 'wrap', alignItems: 'center'
    },
    style
   ]}
   >
   
   {!isAddFirst && !hide && this.state.images && this._renderImages()}
    {/*添加图片按钮*/}
    {readOnly || this.checkIsMaxImagesWithAlert(false) || <TouchableOpacity
     onPress={this._selectImage.bind(this)}>

     
     <Image source={addBtnIcon}
      style={{
       height: imageHeight, width: imageWidth, backgroundColor: 'white',
       // borderWidth:1,
       // borderColor:'gray',
       ...(hide ? { display: 'none' } : {}),
       margin: 5,
       justifyContent: 'center',
       alignItems: 'center'
      }}
     >
     </Image>
    </TouchableOpacity>}

    {isAddFirst && !hide && this.state.images && this._renderImages()}

    <ActionSheet ref={o => this.ActionSheet = o}
     options={options}
     cancelButtonIndex={CANCEL_INDEX}
     onPress={(i) => {
      if (i == 2) {
       ImagePicker.openPicker({
        multiple: true,
        compressImageQuality: 0.5
       }).then(images => {
        // this.props.data.images = images;
        // if (images.length>3) {
        //  Alert.alert('最多可上传3张照片!');
        //  return;
        // }
        // this.state.images = this.state.images.concat(images);
        let pickedImages = this.state.images.concat(images);
        // this.setState({
        //  images: this.state.images,
        // });
        // 最大图片数限制
        let { maxImages } = this.props;
        if (pickedImages.length > maxImages) {
          const index = maxImages-1;
          const delNum = pickedImages.length - maxImages;
          // pickedImages = pickedImages.splice(maxImages-1, maxImages-pickedImages.length);
          pickedImages.splice(index, delNum);
        }

        this.onSelectImage(pickedImages);
        //onSelectImage && onSelectImage(this.state.images);
       });
      } else if (i == 1) {

       if (this.checkIsMaxImagesWithAlert()) { return; }

       this.imagePickerFromCamera();
      }
     }}

    />
    <Modal visible={this.state.displayImage} transparent={true}
     onRequestClose={() => { }}
    >
     <ImageViewer
      onClick={() => { this.setState({ displayImage: false }) }}
      index={this.state.selectedIndex}
      saveToLocalByLongPress={false}
      // enableSwipeDown={true}
      imageUrls={Array.isArray(this.state.images) && this.state.images.map((image) => {
       return { url: image.path || image };
      })} />
    </Modal>

   </View>
  );
 }

 _selectImage() {
  const { enableAlbum = true } = this.props;
  if (enableAlbum == false) {
   if (this.checkIsMaxImagesWithAlert()) return;
   this.imagePickerFromCamera();
   return;
  }
  this.ActionSheet.show();
 }

}

const styles = StyleSheet.create({

});

export default ImagePickerComponent;