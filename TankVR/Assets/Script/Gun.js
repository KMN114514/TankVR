#pragma strict

var BulletPrefab:GameObject;
var BF:int = 0;

function Update () {
	//if(Input.GetMouseButtonDown(0)){
	//	Fire();
	//}

	if (Input.GetKey("space") && BF == 0) {
			Fire();
			BF = 1;
			Invoke("activBF",3);
		}
}

function activBF(){
 BF = 0;
}



function Fire(){
	var bullet:GameObject = Instantiate(
	BulletPrefab,
	transform.position,
	transform.rotation
	);
	var rd:Rigidbody = bullet.GetComponent(Rigidbody);
	rd.AddForce(transform.up*50,ForceMode.VelocityChange);
}

