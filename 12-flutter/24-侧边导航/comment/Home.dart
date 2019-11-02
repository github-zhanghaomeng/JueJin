import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('home'),
      ),
      body: Text('data'),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(icon: Icon(Icons.home), title: Text('首页')),
          BottomNavigationBarItem(icon: Icon(Icons.search), title: Text('搜索')),
          BottomNavigationBarItem(icon: Icon(Icons.add), title: Text('设置')),
        ],
      ),
      drawer: Drawer(
        child: Column(
          children: <Widget>[
            ListTile(
              leading: CircleAvatar(
                child: Icon(Icons.home),
                
              ),
              title: Text('我的'),
            ),
            ListTile(
              leading: CircleAvatar(
                child: Icon(Icons.people),
                
              ),
              title: Text('个人中心'),
            )
          ],
        ),
      ),
    );
  }
}
