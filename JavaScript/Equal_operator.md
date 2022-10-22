# Equal Operator (== vs. ===)

> Double Equal vs Triple (Strict) Equal Operator 

- == 은 두개의 타입을 하나의 타입으로 맞추고 비교 (예를 들면 양쪽을 문자열로 다 바꾼 뒤 비교)
- === 은 타입 체킹 후 값까지 같아야 같음
- 개발시 ==은 정말 특별한 경우가 아니라면 사용하지 않음
- JavaScript는 `type`에 약한 언어

예를 들면:

```JavaScript
const foo = 42;
const result = foo + "1"

console.log(result); // "421"
```

다른 예시로:
```JavaScript
let stringOrNumberOne = "1";

if (stringOrNumberOne == 1) {
    stringOrNumberOne += 2;
}

if (stringOrNumberOne === 1) {
    stringOrNumberOne += 2;
}
```

- 이 경우 == 이면 첫번째 if가 수행되어 "12"가 됨  →  버그 발생 가능
- === 이면 두번째 if가 수행되어 3이 됨
- undefined == null  →  true
- undefined === null  →  false
- undefined는 할당하지 않은 것, null은 비어있는 것
- 배열, 객체 (object)는 `==`든 `===`든 모두 false (메모리 참조갑이 다름)

> 결론은 ===을 써서 타입체킹까지 되어야 더 안정적인 코딩이 됨
