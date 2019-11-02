import 'package:flutter/material.dart';

class SelfImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('hello flutter'),
      ),
      body: Center(
        child: Image(
          image: NetworkImage('https://cdn.jsdelivr.net/gh/flutterchina/website@1.0/images/flutter-mark-square-100.png'),
        ),
      ),
    );
  }
}