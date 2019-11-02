import 'package:flutter/material.dart';

class SelfImgContainer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('flutter')),
      body: Center(
        child: Container(
          width: 200,
          height: 200,
          decoration: BoxDecoration(
            color: Colors.yellow
          ),
          child: Image(
            image: NetworkImage('https://cdn.jsdelivr.net/gh/flutterchina/website@1.0/images/flutter-mark-square-100.png'),
            // fit: BoxFit.fill, //会拉长
            // fit:BoxFit.cover //全面铺开 会占满整个container
            // fit: BoxFit.fitHeight,
            // fit: BoxFit.fitWidth,
            fit: BoxFit.contain, //以最合适的呈现到container
          ),
        ),
      ),
    );
  }
}