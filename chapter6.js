//6.1 理解对象
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "software engineer";
 
person.sayName = function(){
	alert(this.name);
	
};
