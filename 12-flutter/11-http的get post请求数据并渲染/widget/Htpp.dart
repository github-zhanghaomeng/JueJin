import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'dart:convert';

class HttpDemo extends StatefulWidget {
  @override
  _HttpDemoState createState() => _HttpDemoState();
}

class _HttpDemoState extends State<HttpDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('获取数据'),),
      body: Text('data'),
    );
  }
}

