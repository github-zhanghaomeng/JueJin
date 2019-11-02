import 'package:flutter/material.dart';

import 'package:dio/dio.dart';
import 'dart:convert';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {

  void _getData() async {
    Response response = await Dio().get('http://192.168.1.101:3000/api/news');
    print(response.data);
  }

  void _postData() async {
    Response response = await Dio().post('http://192.168.1.101:3000/api/news/add',data:{
      'title':'add2',
      'content':'add2',
      'describe':'add2',
      'author':'add2',
      'newsType':'add2'
    });
    print(response);
  }

  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('home'),),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text('get 获取数据'),
              onPressed: _getData,
            ),
            RaisedButton(
              child: Text('post 获取数据'),
              onPressed: _postData,
            ),
            RaisedButton(
              child: Text('获取数据并且渲染'),
              onPressed: (){
                Navigator.pushNamed(context, '/newslist');
              },
            )
          ],
        ),
      ),
    );
  }
}