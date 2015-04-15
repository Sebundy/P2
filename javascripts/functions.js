'use strict'
//requirement A

var isArmstrong = function(anum) {
	var result = 0;
	anum = String(anum);
	for (var i = 0; i < anum.length; ++i){
		digit = Math.pow(anum[i], anum.length)
		result += digit;
	}
	if (result == anum){
		return "true"
	} else {
		return "false"
	}
};

//requirement B

var isArmstrong2 = function(anum2) {
	var result = 0;
	anum2 = String(anum2);
	for (var i = 1; i < anum2.length; ++i){
		digit = Math.pow(anum2[i], anum2.length)
		result += digit;
	}
	if (result == anum2){
		return anum2
	} else {
		return "false"
	}
};

var allArmstrongs = function() {
	var resultString = "";
	for(var i = 0; i < 100000; i++){
		var anum2 = i
		var result = isArmstrong2(anum2);
		if(result !== "false"){
			resultString = resultString + " " + result;
		}
	}
	return resultString;
};

//requirement C

var allSubstrings1 = function(s) {
	for (var i = 0;)
}