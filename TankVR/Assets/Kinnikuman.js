#pragma strict

var kinman:GameObject;

function Start () {
	  InvokeRepeating("kinumi", 1, 0.5);
}

function kinumi(){
	Instantiate(kinman,Vector3(Random.Range(-100f, 100f),0f,100f),  Quaternion.Euler(0, 180, 0));
}
