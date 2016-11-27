#pragma strict

var MyStyle:GUIStyle;

function OnGUI () {
	GUI.Label(Rect(0,30,Screen.width,100),"ゲームクリア！",MyStyle);
	GUI.Label(Rect(0,110,Screen.width,100),"倒した数："+Score.scr,MyStyle);
}
