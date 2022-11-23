function HashTable () {
  this.limit = 8;
  this.table = new Array(this.limit);
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
	// migration
	
	if (this.bucketCount > this.limit / 2) {
		this.newTable = new Array(this.limit * 2);

		for (i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				this.newTable[i] = this.table[i];
			}
		}

		this.limit = this.limit * 2; // <-- fix
	}







	let hashValue = HashFunction(key, this.limit);

	while (this.table[hashValue]) {	// 비어있지 않음

		if (this.table[hashValue][0] === key) { // key값이 같음: overwrite
			this.table[hashValue] = [key, value];

			return;
		}

		hashValue  = (hashValue + 1) % 8; // 해시값 조정 (선형탐사)
	}

	this.table[hashValue] = [key, value]; // 빈 bucket이면 데이터 삽입
	this.bucketCount++;
}

HashTable.prototype.retrieve = function (key) {
	const hashValue = HashFunction(key, this.limit);

	return this.table[hashValue][1];
}

HashTable.prototype.remove = function (key) {
	const hashValue = HashFunction(key, this.limit)
	delete this.table[hashValue];
	this.bucketCount--;
}

let hashtable = new HashTable();
hashtable.insert("Jake", "Jeon");
hashtable.insert("Kevin", "Spacy");
hashtable.insert("Robert", "Downy");
hashtable.insert("Jakwe", "Kim");
hashtable.insert("Jakess", "lim");
hashtable.insert("Jakweaa", "lsdfim");
// hashtable.insert("Jakeeada", "lsdfim");
// hashtable.insert("Jaewke", "Jeon");
// hashtable.insert("Kevin", "Spacy");
// hashtable.insert("Rorasdrbert", "Downy");
// hashtable.insert("Jtake", "Kim");
// hashtable.insert("Jakasdess", "lim");
// hashtable.insert("Jatkeaa", "lsdfim");
// hashtable.insert("Jasadykeada", "lsdfim");
// hashtable.insert("Jaasdke", "Jeon");
// hashtable.insert("Keyasduvin", "Spacy");
// hashtable.insert("Robert", "Downy");



console.log(hashtable.retrieve("Jake"));
// hashtable.remove("Jake");

console.log(hashtable.table);
console.log(hashtable.bucketCount);
console.log(hashtable.limit)
