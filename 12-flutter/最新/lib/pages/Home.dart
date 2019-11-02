import 'package:flutter/material.dart';

class HomeDemo extends StatefulWidget {
  @override
  _HomeDemoState createState() => _HomeDemoState();
}

class _HomeDemoState extends State<HomeDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('home'),),
      body: Text('home'),
    );
  }
}