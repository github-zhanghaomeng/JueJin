import 'package:flutter/material.dart';

import './widget/Home.dart';

import 'routes/Routes.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // home: Home(),
      initialRoute: '/',
      onGenerateRoute: onGenerateRoute,
    );
  }
}