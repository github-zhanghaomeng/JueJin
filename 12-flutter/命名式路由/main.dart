import 'package:flutter/material.dart';

import './widgest/Address.dart';
import './widgest/Home.dart';
// import './widgest/Button.dart';

import './routes/Routes.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home: Button(),
      initialRoute: '/',
      onGenerateRoute: onGenerateRoute,
      
    );
  }
}