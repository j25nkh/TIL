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
