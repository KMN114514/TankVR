#pragma strict

var MyStyle:GUIStyle;
var time = 0;

function Start(){
time = 0;
InvokeRepeating("timecont", 0, 1);
}

function OnGUI(){
GUI.Label(Rect(0,30,Screen.width,100),"Time:"+time,MyStyle);
}

function timecont(){
 time++;
 if(time == 10){
 Application.LoadLevel("Stage2");
 }
}