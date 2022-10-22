# Data Type

> Primitive Data Type (원시 타입)

- 변수에 정보를 저장

| Type | Description |
| --- | --- |
| Boolean | true / false |
| null | 의도적으로 값이 없음 |
| undefined | 정의되지 않음 |
| number | 자바스크립트에서는 int, float등 없이 하나의 숫자타입 존재, +infinity, -infinity도 가능 |
| string | ""혹은 ''fh wjddml|
| symbol | 이름의 충돌위험이 없는 유일한 객체의 property key를 만들기 위해 사용|



> Reference Type (객체 타입)

- 정보가 `저장된 위치`를 변수에 저장
- `array`와 `function`도 object

# Object (객체)

- object는 `key`와 `property`로 이루어져 있음
- Object의 `property`에 접근하는 방법은 두가지: `.key`와 `["key"]`
    
```JavaScript
let person = {
    name: "Jake",
    age: 35,
    address: "KR"
}

console.log(person.name); // Jake
console.log(person["name"]) //Jake
```

- 삭제: delete obj.key;

```JavaScript
let person = {
    name: "Jake",
    age: 35,
    address: "KR"
}

delete person.age;
console.log(person); // { name: 'Jake', address: 'KR' }
```

### 갹채 순회
```JavaScript
let person = {
    name: "Jake",
    age: 35,
    address: "KR"
}

for (let key in person) {
    console.log(key); // name, age, address
    console.log(person[key]); // Jake, 35, KR
    console.log(person.key); // undefined, undefined, undefined
}
```
여기서 `person[key]`값을 사용하면 실제 property값을 반환하지만 `person.key`를 사용하면 undefined를 출력

# Function (함수)

> 함수`표현`식 - Function Expression
- hoisting이 이루어지지 않아 코딩시 `배치순서`가 필수
- hoisting이 이루어지지 않기때문에 `클로져`나 `콜백`으로 유용하게 사용이 가능
    
```JavaScript
d(); // error

let d = function () {
    console.log("!");
}

d(); // !
```

> 함수`선언`식 - Function Declaration

- 최상위로 hoisted
    
```JavaScript
d(); // !

function d() {
    console.log("!");
}

d(); // !
```

