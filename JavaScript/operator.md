# Logical Operator

| Operator | - | Description | Note |
|--- | --- | --- | --- |
| ll | or | 하나라도 `true`면 `true`. 모든 값이 `false`일 때만 `false` | 그래서 첫 `true`에 평가 멈춤 |
| && | and | 모든값이 `true`면 `true`. 하나라도 `false`면 `false` | 그래서 첫 `false`에 평가 멈춤 |
| ! | not | - | - |

- 만약 test1이 false로 변환되는 값이라면 `test1 && test2`는 `test1`을 반환
- 만약 `false`를 원한다면 !!를 앞에 배치

```JavaScript
const a = -0 && "text"
console.log(a) // -0

const b = !-0 && "text"
console.log(b) // "text"

const c = !!-0 && "text"
console.log(c) // false
```

# Equal Operator (== vs. ===)

> Double Equal vs Triple (Strict) Equal Operator 

- == 은 두개의 타입을 하나의 타입으로 맞추고 비교 (예를 들면 양쪽을 문자열로 다 바꾼 뒤 비교)
- === 은 타입 체킹 후 값까지 같아야 같음
- 개발시 ==은 정말 특별한 경우가 아니라면 사용하지 않음
- JavaScript는 `type`에 약한 언어

- 예를 들면:

```JavaScript
const foo = 42;
const result = foo + "1"

console.log(result); // "421"
```

- 다른 예시로:
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
    - 따라서 array는 loop을 이용해서 item by item 비교

> 결론은 ===을 써서 타입체킹까지 되어야 더 안정적인 코딩이 됨

# 연산자 우선순위

- 사칙에서 곱하기 > 더하기 처럼 우선순위가 존재
- 같은 우선순위의 두 연산자가 마주치면 결합성을 따짐 (왼쪽에서 오른쪽으로 진행)
- 아래 예제의 경우 array의 길이가 0이고, 5 <= 0은 false 이며, false가 0으로 바뀌어 0 < = 10이기 때문에 실행.
- array의 길이가 6이면 이는 1로 변환되고, 1 <= 10 이기 때문에 실행.
- 결국 array의 길이에 상관없이 실행됨.

```JavaScript
const arr = Array(0);
if (5 <= arr.length <= 10) {
    console.log(arr.length);
}
```

# Increment / Decrement Operator (증감연산자)

```JavaScript
let a = 1;

var b = a++; // a = 2, b = 1
var b = ++a; // a = 2, b = 2

var b = a--; // a = 0, b = 1
var b = --a; // a = 0, b = 0
```

# Ternary Operator (삼항연산자)

> condition ? expressionIfTrue : expressionIfFalse

```JavaScript
Number.isInteger(3.12) 
    ? console.log("정수") 
    : console.log("정수아님"); // 정수아님
```



