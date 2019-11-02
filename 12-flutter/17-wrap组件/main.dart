import 'package:flutter/material.dart';

import './Widget/Wrap.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: WrapDemo(),
    );
  }
}

