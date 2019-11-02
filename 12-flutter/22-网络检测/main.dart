import 'package:flutter/material.dart';

import 'package:connectivity/connectivity.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: NetworkDemo(),
    );
  }
}

class NetworkDemo extends StatefulWidget {
  @override
  _NetworkDemoState createState() => _NetworkDemoState();
}

class _NetworkDemoState extends State<NetworkDemo> {
  var subscription;
  String _stateText;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    subscription = Connectivity().onConnectivityChanged.listen((ConnectivityResult result) {
      if(result == ConnectivityResult.wifi){
        _stateText = '处于wifi';
      }else if(result == ConnectivityResult.mobile){
        _stateText = '处于4g';
      }else{
        _stateText = '没有网络';
      }
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('测试网络'),),
      body: Center(
        child: Text('${_stateText}'),
      ),
    );
  }
}