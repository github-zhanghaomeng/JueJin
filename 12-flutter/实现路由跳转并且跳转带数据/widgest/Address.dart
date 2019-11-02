import 'package:flutter/material.dart';

import './AddressList.dart';

class Address extends StatefulWidget {
  @override
  _AddressState createState() => _AddressState();
}

class _AddressState extends State<Address> {
  String _ads = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('收货地址'),),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              onPressed: ()async{
                var ads = await Navigator.of(context).push(
                  MaterialPageRoute(builder: (BuildContext context){
                    return AddressList();
                  }
                )
                );
                // print(_ads);
                setState(() {
                  _ads = ads;
                });
              },
              child: Text('选择收货地址'),
              textTheme: ButtonTextTheme.primary,
              color: Theme.of(context).accentColor,
            ),
            Text("${_ads=='' ? '未发现收货地址' : _ads}")
          ],
        ),
      ),
    );
  }
}