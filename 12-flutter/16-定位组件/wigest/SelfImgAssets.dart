import 'package:flutter/material.dart';

class SelfImgAsset extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('hello')),
      body: Center(
        child: Container(
          width: 200,
          height: 200,
          child: Image(
          image: AssetImage('images/logo.jpg'),
        ),
        ) 
      ),
    );
  }
}