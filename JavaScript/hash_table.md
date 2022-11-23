# Hash Table

> `key`값이 `hashing function`을 거쳐 동일한 길이의 `hash value`로 변환되어, 이 `hash value`를 `index`로 사용하여 `key`와 `value`를 나란히 저장하는 자료구조

- [참고자료1](https://ratsgo.github.io/data%20structure&algorithm/2017/10/25/hash/)
- [참고자료2](https://blog.devgenius.io/javascript-newbies-on-hash-table-c56b1e562721/)

- 필수 특성
    - Idempotent (멱등법칙) - 여러번 적용하더라도 결과가 달라지지 않는 성질
        - 같은 키값을 hash function에 넣었을 때 항상 동일한 결과 (동일한 위치)가 나오는 성질이 있어야 함
    - value의 고른 분포가 이루어져야 함
        - 사용하는 Hashing Fucntion에 따라 performance가 천차만별
- 적용
    - Hashing function이 랜덤하게 위치를 지정하기 때문에 순서가 중요한 `ordered data`에 적합하지 않음
    - 현실에서는 Address Book, Dictionary, 및 Blockchain을 만들 때 사용
    - JavaScript는 High Level Language이기 때문에 직접 메모리를 관리하며 범위를 할당할 수 없어서 Hash Table은 기술적으로 구현할 수 없으나, 빈 객체를 만들어서 Hash Table을 대체하여 사용할 수 있음
- 해시함수
    - 좋은 해시함수는 해시테이블의 크기가 m일때 임의의 키값을 임의의 해시값에 매핑할 확률이 1/m에 가까운 함수 (치우치치 않고 고른 해시값을 만들어 내는 함수)
    - `Division method`: 숫자로 된 키를 주로 소수 (prime number)로 된 해시테이블 크기 m 으로 나눈 나머지값을 해시값으로 반환
    - `Multiplication method`: 2진산 연산에 최적화한 컴퓨터 구조를 고려한 함수
    - `Universal hashing`: 다수의 해시함수를 만들고, 랜덤하게 하나를 선택해 해시값은 만드는 기법
    - 세계적으로 유명한 Hashing Function에는 `MD5`, `SHA` 등이 있음

### Chanining 방식

- 해시값에 value를 linkedlist 형식으로 head에 연결하는 방식
- hash table의 bucket사이즈를 늘릴 필요가 없음
- 시간복잡도:
    - 삽입: 해시함수 매핑 O(1) + 연결리스트 head 추가에 O(1) = `O(1)`
    - 탐색, 삭제
        - 해시함수 매핑 O(1) + 연결리스트 탐색 O(n) =  `O(1 + n)`
        - n = 해당 버킷의 노드 수
        - 최악의 경우 데이터가 한 버킷에 들어가면 `O(n)`에 가까워짐
        - 데이터의 개수가 버킷수에 비해 너무 그렇게 크지 않음 (2~3배) `O(1)`에 가까워짐

### Open Addressing 방식

- 한 버킷에 한 데이터만 삽입
- 충돌: value를 넣으려는 버킷에 이미 값이 있으면 넣을 수 있는 다른 버킷을 탐색 (probe)
    - Linear Probing (선형탐사): 데이터가 있으면 1칸 고정 이동, primary clustering에 취약
    - Quadratic Probing (제곱탐사): 데이터가 있으면 n^2칸 이동 (처음에 1^2칸, 재충돌시 2^2칸, 3^2칸...), secondary clustering에 취약
    - Double Hashing (이중해싱): 탐사이동폭을 해시함수를 통해 얻어, 최초 해시값이 같더라도 탐사이동폭이 달라지게 하는 것
        - hash1는 ‘3으로 나눈 나머지’, 탐사 이동폭을 결정해주는 hash2는 ‘5로 나눈 나머지’라면 3과 6의 최초 해시값은 모두 0이지만 탐사이동폭은 3과 1로 달라짐
- 시간복잡도:
    - 해시테이블과 데이터 크기에따라 다름.
    - 데이터가 테이블보다 작으면 삽입, 탐색, 삭제 모두 `O(1)`
    - 따라서 bucket이 어느정도 찾을 때 해시테이블의 크기 m 을 적절하게 늘려주고 처음부터 다시 해싱을 하는 것이 좋음
