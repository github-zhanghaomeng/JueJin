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
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
            child: Text('跳转到定位组件'),
            onPressed: (){
              Navigator.pushNamed(context, '/location');
            },
          ),
          RaisedButton(
            child: Text('跳转到拍照组件'),
            onPressed: (){
              Navigator.pushNamed(context, '/image');
            },
          )
          ],
        ),
      ),
    );
  }
}