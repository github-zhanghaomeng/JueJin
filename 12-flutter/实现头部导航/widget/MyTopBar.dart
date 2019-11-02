import 'package:flutter/material.dart';

class MyTopBar extends StatefulWidget {
  @override
  _MyTopBarState createState() => _MyTopBarState();
}

class _MyTopBarState extends State<MyTopBar> with  SingleTickerProviderStateMixin{
  
  TabController _controller;

  @override
  void initState(){
    _controller = TabController(length: 3,vsync: this);
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TabBar(
          controller: _controller,
          tabs: <Widget>[
            Tab(icon: Icon(Icons.directions_bike),),
            Tab(icon: Icon(Icons.directions_car),),
            Tab(icon: Icon(Icons.directions_subway),)
          ],
        ),
      ),
      body: TabBarView(
        controller: _controller,
        children: <Widget>[
          SelfHomePage(page:1),
          SelfHomePage(page:2),
          SelfHomePage(page:3)
        ],
      ),
    );
  }
}

class SelfHomePage extends StatelessWidget {
  int page;
  SelfHomePage({Key key, @required this.page}):super(key:key);
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text('page:$page',style: TextStyle(fontSize: 26),), 
    );
  }
}