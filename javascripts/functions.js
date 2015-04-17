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
	var n = s.length;
	result = "";
	for(i = 0; i < n; i++){
		for(k = i; k < n; k++){
			result += s.substring(i, k + 1) + ", ";
		}
	}
	return result.substring(0, result.length - 2);
}

//requirement D

var allSubstrings2 = function(s) {
	var n = s.length;
	result = [];
	for(i = 0; i < n; i++){
		for(k = i; k < n; k++){
			result.push(s.substring(i, k + 1));
		}
	}
	return result;
}

//requirement E

var maxWord = function(s) {
	var maxWord = "";
	var stringArray = s.split(" ");
	for(i = 0; i < stringArray.length; i++){
		if(stringArray[i].length > maxWord.length){
			maxWord = stringArray[i];
		}
	}
	return maxWord;
}
