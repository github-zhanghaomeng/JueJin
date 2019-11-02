import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'dart:convert';

class NewsList extends StatefulWidget {
 
  @override
  _NewsListState createState() => _NewsListState();
}

class _NewsListState extends State<NewsList> {
  List _list = [];
  _getData() async {
    http.Response response = await http.get('https://movie.douban.com/j/search_subjects?type=movie&tag=热门&page_limit=50&page_start=0');
    // print(json.decode(response.body)['subjects']);
    setState(() {
      _list = json.decode(response.body)['subjects'];
      // print(_list);
    });

  }
  @override
  void initState() {
    // TODO: implement initState
    this._getData();
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('新闻列表'),),
      body: Center(
        child: Container(
         
          child: ListView.builder(
            itemCount: _list.length,
            itemBuilder: (context,index){
              return ListTile(
                leading: Image.network('${_list[index]["cover"]}', width: 100),
                title: Text('${_list[index]["title"]}'),
              );

            },
          ),
 
        ),
      ),
    );
  }
}