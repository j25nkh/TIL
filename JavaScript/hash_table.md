# Hash Table

> `key`값이 `hashing function`을 거쳐 동일한 길이의 `hash value`로 변환되어, 이 `hash value`를 `index`로 사용하여 `key`와 `value`를 나란히 저장하는 자료구조

- [참고자료1](https://ratsgo.github.io/data%20structure&algorithm/2017/10/25/hash/)
- [참고자료2](https://blog.devgenius.io/javascript-newbies-on-hash-table-c56b1e562721/)

- 필수 특성
    - Idempotent (멱등법칙) - 여러번 적용하더라도 결과가 달라지지 않는 성질
        - 같은 키값을 hash function에 넣었을 때 항상 동일한 결과 (동일한 위치)가 나오는 성질이 있어야 함
    - value의 고른 분포가 이루어져야 함
        - 사용하는 Hashing Fucntion에 따라 performance가 천차만별
- 시간복잡도
    - Hash Table은 자료의 탐색, 삽입, 삭제 모두 hashing function을 한번 거침으로 시간이 빠르며 일정
    - `Insertion`, `Deletion`, `Search`가 모두 `O(1)`
- 적용
    - Hashing function이 랜덤하게 위치를 지정하기 때문에 순서가 중요한 `ordered data`에 적합하지 않음
    - 현실에서는 Address Book, Dictionary, 및 Blockchain을 만들 때 사용
    - JavaScript는 High Level Language이기 때문에 직접 메모리를 관리하며 범위를 할당할 수 없어서 Hash Table은 기술적으로 구현할 수 없으나, 빈 객체를 만들어서 Hash Table을 대체하여 사용할 수 있음
- 충돌
    - Hashing function은 랜덤하게 위치를 지정할 수 있는 공간의 `범위`를 미리 `확보`하고 가기 때문에 많은 메모리 공간을 소모할 수 있다는 단점이 있음
    - 따라서 적절한 사이즈의 공간을 확보하는 것이 핵심이나, 공간이 작을 수록 충돌이 생길 여지가 많음
    - Hash function은 인풋 키값을 무제한으로 받으수 있으나, 아웃풋은 두번째 hash function의 두번째 인자인 max값으로 제한이 걸림
    - Hash function은 랜덤하게 할당하기 때문에, 다른 키값을 같은 아웃풋에 할당하는 `충돌`이 발행함
    - `충돌`이 제로인 완전한 hash function은 없으나, 좋은 hash function은 충돌이 적음
    - 따라서 좋은 `Hashing Function`을 사용하는 것이 매우 중요
    - global named Hashing Function에는 `MD5`, `SHA` 등이 있음
- 충돌에 대한 해결책: 
    - Chaining
        - 한 버킷에 들어갈 수 있는 엔트리수의 제한이 없음 (연결리스트)
        - 유연하다는 장점이 있으나 메모리 문제가 생길 수 잇음
    - open addressing)
        - 한 버킷에 들어갈 수 있는 엔트리가 하나
        - 메모리 문제가 발생하지 않으나 해시충돌이 생길 수 있음
        - 특정 해시값에 키가 몰리게 되는 clustering 현상이 발생, 효율성이 크게 떨어짐
        - 해결책
            - `Linear Probing` (선형탐사): 충돌시 n칸 옆에 입력 가능한지 검사, 반복
            - `Quadratic probing` (제곱 탐사): 충돌시 n^n칸 옆에 입력 가능한지 검사, 반복
            - `Double Hashing` (이중해싱): 탐사할 해시값의 규칙성을 없애버리는 방법 (탐사이동폭 랜덤)
    - 좋은 해시함수를 사용하여 충돌 완화
        - `Division method`: 숫자로 된 키를 해시테이블 크기 m (대게 소수)으로 나눈 나머지 반환
        - `universal hashing`: 다수의 해시함수를 만들고, 이들의 집합 중 무작위로 선택된 해시함수를 사용함


















