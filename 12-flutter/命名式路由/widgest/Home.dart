import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('home'),),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              child: Text('获取地址'),
              onPressed: (){
                Navigator.pushNamed(context, '/address');
              },
            ),
             RaisedButton(
              child: Text('获取地址列表'),
              onPressed: (){
                Navigator.pushNamed(context, '/addressList',arguments: {
                  'id':'0',
                });
              },
            )
          ],
        ),
      ),
    );
  }
}