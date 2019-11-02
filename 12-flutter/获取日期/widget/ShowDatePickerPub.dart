import 'package:flutter/material.dart';

import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';

import 'package:date_format/date_format.dart';

class ShowDatePickerPub extends StatefulWidget {
  @override
  _ShowDatePickerPubState createState() => _ShowDatePickerPubState();
}

class _ShowDatePickerPubState extends State<ShowDatePickerPub> {

  DateTime _dateTime = DateTime.now();
  void _showDatePicker() {
    DatePicker.showDatePicker(
      context,
      pickerTheme: DateTimePickerTheme(
        showTitle: true,
        confirm: Text('确认', style: TextStyle(color: Colors.red)),
        cancel: Text('取消', style: TextStyle(color: Colors.cyan)),
      ),
      minDateTime: DateTime.parse('1998-01-01'),
      maxDateTime: DateTime.parse('2020-12-22'),
      initialDateTime: _dateTime,
      dateFormat: 'yyyy-MMMM-dd',
      locale: DateTimePickerLocale.zh_cn,
      onClose: () => print("----- onClose -----"),
      onCancel: () => print('onCancel'),
      onChange: (dateTime, List<int> index) {
        setState(() {
          _dateTime = dateTime;
        });
      },
      onConfirm: (dateTime, List<int> index) {
        setState(() {
          _dateTime = dateTime;
        });
      },
    );
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('date')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          InkWell(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text('${formatDate(_dateTime,[yyyy,'-',mm,'-',dd])}'),
                Icon(Icons.arrow_drop_down)
              ],
             ),
            onTap: _showDatePicker,
          )
        ],
      ),
    );
  }
}
