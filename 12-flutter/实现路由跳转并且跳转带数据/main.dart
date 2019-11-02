import 'package:flutter/material.dart';

import './widgest/Address.dart';
// import './widgest/Button.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home: Button(),
      home: Address(),
    );
  }
}