import 'package:flutter/material.dart';

class MineDemo extends StatefulWidget {
  @override
  _MineDemoState createState() => _MineDemoState();
}

class _MineDemoState extends State<MineDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('mine'),),
      body: Text('mine'),
    );
  }
}