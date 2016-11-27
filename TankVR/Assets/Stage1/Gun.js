#pragma strict

var BulletPrefab:GameObject;
var BF:int = 0;
public var SE : AudioSource;



function Update () {
	//if(Input.GetMouseButtonDown(0)){
	//	Fire();
	//}

	if (Input.GetKey("space") && BF == 0) {
			SE=GetComponent(AudioSource);
			SE.PlayOneShot(SE.clip);
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

