import 'dart:io';

import 'package:flutter/material.dart';

import 'package:image_picker/image_picker.dart';

import 'package:dio/dio.dart';

class ImageDemo extends StatefulWidget {
  
  @override
  _ImageDemoState createState() => _ImageDemoState();
}

class _ImageDemoState extends State<ImageDemo> {
  File _image;

  Future _getImage() async {
   var image = await ImagePicker.pickImage(source: ImageSource.camera);
   setState(() {
    this._image = image; 
   });
   _uploadImage(image);
   
  }

  _openGallery() async {
    var image = await ImagePicker.pickImage(source: ImageSource.gallery);
    setState(() {
      this._image = image;
    });
    _uploadImage(image);
  }

  _uploadImage(_imageDir) async {
    FormData formData = new FormData.from({
      "name": "zhangsna 6666666666",
      "age": 20,
      "sex":"男",
      "file":new UploadFileInfo(_imageDir, "xxx.jpg"),
    });
     var response = await Dio().post("http://192.168.1.101:3000/image", data: formData);

      print(response);
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('照片'),),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text('拍照'),
              onPressed: _getImage
            ),
            RaisedButton(
              child: Text('选择图片'),
              onPressed: _openGallery
            ),
            _buildImage()
          ],
      ),
      )
    );
  }

    //定义一个组件显示图片
  Widget _buildImage(){
      if(this._image==null){
        return Text("请选择图片...");
      }
      return Image.file(this._image);

  }
}



