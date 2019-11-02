import 'package:flutter/material.dart';

import 'package:dio/dio.dart';
import 'dart:convert';

class Movie extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Movie> {
  List _list = [];
  List _list1 = [];

  @override
  void initState() {
    getData();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.white,
          title: Row(children: <Widget>[
            Expanded(
              flex: 1,
              child: Text(
                '北京',
                style: TextStyle(fontSize: 16, color: Colors.black),
              ),
            ),
            Expanded(
                flex: 3,
                child: TabBar(
                  indicatorColor: Colors.red,
                  indicatorSize: TabBarIndicatorSize.label,
                  labelColor: Colors.red,
                  unselectedLabelColor: Colors.black,
                  tabs: <Widget>[
                    Tab(
                      text: '正在上映',
                    ),
                    Tab(
                      text: '即将上映',
                    ),
                  ],
                )),
            Expanded(
              flex: 1,
              child: Icon(
                Icons.search,
                color: Colors.black,
              ),
            )
          ]),
        ),
        body: TabBarView(
          children: <Widget>[
            ListView.builder(
              itemCount: _list.length,
              itemBuilder: (BuildContext context, int i) {
                // return Image.network('${_list[i]["cover"]}');
                return Container(
                  padding: EdgeInsets.all(10),
                  height: 100,
                  width: 80,
                  child: Row(
                    children: <Widget>[
                      Image.network('${_list[i]["cover"]}'),
                      SizedBox(width: 20),
                      Container(
                        decoration: BoxDecoration(
                          border: Border(bottom: BorderSide(width: 1,color: Colors.grey))
                        ),
                        width: 180,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              '${_list[i]["title"]}',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                fontSize: 18,
                              ),
                            ),
                            Text(
                              '评分:${_list[i]["rate"]}',
                              style:
                                  TextStyle(fontSize: 16, color: Colors.grey),
                            ),
                             Text(
                              '主演:${_list[i]["title"]}',
                              style:
                                  TextStyle(fontSize: 16, color: Colors.grey),
                            )
                          ],
                        ),
                      ),
                      SizedBox(
                        width: 10,
                      ),
                      Container(
                        
                        decoration: BoxDecoration(
                          border: Border(bottom: BorderSide(width: 1,color: Colors.grey)),
                          
                        ),
                        width: 70,
                        height: 28,
                        child: RaisedButton(
                          child: Text('${_list[i]["is_new"]==true ? "购票" : "预售"}'),
                          color: _list[i]['is_new']==true ? Colors.blue : Colors.red,
                          textColor: Colors.white,
                          onPressed: () {},
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(5)),
                        ),
                      )
                    ],
                  ),
                );
              },
            ),
           ListView(
             children: <Widget>[
               ListTile(title: Text('1'),)
             ],
           )
          ],
        ),
      ),
    );
  }

  getData() async {
    // print(666);
    String url =
        'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0';
    Response response = await Dio().get(url);
    // print(response);
    Map<String, dynamic> responseData = json.decode(response.toString());
    // print(responseData['subjects']);
    setState(() {
      _list = responseData['subjects'];
      _list1 = responseData['subjects'];

    });
    print(_list1);
  }
}
