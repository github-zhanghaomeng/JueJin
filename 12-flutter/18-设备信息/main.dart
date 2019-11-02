import 'package:flutter/material.dart';

import 'package:device_info/device_info.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DeviceDemo(),
    );
  }
}

class DeviceDemo extends StatefulWidget {
  
 
  @override
  _DeviceDemoState createState() => _DeviceDemoState();
}

class _DeviceDemoState extends State<DeviceDemo> {

  @override
  void initState() {
    _getDeviceInfo();
    // TODO: implement initState
    super.initState();
  }

  _getDeviceInfo() async {
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
    print('设备号 ${androidInfo.androidId}');  
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('设备信息'),),
      body:Center(
        child: Text('看控制台,信息已经打印到控制台了'),
      )
    );
  }
}