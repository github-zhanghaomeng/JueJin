import 'package:flutter/material.dart';

import 'package:chewie/chewie.dart';

class VideoDemo extends StatefulWidget {
  @override
  _VideoDemoState createState() => _VideoDemoState();
}

class _VideoDemoState extends State<VideoDemo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('视频播放'),),
      body: Center(
        child: Text('video'),
      ),
    );
  }
}