import 'package:flutter/material.dart';

import '../widget/Home.dart';
import '../widget/ShowDatePicker.dart';
import '../widget/ShowDatePickerPub.dart';

final routes = {
  '/':(context)=>Home(),
  '/date':(context)=>ShowDatePicker(),
  '/datePub':(context)=>ShowDatePickerPub()
};

var onGenerateRoute=(RouteSettings settings) {
      // 统一处理
      final String name = settings.name; 
      final Function pageContentBuilder = routes[name];
      if (pageContentBuilder != null) {
        if (settings.arguments != null) {
          final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context, arguments: settings.arguments));
          return route;
        }else{
            final Route route = MaterialPageRoute(
              builder: (context) =>
                  pageContentBuilder(context));
            return route;
        }
      }
};



