function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
/*
addLoadEvent(function(){
	var s=document.body.appendChild(document.createElement('script'));
	s.id="urchin";
	s.language="javascript";
	s.type="text/javascript";
	s.src="http://www.google-analytics.com/urchin.js";
	_uacct = "UA-345328-1";
	setTimeout(function(){urchinTracker();}, 2000);
})
*/;



function movepic(img_name,img_src) {
	get_obj(img_name).src = img_src;
	//document[img_name].src=img_src;
}

function get_obj(layerName){
   var obj="";
   if(document.layers){//NS4
      obj= document.layers[layerName];
   }else if(document.getElementById){//IE 5 and over and NS6
      obj= document.getElementById(layerName);
   }else if(document.all && !document.getElementById){
      obj= document.all[layerName];
   }
   return obj
}


function calendar() {


<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin

var week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var today = new Date();
var month = today.getMonth();
var day = today.getDay();
var dayN = today.getDate();
var days = monthdays[month];
var fullyear = today.getFullYear();
if (month == 1) {
  var year = today.getYear();
  if (year%4 == 0) days = 29;
}
document.write("<table border=1 cellspacing=0 cellpadding=2 class=calendar><tr><td>");
document.write("<table border=0 cellspacing=0 cellpadding=2>");
document.write("<tr><td colspan=7 align=center><h4>" + months[month] + "<\/h4><\/td><\/tr><tr>");
for (var i=0; i<7; i++) {
  document.write("<td width='30' height='30'>");
  document.write("<div align='center'>" + week[i] + "<\/div>");
  document.write("<\/td>");
}
document.write("<\/tr>");
var jumped = 0;
var inserted = 1;
var start = day - dayN%7 + 1;
if (start < 0) start += 7;
var weeks = parseInt((start + days)/7);
if ((start + days)%7 != 0) weeks++;
for (var i=weeks; i>0; i--) {
  document.write("<tr>");
  for (var j=7; j>0; j--) {
    document.write("<td>");
    if (jumped<start || inserted>days) {
      document.write("<div align='center'><\/div>");
      jumped++;
    }
    else {
      if (inserted == dayN) document.write("<div align='center'><b>[" + inserted + "]<\/b><\/div>");
      else document.write("<div align='center'>" + inserted + "<\/div>");
      inserted++;
    }
    document.write("<\/td>")
  }
  document.write("<\/tr>");
}
document.write("<tr><td colspan=7 align=center><br><h4 style=\"margin-bottom:0\">" + fullyear + "<\/h4><\/td><\/tr>");
document.write("<\/table>");
document.write("<\/table><\/td><\/tr>");


}