function add(){
	let request = new XMLHttpRequest();
	request.open('GET', 'http://localhost:3000/text');
	request.responseType = 'text';
	request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.onload = function() {
		  document.getElementById('Convertable').innerHTML = request.response;
	};
	request.send();
}
function speak(){
	var finalText = document.getElementById('Convertable').innerHTML;
	var inputText = document.getElementById('inputText').value;
	var msg = new SpeechSynthesisUtterance(finalText);
	var msg2 = new SpeechSynthesisUtterance(inputText);
	window.speechSynthesis.speak(msg);
	window.speechSynthesis.speak(msg2);
}
function stop(){
	window.speechSynthesis.cancel();
}
