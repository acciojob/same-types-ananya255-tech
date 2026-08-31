function isSameType(value1, value2) {
  //your js code here
	
	if(typeof(value1)==typeof(value2) || (isNaN(value1) && isNaN(value2))){
		return true
	}
	else{
		return false
	}
}



alert(isSameType(value1, value2));
