//Created by Mohammad Naymathullah ID:99067
function start() {
	document.getElementById("submit").addEventListener("click",submit,false);
}
function submit(){
	
	var a = document.getElementById("Adults").value;
	var c = document.getElementById("children").value;
	var s = document.getElementById("senior citizens").value;
	var regex = /^[-+]?[0-9]+\.[0-9]+$/;
	
	if (a.match(regex) || isNaN(a) || a < 0) 
    {
        alert("Must enter only numbers in Adults place");
        return false;
    }
	else if (c.match(regex) || isNaN(c) || c < 0) 
    {
        alert("Must enter only numbers in Children place");
        return false;
    }
	else if (s.match(regex) || isNaN(s) || s < 0) 
    {
        alert("Must enter only numbers in Senior ctizen place");
        return false;
    }
	
	var t = (((a * 16.00) + (c * 0.00) + (s * 14.00)) * 1.08)
	var n = t.toFixed(2);
	document.getElementById("Resultis").value = "Your tickets might cost up to $" + n + " inclusive of all taxes";
	
}
