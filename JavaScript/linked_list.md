# Linked List

> Node의 연결로서, Node는 Data와 Pointer로 구성

> 각 Node의들이 다른 Node의를 참조하며, 이를 link라고 함

> [참고](https://opentutorials.org/module/1335/8821)

셀프 구현 로직:
- [x] addToTail(`value`): 새로운 노드 tail에 삽입
- [x] removeHead(): head 노드 삭제
- [x] insert(`location`, `value`): 새로운 노드를 정해진 위치에 삽입
- [x] remove(`locationFront`): 입력된 위치의 뒷 노드 삭제
- [x] isContain(`value`): 특정값을 가진 node의 존재 여부 확인
- [ ] indexOf(`value`): 특정값을 가진 node의 위치 반환

| Node |  | 1st |  | 2nd |  | 3rd |  | 4th |  |
|---|---|---|---|---|---|---|---|---|---|
| Location | 0 |  | 1 |  | 2 |  | 3 |  | 4 |


```JavaScript

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}


LinkedList.prototype.addToTail = function(value) {
  // 1. newNode 생성
  const newNode = new Node(value);
  this.length ++;
  
  // 2. 연결리스트가 비어있다면 newNode가 head와 tail
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  } 
  
  // 3. 기존 tail을 newNode에 연결 후 newNode를 새로운 tail로 변경
  list.tail.next = newNode; 
  list.tail = newNode;
};


LinkedList.prototype.removeHead = function (value) {
  // 1. 지울 head가 없으면 error
  if (!list.head) {
    console.error("Nothing to be removed");
    return;
  }

  // 2. Head 교체
  const oldHead = list.head;
  const newHead = list.head.next;
  delete list.head;
  list.head = newHead;
  this.length --;

  // 3. 모든 Node가 지워졌을 경우 tail 정보 업데이트
  if (this.length === 0) {
    this.tail = null;
  }
};


LinkedList.prototype.insert = function(location, value) {

  // 1. Location에 문제가 없다면 newNode 생성
  // (Node들의 앞뒤로 location이 존재, location은 0 ~ length (Node수 +1))
  if (location >= 0 && location <= this.length ) { 
    const newNode = new Node(value);
    let preNode;
    let postNode = this.head;
    let locationIndex = 0;

    // 2. 삽입위치가 0이라면 맨 앞 연결
    if (location === 0) {
      newNode.next = postNode;
      this.head = newNode

      this.length ++;
      return;
    }
  
    // 3. 그 외의 경우, Head 부터 삽입위치까지 타고 타고 이동
    while(locationIndex < location) {
      preNode = postNode;
      postNode = postNode.next;
      locationIndex ++;
    }

    // 4. 해당위치의 앞 node를 newNode에 연결
    preNode.next = newNode;
    
    // 5. newNode를 해당위치의 뒷 node에 연결
    newNode.next = postNode;

    // 6. 삽입위치가 맨 끝이라면 연결리스트의 tail 정보 업데이트
    if (location === this.length) {
      list.tail = newNode;
    }

    this.length ++;
    return;
  }

  console.error("Insertion location invalid");
}


LinkedList.prototype.remove = function(locationFront) {
  if (locationFront >= 0 && locationFront < this.length ) { 
    let preNode;
    let postNode = this.head;
    let locationIndex = 0;

    // 1. 삭제위치가 0이라면 맨 앞 제거
    if (locationFront === 0) {
      this.removeHead();
      return;
    }
  
    // 2. 그 외의 경우, Head 부터 삭제노드의 "앞" 위치까지 타고 타고 이동
    while(locationIndex < locationFront) {
      preNode = postNode;
      postNode = postNode.next;
      locationIndex ++;
    }

    // 3. 해당위치의 앞 node를 해당위치의 뒷 node의 다음 node와 연결
    preNode.next = postNode.next;
    
    // 4. 해당위치의 뒷 node 삭제
    delete postNode;
    this.length --;

    // 5. 삭제한 Node가 tail이라면 tail정보 업데이트
    if (locationIndex === this.length) {
      list.tail = preNode;
    }
    
    return;
  }

  console.error("Remove location invalid");
};


LinkedList.prototype.isContain = function(value) {
  // 1. 입력값이 정수가 아닌 경우 error
  if (!Number.isInteger(value)) {
    console.error("Entered value is not an integer");
    return;
  }

  // 2. 입력값을 찾을때까지 각 노드를 검사
  let currentNode = this.head;
  let locationIndex = 0;
  
  while(locationIndex < this.length) {
    if (currentNode.value === value) {
      return true;
    }
    
    currentNode = currentNode.next;
    locationIndex ++;
  }

  return false;
}


LinkedList.prototype.indexOf = function(value) {
  // 1. 입력값이 정수가 아닌 경우 error
  if (!Number.isInteger(value)) {
    console.error("Entered value is not an integer");
    return;
  }

  // 2. 입력값을 찾을때까지 각 노드를 검사 후 위치 반환
  let currentNode = this.head;
  let locationIndex = 0;
  
  while(locationIndex < this.length) {
    if (currentNode.value === value) {
      return locationIndex + 1;
    }
    
    currentNode = currentNode.next;
    locationIndex ++;
  }

  console.error("Entered value is not in the linked list");
};

const list = new LinkedList();

list.addToTail(3);
list.addToTail(5);
list.insert(1, 4);
list.insert(3, 6);
list.removeHead();
list.remove(1);

console.log(list);
// LinkedList { length: 2,
//  head: Node { value: 4, next: Node { value: 6, next: null } } }
//  tail: Node { value: 6, next: null },
```
