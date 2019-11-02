import 'package:flutter/material.dart';

class AddressList extends StatelessWidget {
  final arguments;
  AddressList({this.arguments});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('addressList'),
      ),
      body: Center(
        child: Text('${arguments["id"]}'),
      ),
    );
  }
}