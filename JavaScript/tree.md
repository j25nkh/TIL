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

- Dom이나 File System같은 계층구조 (Hierarchical Structure)에서 사용되는 자료구조

### Binary Tree (이진트리)

> 노드가 자식노드를 `최대` 2개 가질 수 있는 트리구조

### `BST`: Binary Search Tree (이진탐색트리)

> 노드가 자식노드를 `최대` 2개 가질 수 있는 트리구조로,
> 모든 왼쪽 노드의 값은 부모노드보다 작고,
> 모든 오른쪽 노드의 값은 부모노드보다 큼

- 순서가 정렬되어 있는 데이터에게 적합