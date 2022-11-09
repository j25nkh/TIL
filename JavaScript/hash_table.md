# Hash Table

> 아주 중요한 자료구조

> 매핑 전의 값을 키 (`key`), 매핑 된 후의 값을 해시 값 (`hash value`), 이 과정을 해싱 (`hashing`) 이라 지칭

- Hashing을 통해 랜덤한 `주소가 참고 가능한 공간`으로 변환
- hashing 과정을 거침으로써 해시함수로 무한에 가까운 데이터(key)들을 유한한 개수의 해시값으로 매핑함으로써 작은 크기의 캐쉬 메모리로도 프로세스를 관리할 수 있음
- 색인(index)에 해시값(hash value)을 사용하며, 이렇게 얻은 색인을 주소 삼아 key, value 값을 저장
- 정리하면 키 값과 해쉬 함수를 이용해 해쉬 값을 얻고, 이 해쉬 값을 인덱스로 이용함으로써 자료의 탐색, 삽입, 삭제를 빠르게 할 수 있음 - Hash Table은 `Insertion`, `Deletion`, `Search`가 모두 `O(1)` - 항상 일정한 시간이 걸림
- Hashing function이 랜덤하게 위치를 지정하기 때문에 순서가 중요한 `ordered data`에 적합하지 않음
- Hashing function은 랜덤하게 위치를 지정할 수 있는 공간의 `범위`를 미리 `확보`하고 가기 때문에 많은 메모리 공간을 소모할 수 있다는 단점이 있음
- 따라서 좋은 `Hashing Function`을 사용하는 것이 매우 중요
- global named Hashing Function에는 `MD5`, `SHA` 등이 있음
- Hash function은 랜덤하게 할당하기 때문에, 다른 키값을 같은 아웃풋에 할당하는 `충돌`이 발행함
- `충돌`이 제로인 완전한 hash function은 없으나, 좋은 hash function은 충돌이 적음
- 현실에서는 Address Book이나 Blockchain을 만들 때 사용

> JavaScript에서 Hash Table은 기술적으로 구현할 수 없음.
- 하지만 JavaScript에 있는 일반 Object는 내부적으로 Hash Table을 사용해서 구현됬고 Hash Table과 유사한 성격을 가지고 있기 때문에, 빈 객체를 만들어서 Hash Table을 대체
- JavaScript는 High Level Language이기 때문에 직접 메모리를 관리하며 범위를 할당할 수 없기 때문

> Hashing Function이 갖춰야 할 특성

- Idempotent (멱등법칙) - 여러번 적용하더라도 결과가 달라지지 않는 성질
    - 같은 키값을 hash function에 넣었을 때 항상 동일한 결과 (동일한 위치)가 나오는 성질이 있어야 함

- value의 고른 분포가 이루어져야 함
- performance가 받쳐줘야함








