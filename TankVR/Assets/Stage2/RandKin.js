#pragma strict

var kinman:GameObject;
var cont:int = 0;

function Start () {
	  InvokeRepeating("kinumi", 1, 1.5);
}

function kinumi(){

Instantiate(kinman,Vector3(Random.Range(-100f, 100f),0f,Random.Range(-100f, 100f)),  Quaternion.Euler(0,Random.Range(0, 360), 0));

}

