import 'package:flutter/material.dart';
import 'package:myflutter/widget/NewsList.dart';

import '../widget/Home.dart';

import '../widget/Htpp.dart';
import '../widget/NewsList.dart';


final routes = {
  '/':(context)=>Home(),
  '/getdata':(context)=>HttpDemo(),
  '/newslist':(context)=>NewsList()
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



