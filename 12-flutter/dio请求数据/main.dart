import 'package:flutter/material.dart';

import './SelfDioRequest.dart';

void main(){
  runApp(MyApp());
}
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SelfDioRequest(),
    );
  }
}