import 'package:flutter/material.dart';

import './widgest/MyHomePage.dart';

void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'hello',
      color: Colors.blue,
      theme: ThemeData(
        primaryColor: Colors.yellow
      ),
      // home: MyHomePage(),
      home: MyHomePage(title:'Flutter Demo Home Page'),
    );
  }
}

// class MyHomePage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: Text('hello flutter')),
//       body: Center(
//         child: Text(
//           'hellohellohellohellohellohellohellohellohellohellohellohello',
//           style: TextStyle(
//             color: Colors.red,
//             fontSize: 40,
//             fontWeight: FontWeight.w800
//           ),
//           overflow: TextOverflow.ellipsis,
//           maxLines: 1,
//           ),
//       ),
//     );
//   }
// }