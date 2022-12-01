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

### Binary Tree (이진트리)

> 노드가 자식노드를 `최대` 2개 가질 수 있는 트리구조

- 재귀로 구현 가능
- 시간복잡도 O(log n)

### `BST`: Binary Search Tree (이진탐색트리)

> 노드가 자식노드를 `최대` 2개 가질 수 있는 트리구조이며, 모든 왼쪽 노드의 값은 부모노드보다 작고, 모든 오른쪽 노드의 값은 부모노드보다 큼

- 순서가 정렬되어 있는 데이터에게 적합
- 바이너리 서치 트리는 바이너리 트리에만 한정되는 것은 아니며, Array가 정렬이 되어 있는 경우, 가운데 값으로 가서 크고 작음으로 반씩 잘라서 찾는 binary search 로직을 적용가능
