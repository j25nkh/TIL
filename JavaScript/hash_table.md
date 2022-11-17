# Hash Table

> `key`값이 `hashing function`을 거쳐 동일한 길이의 `hash value`로 변환되어, 이 `hash value`를 `index`로 사용하여 `value`를 저장하는 자료구조

- 필수 특성
    - Idempotent (멱등법칙) - 여러번 적용하더라도 결과가 달라지지 않는 성질
        - 같은 키값을 hash function에 넣었을 때 항상 동일한 결과 (동일한 위치)가 나오는 성질이 있어야 함
    - value의 고른 분포가 이루어져야 함
        - 사용하는 Hashing Fucntion에 따라 performance가 천차만별
- 시간복잡도
    - Hash Table은 자료의 탐색, 삽입, 삭제 모두 hashing function을 한번 거침으로 시간이 빠르며 일정
    - `Insertion`, `Deletion`, `Search`가 모두 `O(1)`
- 단점
    - Hashing function은 랜덤하게 위치를 지정할 수 있는 공간의 `범위`를 미리 `확보`하고 가기 때문에 많은 메모리 공간을 소모할 수 있다는 단점이 있음
- 충돌
    - Hash function은 인풋 키값을 무제한으로 받으수 있으나, 아웃풋은 두번째 hash function의 두번째 인자인 max값으로 제한이 걸림
    - Hash function은 랜덤하게 할당하기 때문에, 다른 키값을 같은 아웃풋에 할당하는 `충돌`이 발행함
    - `충돌`이 제로인 완전한 hash function은 없으나, 좋은 hash function은 충돌이 적음
    - 따라서 좋은 `Hashing Function`을 사용하는 것이 매우 중요
    - global named Hashing Function에는 `MD5`, `SHA` 등이 있음
- 적용
    - Hashing function이 랜덤하게 위치를 지정하기 때문에 순서가 중요한 `ordered data`에 적합하지 않음
    - 현실에서는 Address Book, Dictionary, 및 Blockchain을 만들 때 사용
    - JavaScript는 High Level Language이기 때문에 직접 메모리를 관리하며 범위를 할당할 수 없어서 Hash Table은 기술적으로 구현할 수 없으나, 빈 객체를 만들어서 Hash Table을 대체하여 사용할 수 있음

















