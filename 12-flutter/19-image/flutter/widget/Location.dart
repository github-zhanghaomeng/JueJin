import 'package:flutter/material.dart';


class LocationDemo extends StatefulWidget {
  @override
  _LocationDemoState createState() => _LocationDemoState();
}

class _LocationDemoState extends State<LocationDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('地址信息'),),
      body: Center(
        child: Text('data'),
      )
    );
  }
}