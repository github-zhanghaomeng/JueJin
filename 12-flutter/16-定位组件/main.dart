import 'package:flutter/material.dart';
import 'package:myflutter1/main-bark.dart';

import './wigest/SelfText.dart';
import './wigest/SelfImage.dart';
import './wigest//SelfContainer.dart';
import './wigest/SelfImgContainer.dart';
import './wigest/SelfImgAssets.dart';



void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'hello',
      theme: ThemeData(
        primaryColor: Colors.yellow
      ),
      // home:Text('hello flutter')
      // home:HomePage()
      // home:SelfText()
      // home: SelfImage(),
      // home: SelfContainer(),
      // home: SelfImgContainer(),
      // home: SelfImgAsset(),
      home: new MyHomePage(title:'Flutter Demo'),
    );
  }
}
// class HomePage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('flutter'),
//         ),
//         body: Center(
//           child: Text('hello world'),
//         ),
//     );
//   }
// }

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key,this.title}) : super(key:key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  void _incrementCounter(){
    setState(() {
     _counter++; 
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: Center(
        child: Column(
          children: <Widget>[
            Text('You have pushed the button this many times:'),
            Text('$_counter')
          ],
          ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
         tooltip: 'Increment',
        child:Icon(Icons.add) ,
        ),
    );
  }
}