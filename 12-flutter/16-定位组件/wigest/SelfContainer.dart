import 'package:flutter/material.dart';

class SelfContainer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('hello')),
      body: Container(
        // child: Text('flutter'),
        width: 200,
        height: 200,
        margin: EdgeInsets.all(20),
        padding: EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.blue
        ),
      ),
    );
  }
}