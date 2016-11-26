#pragma strict

var MyStyle:GUIStyle;

function OnGUI () {
	GUI.Label(Rect(0,30,Screen.width,100),"これが私の戦車道",MyStyle);
}

