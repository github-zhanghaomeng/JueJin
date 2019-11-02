import 'package:flutter/material.dart';

import 'package:date_format/date_format.dart';

class ShowDatePicker extends StatefulWidget {
  @override
  _ShowDatePickerState createState() => _ShowDatePickerState();
}

class _ShowDatePickerState extends State<ShowDatePicker> {

  DateTime _nowDate = DateTime.now();
  _showDatePicker()async{
    var result = await showDatePicker(
      context: context,
      initialDate: _nowDate,
      firstDate: DateTime(1998),
      lastDate: DateTime(2020),
    );
    // print(result);
    setState(() {
      _nowDate = result;
    });
  }

  TimeOfDay _nowTime = TimeOfDay.now();
  _showTimePicker(){
    showTimePicker(
      context: context,
      initialTime: _nowTime
    ).then((result){
      setState(() {
        _nowTime = result;
    });
      // print(result);
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('日期')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          InkWell(
            child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[Text('${formatDate(_nowDate,[yyyy,'-',mm,'-',dd])}'), Icon(Icons.arrow_drop_down)],
          ),
          onTap: _showDatePicker,
          ),
          InkWell(
            child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[Text('${_nowTime.format(context)}'), Icon(Icons.arrow_drop_down)],
          ),
          onTap: _showTimePicker,
          )
        ],
      ),
    );
  }
}
