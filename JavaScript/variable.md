# Variable (변수)

### const, let, var

- array, obj는 메모리 주소를 참조하기 때문에 const를 써도 내용을 바꾸거나, 인덱스에 접근해서 값을 변경할 수 있음
- var는 사용하지 않는 것이 원칙이며, 습관을 위해 모두 `cont`로 선언 후 재할당이 필요한 변수만 `let`으로 변경하는 방법이 있음
- Team project시 변형되면 안되는 변수를 const로 선언하지 않아 override되는 경우를 방지

| - | scope | 중복선언 | 재할당 | 비고 |
|---|---|---|---|---|
| var | function-level | 가능 | 가능 |  |
| let | block-level | 불가능 | 가능 ||
| const | block-level | 불가능 | 불가능 ||

### Scope
- function-level은 함수 내에서만 유효하며, 함수 밖에서 선언되면 모두 전역 scope
- block-level은 함수, if문, for문 등의 블록 내 지역 scope


### 호이스팅

- 모든 `변수의 선언`은 scope 내에서 최상위로 hoisting 됨
- var, let, const를 이용해 선언만 이루어진 경우, 셋다 `hoisting`이 일어나는 것은 동일
- let과 const는 값을 아무것도 넣지 않은 `초기화가 필요한 상태`
- 반면 var는 hoisting이 일어날 때, `undefined`를 넣어 초기화

```JavaScript
console.log(a);
var a; // undefined

//이는 아래와 동일
var a;
console.log(a); // undefined
a = 1;

console.log(b);
// b를 쓸 수 없는 이 사이공간은 Temporal Dead Zone이라 지칭
let b; // error 출력
```
