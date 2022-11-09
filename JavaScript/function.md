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
