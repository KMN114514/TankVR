#pragma strict


var ExplosionPrefab:GameObject;
public var SE : AudioSource;

function OnCollisionEnter (WHO : Collision) {

			SE=GetComponent(AudioSource);
			SE.PlayOneShot(SE.clip);

	Instantiate(

		ExplosionPrefab,

		transform.position,

		transform.rotation

	);

	Invoke("Des",10);
	
	transform.position += transform.right * 100000f;
	
}

function Des(){
	Destroy(gameObject);
}
