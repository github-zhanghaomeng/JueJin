import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:amap_location/amap_location.dart';

class LocationDemo extends StatefulWidget {
  @override
  _LocationDemoState createState() => _LocationDemoState();
}

class _LocationDemoState extends State<LocationDemo> {

  double _longitude=0;
  double _latitude=0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _getLocation();
  }

  _getLocation() async {
    //启动一下
    await AMapLocationClient.startup(new AMapLocationOption( desiredAccuracy:CLLocationAccuracy.kCLLocationAccuracyHundredMeters));
   //获取地理位置
    var result = await AMapLocationClient.getLocation(true);
    // print(result);

    setState(() {
     this._latitude = result.latitude;
     this._longitude = result.longitude; 
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('获取地址'),),
      body: Column(
        children: <Widget>[
          Text('经度:${this._longitude}'),
          Text('纬度:${this._latitude}'),

        ],
      )
    );
  }
}