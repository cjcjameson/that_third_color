window.onload = function(){
	$(".submit").click(generateThirdColor);
}

var generateThirdColor = function() {
	var inputColors = $("form").serializeArray();
	var color1 = inputColors[0].value;
	var color2 = inputColors[1].value;
	var color3 = calculateThirdColor(color1, color2);
	showThirdColor(color3);
}

var calculateThirdColor = function(color1, color2) {
	return "#dddd99";
}

var showThirdColor = function(thirdColor) {
	$(".output").css("visibility","visible");
	$(".output").html(thirdColor);
	$(".output").css("background-color",thirdColor);
	if (isLight(thirdColor)) {
		$(".output").css("color","#000000");
	}
}

var isLight = function(color) {
	return true;
}