# Sorting Algorithms (정렬 알고리즘)

> [Sorting 시각화](https://visualgo.net/en/sorting?slide=1)

- `Stable`: 정렬 이전과 동일한 상대적인 위치를 그대로 유지
    - [10, 5, 2, 5, 3] → [10, 5, 2, 5, 3] 각 5들의 상대적 위치가 같다면 `stable`

| 정렬 알고리즘 | 메커니즘 | O(n) worst | O(n) best | 장점 | 단점 |
|---|---|---|---|---|---|
| Bubble sort | 순회하며 `좌우`비교 | O(n^2) | O(n) | 메모리 추가 X | 느림 |
| Insertion sort | 순회하며 `왼쪽들`과 비교 | O(n^2) | O(n) | 메모리 추가 X | 느림 |
| Quick sort | Pivot 기준 크고 작음으로 좌우 배치, 반복 | O(n^2) | O(n log(n)) | 빠름 | `unstable` |
|-|-|-|-| 메모리 추가 X | `Pivot`선정에 따라 퍼포먼스 좌우 |
| Merge sort | 자른뒤 2개씩 통합 반복 | O(n log(n)) | O(n log(n)) | 성능예측 가능 | 추가 메모리 필요 |



### Bubble Sort
- 메커니즘
    - 좌우를 비교하며 순회
    - 순회당 1개의 값이 정렬 완료되며, 총 n-1번의 순회가 필요
- 시간복잡도
    - best는 O(n)
    - worst는 O(n^2)
- 장점
    - `in place`알고리즘으로 추가적인 메모리 공간을 사용하지 않음 (이미 할당된 공간내에서 자리바꿈)
    - 이미 정렬이 완료된 것을 테스트하는 경우 O(n)의 시간복잡도이므로 검산에 용이
- 단점
    - 느리다

### Insertion Sort
- 메커니즘
    - 좌우를 비교하며 순회
    - 순회당 1개의 값이 정렬 완료되며, 총 n-1번의 순회가 필요
- 시간복잡도
    - best는 O(n)
    - worst는 O(n^2)
- 장점
    - `in place`알고리즘으로 추가적인 메모리 공간을 사용하지 않음 (이미 할당된 공간내에서 자리바꿈)
    - 이미 정렬이 완료된 것을 테스트하는 경우 O(n)의 시간복잡도이므로 검산에 용이
    - `stable`한 정렬방법
- 단점
    - 느리다

### Quick Sort
- 메커니즘
    - `Pivot`을 선정 후 `Pivot`을 기준으로 작은것은 left, 큰것을 right로 이동
    - `left`에 대해서 반복
    - `right`에 대해서 반복
    - 일반적으로 `처음, 중간, 마지막 원소의 중간값`을 고르거나 랜덤으로 하나의 값을 고르는 것 등으로 최악의 성능을 피할 수 있음
- 시간복잡도
    - best는 O(n log(n))
        - 중간값에 가까운 피벗을 고를수록 효과적, 중간값에서 멀수록 더 많은 연산
        - 순회(n)
        - 반 잘라서 순회 (log (n)
    - worst는 O(n^2)
        - 피벗이 가장 크거나 작아서 좌나 우로 모두 쏠릴 때, n연산을 n번하게 됨
- 장점
    - 빠르다
    - `in place`알고리즘으로 추가적인 메모리 공간을 사용하지 않음
- 단점
    - unstable
    - `Pivot`선정에 따라 퍼포먼스가 좌우된다
    - 이미 정렬이 완료된 배열의 검사에는 비효율적

### Merge Sort
- 메커니즘
    - 모두 자른뒤 2개씩 정렬하며 통합하는 과정을 반복
- 시간복잡도
    - best도 worst도 O(n log(n))
    - 나누는 것: O(1)
    - N개의 데이터를 합쳐야 하는 것: O(n)
    - 크기를 비교하고 정렬: O(log2(n))번의 재귀 시행
    - 통합하면 O(n log (n))
- 장점
    - best, worst가 같기때문에 성능이 예측 가능
- 단점
    - 추가공간의 확보 필요, 원소의 개수만큼 추가공간 소비
    - 이미 정렬이 완료된 배열의 검사에 아주 비효율적 (어차피 다시 자름)