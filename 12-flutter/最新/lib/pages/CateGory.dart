import 'package:flutter/material.dart';

class CateGoryDemo extends StatefulWidget {
  @override
  _CateGoryDemoState createState() => _CateGoryDemoState();
}

class _CateGoryDemoState extends State<CateGoryDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('category'),),
      body: Text('category'),
    );
  }
}