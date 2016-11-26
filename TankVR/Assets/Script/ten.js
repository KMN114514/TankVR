#pragma strict

var scr:int;
var MyStyle:GUIStyle;

function OnGUI () {
GUI.Label(Rect(0,0,Screen.width,100),"Score:"+scr,MyStyle);

}