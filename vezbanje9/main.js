(function(){


var btn = document.querySelector('#btn');
var he = document.querySelector('#he');
var minute = document.querySelector('#hm')

var a = 0;

btn.addEventListener('click', function(){
	setInterval(function(){	
		if (a < 10) {
			a++;
			he.innerHTML = a;
		}else if(a == 10){
			
		}
	}, 1000)
})


var d = document.createElement('DIV');
var t = document.createTextNode("Milan Dukic");
var b = document.querySelector("#bb");

d.appendChild(t);//dodavanje teksta divu

btn2.addEventListener('click', function(){
	setTimeout(function(){
		b.appendChild(d);//dodavanje diva bodiju sajta u ovom slucaju
	}, 2000)
})






























})()