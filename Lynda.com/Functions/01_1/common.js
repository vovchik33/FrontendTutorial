var f= {
	fin: function () {
		console.log("Hello, world!!!");
		console.dir(this);
	}
};

f.fin();

var F = function() {
	console.log("Hello, world!!!");
	console.dir(this);
};

F.prototype.fin = function() {
	console.log("Hello, world!!!");
	console.dir(this);
};

var ff=new F();
ff.fin();
