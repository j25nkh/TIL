# Object (객체)

- object는 `key`와 `property`로 이루어져 있음
- 삭제: delete obj.key
- Object의 property에 접근하는 방법은 `dot notation`과 `bracket notation`이 있음

### Notation별 차이점

| Dot notation | Bracket notation |
| --- | --- |
| `.key` | `["key"]` |
| object.property 의 형태로 사용 | object.['property'] 의 형태로 사용 |
| key값이 동적으로 변할 때 사용에 한계가 있음 | key 값이 변수일 때 주로 사용 |
| 표현의 한계 존재 | 객체에 속성값이 문자열이라면 전부 접근가능 |

[출처](https://medium.com/sjk5766/javascript-object-key-vs-object-key-%EC%B0%A8%EC%9D%B4-3c21eb49b763)
```JavaScript
var a = {
 “a” : 1,
 “b-c”: 2,
 “0d” : 3,
 “d0” : 4
}
console.log(a.a)   // 1
console.log(a.b-c) // ReferenceError: c is not defined
//console.log(a.0d)// SyntaxError: Invalid or unexpected token
console.log(a.d0)  // 4


var a = {
 b : 1,
 c : 2
}
var b = ‘c’
console.log(a[b] + ‘ vs ‘ + a.b) // 2 vs 1
```


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
- 여기서 `person[key]`는 key의 실제 속성값을 찾아주지만 `person.key`는 객체 person의 속성 key라는 `문자열`을 찾기때문에 undefined를 출력

### Object Shorthand

 - 사용하는 변수와 생성하려는 객체의 프로퍼티가 같다면 아래와 같이 축약이 가능

 ```JavaScript
const name = "Jake";
const sex = "male";

const obj = {name: "Jake", sex: "male"};
const obj2 = {name, sex};

console.log(obj) // {name: 'Jake', sex: 'male'}
console.log(obj2) // {name: 'Jake', sex: 'male'}
 ```
