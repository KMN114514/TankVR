#pragma strict

var kinman:GameObject;
var cont:int = 0;

function Start () {
	  InvokeRepeating("kinumi", 1, 0.3);
}

function kinumi(){
	
	if(cont<50){
	Instantiate(kinman,Vector3(Random.Range(-150f, 150f),0f,150f),  Quaternion.Euler(0, 180, 0));//down
	Instantiate(kinman,Vector3(Random.Range(-150f, 150f),0f,-150f),  Quaternion.Euler(0, 0, 0));//up
	Instantiate(kinman,Vector3(-150f,0f,Random.Range(-150f, 150f)),  Quaternion.Euler(0, 90, 0));//right
	Instantiate(kinman,Vector3(150f,0f,Random.Range(-150f, 150f)),  Quaternion.Euler(0, -90, 0));//left
	}
	cont++;
}
