import 'package:flutter/material.dart';

import './widget/Movie.dart';
import './widget/Cinema.dart';
import './widget/Mine.dart';



class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  List PageList = <Widget>[
    Movie(),
    Cinema(),
    Mine()
  ]; 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
         title: Text('猫眼电影'),
         centerTitle: true,
         backgroundColor: Colors.orange
         ),
        body: this.PageList[this._currentIndex],
        bottomNavigationBar: BottomNavigationBar(
            selectedItemColor:Colors.red,
            currentIndex: this._currentIndex,
           onTap: (int index){
            // 点击第1个，index的值是0  点击第2个index的值是1  点击第3个index的值2
              setState(() {
              this._currentIndex = index;
              });
            },
            items: [
              BottomNavigationBarItem(
                  title: Text('电影'), icon: Icon(Icons.home)),
                  
              BottomNavigationBarItem(
                  title: Text('影院'), icon: Icon(Icons.search)),
              BottomNavigationBarItem(
                  title: Text('我的'), icon: Icon(Icons.settings))
            ]),
    );
  }
}
