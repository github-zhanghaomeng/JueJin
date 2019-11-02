import 'package:flutter/material.dart';

class AddressList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text('收货地址列表')),
        body: ListView(
          padding: EdgeInsets.all(5),
          children: <Widget>[
            GestureDetector(
              onTap: (){
                Navigator.of(context).pop('旺财 北京市昌平区沙河镇北京科技经营管理学院');
              },
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.black26)),
                child: ListTile(
                  leading: Icon(Icons.home),
                  title: Text(
                    '旺财 北京市昌平区沙河镇北京科技经营管理学院',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 5,
            ),
            GestureDetector(
              onTap: (){
                Navigator.of(context).pop('小强 北京市昌平区沙河镇北京科技经营管理学院');
              },
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.black26)),
                child: ListTile(
                  leading: Icon(Icons.home),
                  title: Text(
                    '小强 北京市昌平区沙河镇北京科技经营管理学院',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 5,
            ),
            GestureDetector(
              onTap: (){
                Navigator.of(context).pop('张三 北京市昌平区沙河镇北京科技经营管理学院');
              },
              child: Container(
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.black26)),
                child: ListTile(
                  leading: Icon(Icons.home),
                  title: Text(
                    '张三 北京市昌平区沙河镇北京科技经营管理学院',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ),
            ),
          ],
        ));
  }
}
