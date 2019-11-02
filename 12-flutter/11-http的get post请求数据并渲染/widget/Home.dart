import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'dart:convert';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {

  void _getData() async{
    // print('hello');
    var apiUrl = "http://192.168.1.101:3000/api/news";
    var result = await http.get(apiUrl);
    print(json.decode(result.body));
    // print(result.body is String);
    // print(json.decode(result.body) is Map);

  }

  void _postData() async {
    var apiUrl = 'http://192.168.1.101:3000/api/news/add';
    var result = await http.post(apiUrl,body:{
      'title':'add1',
      'content':'add',
      'newsType':'add',
      'author':'add',
      'describe':'add'

    });
    print(json.decode(result.body));
  }

  void _postDataRender(){
    Navigator.pushNamed(context, '/newslist');
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
              child: Text('get 请求数据'),
              onPressed: _getData
            ),
            RaisedButton(
              child: Text('post 请求数据'),
              onPressed: _postData
            ),
             RaisedButton(
              child: Text('post 请求数据并渲染'),
              onPressed: _postDataRender
            )
          ],
        ),
      ),
    );
  }
}







