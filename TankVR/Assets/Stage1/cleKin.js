#pragma strict

var kinman:GameObject;

function Start () {
	InvokeRepeating("kinumi", 1, 0.5);
}

function kinumi(){

	Instantiate(kinman,Vector3(0f,0f,10f),  Quaternion.Euler(0, 180, 0));

}


