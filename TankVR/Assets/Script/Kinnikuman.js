#pragma strict

var kinman:GameObject;
var cont:int = 0;

function Start () {
	  InvokeRepeating("kinumi", 1, 0.3);
}

function kinumi(){
	
	if(cont<100){
	Instantiate(kinman,Vector3(Random.Range(-100f, 100f),0f,100f),  Quaternion.Euler(0, 180, 0));
	Instantiate(kinman,Vector3(Random.Range(-100f, 100f),0f,-100f),  Quaternion.Euler(0, 0, 0));
	Instantiate(kinman,Vector3(-100f,0f,Random.Range(-100f, 100f)),  Quaternion.Euler(0, 90, 0));
	Instantiate(kinman,Vector3(100f,0f,Random.Range(-100f, 100f)),  Quaternion.Euler(0, -90, 0));
	}
	cont++;
}
