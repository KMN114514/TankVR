#pragma strict

function OnCollisionEnter(WHO : Collision){
var He = WHO.gameObject;
var His_Tag = He.tag;
if(His_Tag == "bullet"){
Score.scr++;
Destroy(gameObject);
}

}