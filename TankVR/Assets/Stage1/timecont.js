﻿#pragma strict

var MyStyle:GUIStyle;
var time = 120;

function Start(){
time = 120;
InvokeRepeating("timecont", 0, 1);
}

function OnGUI(){
GUI.Label(Rect(0,50,Screen.width,100),"Time:"+time,MyStyle);
}

function timecont(){
 time--;
 if(time == 0 && Score.scr >= 10 ){
 Application.LoadLevel("clear_St1");
 }
  if(time == 0 && Score.scr < 10 ){
 Application.LoadLevel("GameOver");
 }
}