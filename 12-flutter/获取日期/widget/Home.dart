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
      // body: Text('hello'),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text('获取日期(内置)'),
              onPressed: (){
                Navigator.pushNamed(context, '/date');
              },
            ),
             RaisedButton(
              child: Text('获取日期(第三方)'),
              onPressed: (){
                Navigator.pushNamed(context, '/datePub');
              },
            )
          ],
        ),
      ),
    );
  }
}