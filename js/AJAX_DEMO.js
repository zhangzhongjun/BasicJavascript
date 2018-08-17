var request
if(window.XMLHttpRequest){
	//IE7 FireFox Chrome Opera Safari
	request = new XMLHttpRequest(); 
}else{
	//IE6 IE5
	request = new ActiveXObject("Microsoft.XMLHTTP")
}