# This

> 항상 함수 내부에서 사용, `this`값은 this가 사용된 함수가 어떻게 `실행`되었느냐에 따라 결정

고로 `선언` 부분만 봐서는 this 값을 알 수가 없음. 따라서 그 함수가 어떻게 실행되었는지만 판별한다면 this 값을 쉽게 판별할 수 있음.

JavaScript 에서 함수가 실행될 수 있는 방법은 4가지:

1. Regular Function Call (일반적인 함수 실행)
2. Dot Notation (Object Method Call)
3. Call, Apply, Bind
4. "new" Keyword

## 1. Regular Function Call

- 가장 일반적인 형태, `함수이름` + `소괄호` 형태
- 일반적인 함수 실행시 this 값은 Global Object (글로벌 객체)
- 브라우저에서 글로벌 객체는 `window`
- 현실에서는 this를 윈도우로 설정하는 일은 없이 때문에, this가 윈도우라면 잘못 설정된 버그일 확률이 높음
- `Strict Mode`에서 함수가 일반 함수 실행방식으로 실행되면 this 값은 Global object가 아닌 `undefined`
    - 따라서 undefined인 window`.`을 `undefined.`  →  `error`로 잘 잡아주는 역할 
    - 이전에 허용되었던 실수를 오류로 바꿔서 디버깅이 쉬워짐
    - 코드 위에 `'use strict';`를 적어주면 실행 가능
    - 현업에서는 거의 strict 모드를 켜서 하는것이 추세


```JavaScript
var age = 30;

const person = {
  age: 20,
  printAge: function () {
    bar();
  },
};

function bar() {
  console.log(this.age);
}

person.printAge();
// undefined
// Strict Mode였으면 Error
```

여기서 this는 윈도우

```JavaScript

```

```JavaScript

```

```JavaScript

```










```JavaScript
var age = 30;

const ken = {
  age: 20,
  logAge: function () {
    // 대부분의 상황에서 `this`는 객체입니다.
    console.log(this.age);
  },
};

const func = ken.logAge;

ken.logAge();
func();
```

화살표 함수는 `this`가 존재하지 않음, 사용 시 일반 변수로 취급됨.

대부분의 상황에서 `this`는 객체, 그래서 this.age 이런식으로 사용되는 경우가 많음.
