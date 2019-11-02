import 'package:flutter/material.dart';

class SelfText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('flutter'),
      ),
      body: Center(
        child: Text(
          'hello dart hello dart hello dart hello dart',
          style:TextStyle(
            fontSize: 30,
            color: Colors.red,
            letterSpacing: 2,
            fontWeight: FontWeight.w800
          ),
          overflow: TextOverflow.ellipsis,
          ),
      ),
    );
  }
}