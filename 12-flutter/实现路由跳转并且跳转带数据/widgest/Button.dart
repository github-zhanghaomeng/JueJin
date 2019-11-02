import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Button extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('按钮练习'),
        leading: IconButton(
          icon: Icon(Icons.menu),
        ),
        actions: <Widget>[Icon(Icons.search)],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                child: Text('普通按钮'),
                onPressed: () {
                  print('普通按钮');
                },
              ),
              SizedBox(width: 5,),
              RaisedButton(
                child: Text('颜色按钮'),
                color: Colors.blue,
                textColor: Colors.white,
                onPressed: () {
                  print('颜色按钮');
                },
              ),
              SizedBox(width: 5,),
              RaisedButton(
              child: Text('阴影按钮'),
              color: Colors.blue,
              textColor: Colors.white,
              elevation: 10,
              onPressed: () {
                print('阴影按钮');
              },
            )
            ],
          ),
          Row(
            children: <Widget>[
              RaisedButton.icon(
                icon: Icon(Icons.search),
                label: Text('图标按钮'),
                color: Colors.pink,
                textColor: Colors.white,
                onPressed: (){
                  print('图标按钮');
                },
              ),
             SizedBox(width: 5,),
             Container(
                  width: 200,
                  height: 50,
                  child: RaisedButton(
                    child: Text('自定义按钮'),
                    color: Colors.blue,
                    textColor: Colors.white,
                    onPressed: (){
                      print('自定义按钮');
                    },
                  ),

                ),
              
            ],
          ),
          SizedBox(width: 5,),
          Row(
            children: <Widget>[
              Expanded(
               child: Container(
                  height: 50,
                  child: RaisedButton(
                  child: Text('自适应按钮'),
                  color: Colors.pink,
                  textColor: Colors.white,
                  onPressed: (){
                    print('自适应按钮');
                  },
                ),
               ),
              )
            ],
          ),
          Row(
            children: <Widget>[
              RaisedButton(
                child: Text('圆角按钮'),
                color: Colors.yellow,
                textColor: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10)
                ),
                onPressed: (){},
              ),
              Container(
                height: 80,
                child:RaisedButton(
                  child: Text('圆形按钮'),
                  color: Colors.yellow,
                  textColor: Colors.white,
                  shape: CircleBorder(
                    side: BorderSide(color: Colors.blue)
                  ),
                  onPressed: (){},
              )
              )
            ],
          )
        ],
      ),
    );
  }
}
