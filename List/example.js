function List() {
		this.listSize = 0;  
		this.pos = 0;  
		this.dataStore = [];  
		this.clear = clear;  
		this.find = find;  
		this.toString = toString;  
		this.insert = insert;  
		this.append = append;  
		this.remove = remove;  
		this.front = front;  
		this.end = end;  
		this.prev = prev;  
		this.next = next;  
		this.hasNext = hasNext;  
		this.hasPrev = hasPrev; 
		this.length = length;  
		this.currPos = currPos;  
		this.moveTo = moveTo;  
		this.getElement = getElement; 
		this.contains = contains;  
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

	function createArr(file) {
		var arr = read(file).split('\n'); //读取文本文件的内容，并按照换行符分行
		for(var i=0;i<arr.length;i++) {
			arr[i] = arr[i].trim();//当读进来的内容被分割成数组后，换行符被替换成空格
		}
		return arr;
	}

	
	//显示清单
	function displayList(list) {
		for(list.front();list.hasNext();list.next()) {
			if (list.getElement() instanceof Customer) {
				print(list.getElement()['name'] + "," + list.getElement()['movie']);
			}else {
				print(list.getElement());
			}
		}
	}
	
	function Customer(name,movie) {
		this.name = name;
		this.movie = movie;
	}

	//顾客借出影片
	function checkOut(name,movie,movieList,customerList) {
		if (movieList.contains(movie)) {
			var c = new Customer(name,movie);
			customerList.append(c);
			movieList.remove(movie);
		}else {
			print(movie + " not found.");
		}
	}
	var movies = createArr('../List/films.txt');
	var movieList = new List();
	var customer = new List();
	for(var i=0;i<movies.length;i++) {
		movieList.append(movies[i]);
	}
	print("Movie List:");
	displayList(movieList);

	checkOut('John', 'City of God', movieList, customer);
	print("Customer Rentals:");
	displayList(customer);

	print("Movie List Now:");
	displayList(movieList);