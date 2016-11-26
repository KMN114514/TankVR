#pragma strict

var MyStyle:GUIStyle;
static var scr = 0;

function OnGUI(){
GUI.Label(Rect(0,0,Screen.width,100),"Score:"+scr,MyStyle);
}