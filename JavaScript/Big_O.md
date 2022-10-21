# Big O

> 어떤 알고리즘의 시간복잡도 / 공간복잡도

어떤 알고리즘이 실행되는 절대적인 시간을 재는 것은 컴퓨터의 성능, 시스템 환경에 따라 다르기 때문에 의미가 없음. 시간을 사용하는 대신 `인풋 사이즈의 변화`에 따른 `성장곡선`으로 파악

1. O(1): constant time
2. O(log n)
3. O(n)
4. O(n^n)
5. 기타 등등

| - | stack | Queue | Linked List| Array |
|---|---|---|---|---|
| - |Last-in First-out| First-in First-out|-|-|
| Insertion | O(1) | O(1) | O(1) | O(n) |
| Deletion | O(1) | O(1) | O(1) | O(n) |
| Search | O(n) | O(n) | O(n) | O(1) |
