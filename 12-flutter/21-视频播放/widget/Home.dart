import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('home'),),
      body: Center(
      child: RaisedButton(
        child: Text('跳转到视频组件'),
        onPressed: (){
          Navigator.pushNamed(context, '/video');
        },
      ),
    ),
    );
  }
}