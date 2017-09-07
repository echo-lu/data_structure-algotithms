function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}

//数制间相互转换
function mulBase(num,base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num/=base);
	}while(num>0);
	var converted = '';
	while(s.length()>0) {
		converted += s.pop();
	}
	return converted;
}

var num = 16;
var base = 2;
var newNum = mulBase(num,base);
print(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
newNum = mulBase(num,base);
print(num + " converted to base " + base + " is " + newNum);

//回文
function isPalindrome(word) {
	var s = new Stack;
	for(var i=0;i<word.length;i++) {
		s.push(word[i]);
	}
	var reword = "";
	while(s.length()>0) {
		reword += s.pop();
	}
	if(reword == word) {
		return true;
	}
	return false;
}

var word = "hello";
if(isPalindrome(word)){
	print(word + " is a palindrome.");
}else {
	print(word + " is not a palindrome.");
}
word = "recer";
if(isPalindrome(word)){
	print(word + " is a palindrome.");
}else {
	print(word + " is not a palindrome.");
}