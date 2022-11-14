# Big O

[Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

> 어떤 알고리즘의 시간복잡도 / 공간복잡도

- 어떤 알고리즘이 실행되는 절대적인 시간을 재는 것은 컴퓨터의 성능, 시스템 환경에 따라 다르기 때문에 의미가 없음. 시간을 사용하는 대신 `인풋 사이즈의 변화`에 따른 `성장곡선`으로 파악

1. O(1): constant time
2. O(log n)
3. O(n)
4. O(n^n)
5. 기타 등등

> 자료구조 별 시간복잡도

| - | stack | Queue | Linked List| Array | Hash Table | Tree |
|---|---|---|---|---|---|---|
| - |Last-in First-out| First-in First-out|-|-|-|-|
| Insertion | O(1) | O(1) | O(1) | O(n) | O(1) | O(log n) |
| Deletion | O(1) | O(1) | O(1) | O(n) | O(1) | O(log n) |
| Search | O(n) | O(n) | O(n) | O(1) | O(1) | O(log n) |

```JavaScript
function foo(n) {
    return n * n;
}
```
O(1) → 들어온 파라미터 값이 100 이든 100억이든 한번의 계산으로 결과 나옴

```JavaScript
function foo(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            console.log(i, j);
        }
    }
}
```
O(n^2)  → O(n^n)이 아님

질문: O(1)의 로직에 재귀를 한다면 시간복작도가 O(n^n)이 되는가?
```JavaScript
let count = 0;

function foo(n) {
    if (n > 100) {
        console.log(count);
        return;
    }

    count++;
    foo(n * n);
}

foo(10000);
```
- 아무리 복잡도가 많이 늘어나도 최대 로직 수행 횟수가 3을 넘기기 힘듬. 이 알고리즘의 복잡도는 재귀함수임에도 불구하고 O(1)으로, 질문에 답은 no.
