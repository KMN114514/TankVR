#pragma strict

public var SE : AudioSource;


function OnCollisionEnter(WHO : Collision){
var He = WHO.gameObject;
var His_Tag = He.tag;
if(His_Tag == "bullet"){
			SE=GetComponent(AudioSource);
			SE.PlayOneShot(SE.clip);

	SE=GetComponent(AudioSource);
	SE.PlayOneShot(SE.clip);
	Score.scr++;
	
	Invoke("Des",10);
	transform.position += transform.right * 100000f;

}

}

function Des(){
	Destroy(gameObject);
}