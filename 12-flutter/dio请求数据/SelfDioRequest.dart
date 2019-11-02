import 'package:flutter/material.dart';

import 'dart:convert';
import 'package:dio/dio.dart';

class SelfDioRequest extends StatefulWidget {
  @override
  _SelfDioRequestState createState() => _SelfDioRequestState();
}

class _SelfDioRequestState extends State<SelfDioRequest> {
  List _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('dio请求数据'),
      ),
      body: ListView.builder(
        itemCount: _list.length,
        itemBuilder: (BuildContext context,int i){
          return Text('${_list[i]["nm"]}');
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: (){
          // print(666);
          dio1();
        },
      ),
    );
  }
  dio1() async{
    String url = 'http://m.maoyan.com/ajax/movieOnInfoList';
    Response response = await Dio().get(url);
    // print(response);
    Map<String,dynamic> responseData = json.decode(response.toString());
    // print(responseData['movieList']);
    setState(() {
     _list = responseData['movieList']; 
    });

  }
}