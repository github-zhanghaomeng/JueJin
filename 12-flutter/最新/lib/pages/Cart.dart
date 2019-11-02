import 'package:flutter/material.dart';

class CartDemo extends StatefulWidget {
  @override
  _CartDemoState createState() => _CartDemoState();
}

class _CartDemoState extends State<CartDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Cart'),),
      body: Text('Cart'),
    );
  }
}