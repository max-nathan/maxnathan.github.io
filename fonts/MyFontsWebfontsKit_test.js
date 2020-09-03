
if (typeof(customPath) == 'undefined') {
	customPath = false;
}
if (customPath) {
	var	path = customPath;
}
else {
	var scripts = document.getElementsByTagName("SCRIPT");
	var script = scripts[scripts.length-1].src;

	if (!script.match("://") && script.charAt(0) != '/')
		script = "./"+script;
		
	var path = script.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');
}

document.write("<style type='text/css'>\n");
document.write(".error {color:red; font-weight:bold;}\n .soft_error {color:red;}\n .success {color:green;}\n");
document.write("</style>");

function addtoDiv(id,className,text) {
var wft = document.getElementById("Webfont_Test");
var newDiv = document.createElement("div");
newDiv.id = id
newDiv.className = className;
var txt = document.createTextNode(text);
newDiv.appendChild(txt);
wft.appendChild(newDiv);
}

window.onload = function() {
var body = document.getElementsByTagName('body')[0];
body.innerHTML = "";
newDiv = document.createElement('div');
newDiv.id = "Webfont_Test";
body.appendChild(newDiv);
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	http = true;
}
else {// code for IE6, IE5
	activex = true;
}
	
woff = path + "//13B5F9_0.woff";
if (http) {
	xmlhttp=new XMLHttpRequest();
}
else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",woff,false);
xmlhttp.send();
if(xmlhttp.status == 200) {
	addtoDiv('Woff_result','success',"WOFF font file appears to be working!");
}
else
	addtoDiv('Woff_result','error',"WOFF File: " +woff+ " is inaccessable.  Check the file permissions and the MIME types");
//test for eot
eot = path + "//13B5F9_0.eot";
if (http) {
	xmlhttp=new XMLHttpRequest();
}
else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",eot,false);
xmlhttp.send();
if(xmlhttp.status == 200) {
	addtoDiv('eot_result','success',"EOT font file appears to be working!");
}
else
	addtoDiv('eot_result','error',"EOT File: " +eot+" is inaccessable.  Check the file permissions and the MIME types");
//test for svg
svg = path + "//13B5F9_0.svg";
if (http) {
	xmlhttp=new XMLHttpRequest();
}
else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",svg,false);
xmlhttp.send();
if(xmlhttp.status == 200) {
	if (!/text\/xml/.test(xmlhttp.getResponseHeader("Content-Type")))
		addtoDiv('svg_result','soft_error',"MIME type set incorrectly for SVG.  The MIME type should be 'text/xml'.");
	else
		addtoDiv('svg_result','success',"SVG font file appears to be working!");
}
else
	addtoDiv('svg_result','error',"SVG File: " +svg+" is inaccessable.  Check the file permissions and the MIME types");
	
woff = path + "//13B5F9_1.woff";
if (http) {
	xmlhttp=new XMLHttpRequest();
}
else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",woff,false);
xmlhttp.send();
if(xmlhttp.status == 200) {
	addtoDiv('Woff_result','success',"WOFF font file appears to be working!");
}
else
	addtoDiv('Woff_result','error',"WOFF File: " +woff+ " is inaccessable.  Check the file permissions and the MIME types");
//test for eot
eot = path + "//13B5F9_1.eot";
if (http) {
	xmlhttp=new XMLHttpRequest();
}
else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",eot,false);
xmlhttp.send();
if(xmlhttp.status == 200) {
	addtoDiv('eot_result','success',"EOT font file appears to be working!");
}
else
	addtoDiv('eot_result','error',"EOT File: " +eot+" is inaccessable.  Check the file permissions and the MIME types");
//test for svg
svg = path + "//13B5F9_1.svg";
if (http) {
	xmlhttp=new XMLHttpRequest();
}
else {
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET",svg,false);
xmlhttp.send();
if(xmlhttp.status == 200) {
	if (!/text\/xml/.test(xmlhttp.getResponseHeader("Content-Type")))
		addtoDiv('svg_result','soft_error',"MIME type set incorrectly for SVG.  The MIME type should be 'text/xml'.");
	else
		addtoDiv('svg_result','success',"SVG font file appears to be working!");
}
else
	addtoDiv('svg_result','error',"SVG File: " +svg+" is inaccessable.  Check the file permissions and the MIME types");
};