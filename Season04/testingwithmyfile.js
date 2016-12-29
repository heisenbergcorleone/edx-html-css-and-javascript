var storingTextValue = function () {
	var stText = document.getElementsByName('position')[0].value;
 	storeInCookie('position ',stText);
};




var storeInCookie = function (n,value) {
	document.cookie +=(n + value);
	window.alert(n + value);
};





var storingRadioValue = function () {
var stRad;
var tempArray = document.getElementsByName('department');

  	for (var i = 0 ; i < tempArray.length ; i++) {
  		if (tempArray[i].checked) {

  			stRad = tempArray[i].value;
  			break;
  		}
	}
 storeInCookie('department ',stRad);

}
