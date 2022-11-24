function HashTable (max) {
	this.limit = max;
	this.table = Array(this.limit);
	this.dataSize = 0;
}

function HashFunction(str, max) {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
		hash = Math.abs(hash);
	}

	return hash % max;
};

function LinkedList() {
	this.length = 0;
	this.head = null;
	this.tail = null;
}

function Node(key, value) {
	this.key = key;
	this.value = value;
	this.next = null;
}

HashTable.prototype.insert = function (key, value) {
	let hashValue = HashFunction(key, this.limit);

	// 해당 인덱스에 정보가 없으면 linked list 생성
	if (!this.table[hashValue]) {
		this.table[hashValue] = new LinkedList();
	}

	// 새로운 Node 생성
	let list = this.table[hashValue];
	const newNode = new Node(key, value);

	// 1. 연결리스트가 비어있다면 newNode가 head와 tail
	if (!list.head) {
		list.head = newNode;
		list.tail = newNode;
		list.length++;
		this.dataSize++;

		return;
	}

	// 2. head에 새로운 Node 추가
	newNode.next = list.head;
	list.head = newNode;
	list.length++;
	this.dataSize++;
}

HashTable.prototype.retrieve = function (key) {
	let hashValue = HashFunction(key, this.limit);

	let list = this.table[hashValue];
	let currentNode = list.head;

	// 해당 index의 Linked list를 head부터 탐색
	while (currentNode) {
    if (currentNode.key === key) {
      return currentNode.value;
    }

    currentNode = currentNode.next;
    locationIndex ++;
  }

	return key + " not found in hash table."
}

HashTable.prototype.remove = function (key) {
	let hashValue = HashFunction(key, this.limit);

	let list = this.table[hashValue];
	let currentNode = list.head;
	let preNode;

	// 1. 삭제 Node가 head인 경우
	if (currentNode.key === key) {
		list.head = currentNode.next;
		delete currentNode;

		if (!currentNode.next) {
			list.tail = null;
		}

		list.length--;
		this.dataSize--;
		return;
	}

	// 2. 그 외의 경우 Node를 따라 탐색
	while (currentNode) {
		if (currentNode.key === key) {
			break;
		}

		preNode = currentNode
		currentNode = currentNode.next;
	}

	preNode.next = currentNode.next;
	if (!currentNode.next) {
		list.tail = preNode;
	}

	delete currentNode;
	this.length--;
	this.dataSize--;
}

let hashtable = new HashTable(8);
hashtable.insert("Jake", "Jeon");
hashtable.insert("George", "Washington");
hashtable.insert("George", "Bush");

hashtable.insert("John", "Adams");
// hashtable.insert("Thomas", "Jefferson");
// hashtable.insert("James", "Madison");
// hashtable.insert("John", "Adams");
// hashtable.insert("Andrew", "Jackson");
// hashtable.insert("Martin", "Buren");
// hashtable.insert("William", "Harrison");
// hashtable.insert("John", "Tyler");
// hashtable.insert("Zachary", "Taylor");
// hashtable.insert("Millard", "Fillmore");
// hashtable.insert("Franklin", "Pierce");
// hashtable.insert("Abraham", "Lincoln");
// hashtable.insert("Ulysses", "Grant");
// hashtable.insert("Rutherford", "Hayes");
// hashtable.insert("Chester", "Arthur");
// hashtable.insert("Grover", "Cleveland");
// hashtable.insert("Benjamin", "Cleveland");

// hashtable.remove("George");

console.log(hashtable.table);
console.log(hashtable.dataSize);
console.log(hashtable.retrieve("Jake"));
