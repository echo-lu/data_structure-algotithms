{
	//实现列表类
	function List() {
		this.listSize = 0;  //属性，列表的元素个数
		this.pos = 0;  //属性，列表的当前位置
		this.dataStore = [];  //初始化一个空数组来保存列表元素
		this.clear = clear;  //清空列表中所有元素
		this.find = find;  //在列表中查找某一元素
		this.toString = toString;  //返回列表的字符串形式
		this.insert = insert;  //在列表中插入新元素
		this.append = append;  //在列表的末尾添加新元素
		this.remove = remove;  //从列表中删除元素
		this.front = front;  //将列表的当前位置移动到第一个元素
		this.end = end;  //将列表的当前位置移动到最后一个元素
		this.prev = prev;  //当前位置后移一位
		this.next = next;  //当前位置前移一位
		this.hasNext = hasNext;  //判断后一位
		this.hasPrev = hasPrev;  //判断前一位
		this.length = length;  //列表中有多少个元素
		this.currPos = currPos;  //返回列表的当前位置
		this.moveTo = moveTo;  //将当前位置移动到指定位置
		this.getElement = getElement;  //返回列表的当前元素
		this.contains = contains;  //判断给定值是否在列表中
	}
	function append(element) {
		this.dataStore[this.listSize++] = element;
	}

	function find(element) {
		for(var i=0;i<this.dataStore.length;i++) {
			if(this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	}

	function remove(element) {
		var foundAt = this.find(element);
		if(foundAt > -1) {
			this.dataStore.splice(foundAt,1);
			--this.listSize;
			return true;
		}
		return false;
	}

	function length() {
		return this.listSize;
	}

	function toString() {
		return this.dataStore;
	}

	function insert(element,after) {
		var insertPos = this.find(after);
		if(insertPos>-1) {
			this.dataStore.splice(insertPos+1,0,element);
			++this.listSize;
			return true;
		}
		return false;
	}

	function clear() {
		delete this.dataStore;
		this.dataStore.length = 0;
		this.listSize = this.pos = 0;
	}

	function contains(element) {
		for(var i=0;i<this.dataStore.length;i++) {
			if(this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	}

	function front() {
		this.pos = 0;
	}

	function end() {
		this.pos = this.listSize - 1;
	}

	function prev() {
		--this.pos;
	}

	function next() {
		if(this.pos < this.listSize) {
			++this.pos;
		}	
	}

	function currPos() {
		return this.pos;
	}

	function moveTo(position) {
		this.pos = position;
	}

	function getElement() {
		return this.dataStore[this.pos];
	}

	function hasNext() {
		return this.pos < this.listSize;
	}

	function hasPrev() {
		return this.pos >= 0;
	}


	//example
	var names = new List();
	names.append('apple');
	names.append('banana');
	names.append('orange');
	names.append('peach');
	print(names.toString());

	names.remove('banana');
	print(names.toString());

	names.append('pear');
	names.append('red');
	names.append('yellow');

	names.front();
	print(names.getElement());

	names.next();
	print(names.getElement());

	//使用迭代器访问列表
	for(names.front();names.hasNext();names.next()) {
		print(names.getElement());
	}

	for(names.end();names.hasPrev();names.prev()) {
		print(names.getElement());
	}
}