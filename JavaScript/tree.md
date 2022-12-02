# Tree

> Tree의 구성

| Component | Description |
| --- | --- |
| Node | 최소단위|
| Edge | 연결선 |
| Root Node | 최상위 Node (부모 Node 없음) |
| Parents Node | 부모 Node |
| Child Node | 자식 Node |
| Leaf Node | 말단 Node (자식 Node 없음) |
| Sibling | 같은 부모를 가진 Node |
| Level | Root (0) 부터 내려가는 하위 노드의 깊이 |
| Depth | Tree의 최대 깊이 |

- Dom이나 폴더구조의 File System같은 계층구조 (Hierarchical Structure)에서 사용되는 자료구조

셀프 구현
```JavaScript
function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function (value) {
  const child = new Tree(value);

  if (!this.value) {
    this.value = value;

    return;
  }

  this.children.push(child);

};

Tree.prototype.contains = function (target) {
  if (target === this.value) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;
};

const tree = new Tree(1);
tree.addChild(3);
tree.addChild(5);
tree.children[1].addChild(7);
tree.children[1].addChild(9);
console.log(tree);
// Tree { value: 1,
//   children: 
//    [ Tree { value: 3, children: [] },
//      Tree { value: 5,
//        children: 
//         [ Tree { value: 7, children: [] },
//           Tree { value: 9, children: [] } ] } ] }

console.log(tree.contains(4)); // false
console.log(tree.contains(5)); // tree
```

### Binary Tree (이진트리)

> 노드가 자식노드를 `최대` 2개 가질 수 있는 트리구조

- 재귀로 구현 가능
- 시간복잡도 O(log n)

### `BST`: Binary Search Tree (이진탐색트리)

> 노드가 자식노드를 `최대` 2개 가질 수 있는 트리구조이며, 모든 왼쪽 노드의 값은 부모노드보다 작고, 모든 오른쪽 노드의 값은 부모노드보다 큼

- 순서가 정렬되어 있는 데이터에게 적합
- 바이너리 서치 트리는 바이너리 트리에만 한정되는 것은 아니며, Array가 정렬이 되어 있는 경우, 가운데 값으로 가서 크고 작음으로 반씩 잘라서 찾는 binary search 로직을 적용가능

셀프 구현

```JavaScript
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  const child = new BinarySearchTree(value);

  if (!this.value) {
    this.value = value;

    return;
  }

  if (value < this.value) {
    if (!this.left) {
      this.left = child;
    }

    this.left.insert(value);
  }

  if (value > this.value) {
    if (!this.right) {
      this.right = child;
    }

    this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function (target) {
  if (target === this.value) {
    return true;
  }
  
  if (target < this.value) {
    if (!this.left) {
      return false;
    }

    return this.left.contains(target);
  }

  if (target > this.value) {
    if (!this.right) {
      return false;
    }

    return this.right.contains(target);
  }
};

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(5);

console.log(bst);
// BinarySearchTree { value: 1,
//   left: null,
//   right:
//    BinarySearchTree { value: 3,
//      left: null,
//      right:
//       BinarySearchTree { value: 7,
//         left: BinarySearchTree { value: 5, left: null, right: null },
//         right: null } } }
//

console.log(bst.contains(6)); // false
console.log(bst.contains(7)); // true
```
