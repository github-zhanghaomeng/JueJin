import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class SelfHttpRequest extends StatefulWidget {
  @override
  _SelfHttpRequestState createState() => _SelfHttpRequestState();
}

class _SelfHttpRequestState extends State<SelfHttpRequest> {
  List _list = [];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('http请求数据'),),
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
          http1();
        },
      ),
    );
  }

  http1()async{
    String url = "http://m.maoyan.com/ajax/movieOnInfoList";
    http.Response response = await http.get(url);
    // print(response);  //I/flutter ( 3554): Instance of 'Response'
    // print(response.body);
    Map<String,dynamic> responseData = json.decode(response.body);
    // print(responseData['movieList']);

    setState(() {
     _list = responseData['movieList']; 
    });
    // print(_list);
  }
}