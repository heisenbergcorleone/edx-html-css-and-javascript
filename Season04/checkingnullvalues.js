var testvariable = null;
var isUndefined = (testvariable === undefined);
var isEmpty = (testvariable=== '');
var isNull = (testvariable === null)

document.getElementById('isUndefined').innerHTML= isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;
