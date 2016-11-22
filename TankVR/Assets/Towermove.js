#pragma strict


function Update () {
		if (Input.GetKey("right")) {
			transform.Rotate(0, 0, 1);
		}
		if (Input.GetKey ("left")) {
			transform.Rotate(0, 0, -1);
		}
}