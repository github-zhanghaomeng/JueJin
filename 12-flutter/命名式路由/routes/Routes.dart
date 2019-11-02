import 'package:flutter/material.dart';

import '../widgest/Home.dart';
import '../widgest/Address.dart';
import '../widgest/AddressList.dart';

final routes = {
  '/':(context)=>Home(),
  '/address':(context)=>Address(),
  '/addressList':(context,{arguments})=>AddressList(arguments:arguments)

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