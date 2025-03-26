export default function taskBlock() {
  var task = false;
  var task2 = true;

  return [task, task2];
}

export default function taskBlock(trueOrFalse) {
	var task = false;
	var task2 = true;
  
	if (trueOrFalse) {
	  var task = true;
	  var task2 = false;
	}
  
	return [task, task2];
  }