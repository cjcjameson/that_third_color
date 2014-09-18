window.onload = function(){
	
	$(".submit").click(generateThirdColor);
}

var generateThirdColor = function() {
	var inputColors = $("form").serializeArray();
	var thirdColor = calculateThirdColor(inputColors[0].value, inputColors[1].value);
	$(".output").css("visibility","visible");
	$(".output").html(thirdColor);
	$(".output").css("background-color",thirdColor);
	if (isLight(thirdColor)) {
		$(".output").css("color","#000000");
	}
}

var calculateThirdColor = function(color1, color2) {
	return "#dddd99";
}

var isLight = function(color) {
	return true;
}