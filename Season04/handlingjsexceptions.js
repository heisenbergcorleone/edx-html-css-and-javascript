function correctMethodName() {
	return "Output Message";
}


try {
var result = wrongMethodName();

document.writeln(result);
}
catch (error) {
	document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
}
