import 'package:flutter/material.dart';

import '../../pages/Home.dart';
import '../../pages/Mine.dart';
import '../../pages/Cart.dart';
import '../../pages/CateGory.dart';
class TabsDemo extends StatefulWidget {
  @override
  _TabsDemoState createState() => _TabsDemoState();
}

class _TabsDemoState extends State<TabsDemo> {
  int _currentIndex = 1;
  List _pages = [
    HomeDemo(),
    CateGoryDemo(),
    CartDemo(),    
    MineDemo(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('淘宝网'),),
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index){
          setState(() {
          //  print(index);
           this._currentIndex = index;
            // print(_currentIndex); 
          });
        },
        
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text('首页')
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.category),
            title: Text('分类')
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            title: Text('购物车')
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.people),
            title: Text('我的')
          )
        ],
      ),
    );
  }
}