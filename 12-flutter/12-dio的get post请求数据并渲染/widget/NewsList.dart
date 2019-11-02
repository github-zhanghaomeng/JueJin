import 'package:flutter/material.dart';

import 'package:dio/dio.dart';
import 'dart:convert';

class NewsList extends StatefulWidget {
  @override
  _NewsListState createState() => _NewsListState();
}

class _NewsListState extends State<NewsList> {
  List _list = [];
  @override
  void initState() {
    // TODO: implement initState
    this.getData();
    super.initState();
  }
  void getData() async {
    Response response = await Dio().get('http://192.168.1.101:3000/api/news');
    // print(json.encode(response.data) is Map);
    setState(() {
     this._list = response.data; 
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('新闻列表'),),
      body: Container(
        child: ListView.builder(
          itemCount: _list.length,
          itemBuilder: (context,index){
            return ListTile(
              title: Text('${_list[index]["title"]}'),
            );
          },
        ),
      ),
    );
  }
}