import 'package:flutter/material.dart';
import './comment/Storage.dart';

class storage extends StatefulWidget {
  @override
  _storageState createState() => _storageState();
}

class _storageState extends State<storage> {


  _getData() async {
    var username = await Storage.getString('name');
    print(username);
  }

  _removeData() async {
    await Storage.remove('name');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('本地存储'),
      ),
      body: Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          RaisedButton(
            child: Text('保存数据'),
            //设置方法保存数据
            onPressed:() async {
              await Storage.setString('name', 'wangcai');
            },
          ),
          SizedBox(height: 10),
          RaisedButton(
            child: Text('获取数据'),
            onPressed: _getData,
          ),
          SizedBox(height: 10),
          RaisedButton(
            child: Text('清除数据'),
            onPressed: _removeData,
          )
        ]),
      ),
    );
  }
}
