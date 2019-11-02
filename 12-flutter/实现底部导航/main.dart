import 'package:flutter/material.dart';

import './Tabs.dart';




void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Tabs()
    );
  }
}

// class TabBar extends StatefulWidget {
//   @override
//   _TabBarState createState() => _TabBarState();
// }

// class _TabBarState extends State<TabBar> {
//   int _currentIndex = 0;
//   List PageList = <Widget>[
//     Home(),
//     Search(),
//     Settings()
//   ]; 
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//        appBar: AppBar(title: Text('hello')),
//         body: this.PageList[this._currentIndex],
//         bottomNavigationBar: BottomNavigationBar(
//             currentIndex: this._currentIndex,
//            onTap: (int index){
//             // 点击第1个，index的值是0  点击第2个index的值是1  点击第3个index的值2
//               setState(() {
//               this._currentIndex = index;
//               });
//             },
//             items: [
//               BottomNavigationBarItem(
//                   title: Text('首页'), icon: Icon(Icons.home)),
//               BottomNavigationBarItem(
//                   title: Text('搜索'), icon: Icon(Icons.search)),
//               BottomNavigationBarItem(
//                   title: Text('设置'), icon: Icon(Icons.settings))
//             ]),
//     );
//   }
// }
