{
	//创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
	
	function stuScope() {
		this.scope = [];
		this.add = add;
		this.average = average;
	}

	function add(temp) {
		this.scope.push(temp);
	}

	function average() {
		var sum = 0;
		for(var i=0;i<this.scope.length;i++) {
			sum += this.scope[i];
		}
		print("the average is " + sum/this.scope.length);
	}

	var grades = new stuScope();
	var flag = true;
	while(flag) {
		putstr('Enter grade:');
		var grade = readline();
		if(parseInt(grade)) {
			grades.add(parseInt(grade));
		}else {
			flag = false;
		}
	}
	grades.average();
}

{
	//正序和倒序输出一组存储单词的数组
	var flag = true;
	var words = [];
	while(flag) {
		putstr('Enter a word:');
		var word = readline();
		if(word == '0') {
			flag = false;
		}else {
			words.push(word);
		}
	}
	print(words.sort());
	print(words.reverse());
}