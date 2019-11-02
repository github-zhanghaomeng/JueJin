import 'package:flutter/material.dart';

import 'package:dio/dio.dart';
import 'dart:convert';
class Mine extends StatefulWidget {
  @override
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Mine> {
  List _list = [];
  @override
  Widget build(BuildContext context) {
   return Scaffold(
      body: ListView.builder(
              itemCount: _list.length,
              itemBuilder: (BuildContext context,int i){
                return Text('${_list[i]}');
              }),
      floatingActionButton: FloatingActionButton(
          onPressed: ()async{
            // print(666);
            String url = 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0';
            Response response = await Dio().get(url);
            // print(response);
            Map<String,dynamic> responseData = json.decode(response.toString());
            // print(responseData['subjects']);
            setState(() {
              _list = responseData['subjects'];
            });
            // print(_list);
            },
          child: Icon(Icons.add),
        ),
   );
  
  }
}
















 // return Container(
                //   padding: EdgeInsets.all(10),
                //   height: 100,
                //   width: 80,
                //   child: Row(
                //     children: <Widget>[
                //       Image.network('${_list[i]["poster"]}'),
                //       SizedBox(width: 10),
                //       Container(
                //         width: 180,
                //         child: Column(
                //           crossAxisAlignment: CrossAxisAlignment.start,
                //           children: <Widget>[
                //             Text(
                //               '${_list[i]["name"]}',
                //               style: TextStyle(
                //                 fontWeight: FontWeight.w600,
                //                 fontSize: 18,
                //               ),
                //             ),
                //             Text(
                //               '类型:${_list[i]["category"]}',
                //               style: TextStyle(
                //                 fontSize: 16,
                //                 color: Colors.grey
                //                 ),
                //               )
                //           ],
                //         ),
                //       ),
                //       SizedBox(
                //         width: 10,
                //       ),
                //       Container(
                //         width: 70,
                //         height: 28,
                //         child: RaisedButton(
                //           child: Text('预售'),
                //           color: Colors.blue,
                //           textColor: Colors.white,
                //           onPressed: () {},
                //           shape: RoundedRectangleBorder(
                //             borderRadius: BorderRadius.circular(5)
                //           ),
                //         ),
                //       )
                //     ],
                //   ),
                // );














                 // ListView.builder(
            //   itemCount: _list.length,
            //   itemBuilder: (BuildContext context, int i) {
                // return Image.network('${_list[i]}');
            //   },
            // ),