import 'package:flutter/material.dart';

import '../widget/Home.dart';
import '../widget/Location.dart';
import '../widget/ImagePicker.dart';

final routes = {
  '/':(context)=>Home(),
  '/location':(context)=>LocationDemo(),
  '/image':(context)=>ImageDemo()
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