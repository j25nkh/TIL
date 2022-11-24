function HashTable () {
  this.limit = 8;
  this.table = Array(this.limit);
  this.bucketCount = 0;
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

HashTable.prototype.insert = function (key, value) {
	let hashValue = HashFunction(key, this.limit);

	// 버킷이 비어있지 않다면
	while (this.table[hashValue]) {

		// key값이 같은 경우 overwrite
		if (this.table[hashValue][0] === key) {
			this.table[hashValue] = [key, value];

			return;
		}

		// key값이 다르다면 해시값을 조정 (선형탐사)
		hashValue  = (hashValue + 1) % 8;
	}

	// 버킷이 비어있다면 데이터 삽입
	this.table[hashValue] = [key, value];
	this.bucketCount++;

	// 테이블 반 초과 점유시 버킷크기 조정 (2배)
	if (this.bucketCount > this.limit / 2) {

		this.newTable = new Array(this.limit * 2);
		this.limit = this.limit * 2;

		// 확장된 해시테이블에 기존 해시함수를 통해 key, value 재할당
		for (i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				this.newTable[HashFunction(this.table[i][0], this.limit)] = this.table[i];
			}
		}

		this.table = this.newTable;
	}
}

HashTable.prototype.retrieve = function (key) {
	let hashValue = HashFunction(key, this.limit)

	// 버킷이 비어있지 않다면
	while (this.table[hashValue]) {

		// key값이 같은 경우 return
		if (this.table[hashValue][0] === key) {
			return this.table[hashValue][1];
		}

		// key값이 다르다면 해시값을 조정 (선형탐사)
		hashValue  = (hashValue + 1) % 8;
	}

	// 버킷이 비어있다면 탐사 종료
	return key + " not found in hash table."
}

HashTable.prototype.remove = function (key) {
	let hashValue = HashFunction(key, this.limit)

	// 버킷이 비어있지 않다면
	while (this.table[hashValue]) {

		// key값이 같은 경우 delete
		if (this.table[hashValue][0] === key) {
			delete this.table[hashValue];
			this.bucketCount--;

			break;
		}

		// key값이 다르다면 해시값을 조정 (선형탐사)
		hashValue  = (hashValue + 1) % 8;
	} 
	// 버킷이 비어있다면 탐사 종료

	// 테이블 반 이하 점유시 버킷크기 조정 (1/2배)
	if (this.bucketCount <= (this.limit / 4) && this.limit >= 8) {

		this.newTable = new Array(this.limit * 0.5);
		this.limit = this.limit * 0.5;

		// 확장된 해시테이블에 기존 해시함수를 통해 key, value 재할당
		for (i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				this.newTable[HashFunction(this.table[i][0], this.limit)] = this.table[i];
			}
		}

		this.table = this.newTable;
	}
}


let hashtable = new HashTable();
hashtable.insert("Jake", "Jeon");
hashtable.insert("George", "Washington");
hashtable.insert("John", "Adams");
hashtable.insert("Thomas", "Jefferson");
hashtable.insert("James", "Madison");
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

console.log(hashtable.table);
console.log(hashtable.bucketCount + "/" + hashtable.limit + " occupied");
console.log(hashtable.retrieve("George"));

hashtable.remove("George");

console.log(hashtable.table);
console.log(hashtable.bucketCount + "/" + hashtable.limit + " occupied");

console.log(hashtable.retrieve("George"));
