import 'package:flutter/material.dart';

class WrapDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('wrap组件'),),
      body: Wrap(
      spacing: 10,
      
      children: <Widget>[
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
        RaisedButton(
          child: Text('第1集'),
          onPressed: (){},
        ),
      ],
    ),
    );
  }
}