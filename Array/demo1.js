{
	//split()
	var sentence = "the quick brown fox jumped over the lazy dog";
	var words = sentence.split(" ");
	for(var i=0;i<words.length;i++) {
		print("word" + i + ":" + words[i]);
	}
}

{
	//浅复制
	var nums = [];
	for(var i=0;i<10;i++) {
		nums[i] = i+1;
	}
	var copyNum = nums;
	copyNum[0] = 100;
	print(nums[0]);
}

{
	//深复制
	function copy(arr1,arr2) {
		for(var i=0;i<arr1.length;i++) {
			arr2[i] = arr1[i];
		}
	}

	var nums = [];
	for(var i=0;i<10;i++) {
		nums[i] = i+1;
	}
	copy(nums,copyNum);
	copyNum[0] = 400;
	print(nums[0]);

}

{
	//print()显示数组里的元素
	var nums = [1,2,3,4,5];
	print(nums);
}

{
	//indexOf()、lastIndexOf()查找元素
	var names = ["John","Mike","Alice","Dou","Mike","Kitty"];

	//putstr("Enter a name to search for:");
	//var name = readline();
	var name = "John";
	var position = names.indexOf(name);
	if(position<0) {
		print(name + " Not Found.");
	}else {
		var lastPosition = names.lastIndexOf(name);
		print("First found" + name + "at position " + position);
		print("Last found" + name + "at position " + lastPosition);
	}
}

{
	//toString()、join()
	var names = ["John","Mike","Alice","Dou","Mike","Kitty"];
	print(names.toString());
	print(names.join());
}

{
	//concat()、splice() 
	var arr1 = ["John","Mike","Alice","Dou"];
	var arr2 = ["Mike","Kitty"];
	var concatArr = arr1.concat(arr2);
	print(concatArr);
	var arr3 = ["John","Mike","Alice","Dou","Mike","Kitty"];
	var dmpDept = arr3.splice(2,3);
	print(arr3);
	print(dmpDept);
}

{
	//添加数组元素
	var nums = [2,3,6];
	nums.push(7);
	print("nums.push(7):" + nums);
	nums.unshift(1);
	print("nums.unshift(1):" + nums);
	nums.splice(3,0,4,5);
	print("nums.splice(3,0,4,5):" + nums);
}

{
	//删除数组
	var nums = [1,2,3,4,5,6,7];
	nums.pop();
	print("nums.pop():" + nums);
	nums.shift();
	print("nums.shift():" + nums);
	nums.splice(3,2);
	print("nums.splice(3,2):" + nums);
}

{
	//比较数字大小
	var nums = [99,34,55,6,12,33,34];
	nums.sort(function(num1,num2) {
		return num1 - num2;
	})
	print(nums);
}

{
	//迭代器方法
	var nums = [1,2,3,4];

	//forEach()
	print("forEach():");
	nums.forEach(function(arr) {
		print(arr * arr)
	});

	//every()
	print("every():");
	var nums1 = [2,4,6,8];
	var isEven = nums1.every(function(num) {
		return num % 2 == 0;
	})
	if(isEven) {
		print("this array all even");
	}else {
		print("this array not all even");
	}

	//some()
	print("some():");
	var isSome = nums.some(function(num) {
		return num %2 !== 0;
	});
	if(isSome) {
		print("this array not all even");
	}else {
		print("this array all even");
	}

	//reduce()
	print("reduce():");
	var sum = nums.reduce(function(num1,num2) {
		return num1+num2;
	})
	print(sum);

	//reduceRight()
	print("reduceRight():");
	var words = ['here','am','i'];
	var sentence = words.reduceRight(function(word1,word2) {
		return word1+' '+word2;
	})
	print(sentence);

	//map()
	print("map():");
	var newNums = nums.map(function(num1,num2) {
		return num1+num2;
	})
	print(newNums);

	//filter()
	print("filter():");
	var grades = [];
	for (var i=0;i<10;i++) {
		grades[i] = Math.floor(Math.random()*100+1);
	}
	var passGrades = grades.filter(function(num) {
		return num>=60;
	})
	print("all grades: " + grades);
	print("passed grades: " + passGrades);

	print('-----------------------------------');
	var words1 = ['happy','thank','third','second','one','tree'];
	
	var findWord = words1.filter(function(word) {
		if(word.indexOf('th')>-1) {
			return true;
		}
		return false;
	})
	print("Find 'th':" + findWord);

}