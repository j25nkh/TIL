# This

> 항상 함수 내부에서 사용, `this`값은 this가 사용된 함수가 어떻게 `실행`되었느냐에 따라 결정

고로 `선언` 부분만 봐서는 this 값을 알 수가 없음. 따라서 그 함수가 어떻게 실행되었는지만 판별한다면 this 값을 쉽게 판별할 수 있음.

JavaScript 에서 함수가 실행될 수 있는 방법은 4가지:

1. Regular Function Call (일반적인 함수 실행) `this는 window (undefined in 엄격모드)`
2. Dot Notation (Object Method Call) `this는 .앞의 객체`
3. Call, Apply, Bind `this는 첫 번째 인자`
4. "new" Keyword `this는 새로운 빈 객체`

- 화살표 함수는 `this`가 존재하지 않음, 사용 시 일반 변수로 취급됨.
- 대부분의 상황에서 `this`는 객체, 그래서 this.age 이런식으로 사용되는 경우가 많음.

## 1. Regular Function Call

> `this`는 window (Strict Mode에서는 `undefined`)

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

## 2. Dot Notation

> `this`는 `.`앞의 객체

- jake.age(); 등으로 실행되는 함수

예제1:

```JavaScript
var age = 100;

function logAge() {
  console.log(this.age);
}

const ken = {
  age: 36,
  logAge: logAge,
};

const wan = {
  age: 32,
  logAge: ken.logAge,
};

ken.logAge(); // 36
wan.logAge(); // 32
```

예제2:

```JavaScript
var age = 100;

function verifyAge() {
  return this.age > 21;
}

const ken = {
  age: 20,
  verifyAge: verifyAge,
};

const sevenEleven = {
  sellBeer: function (customer) {
    if (!verifyAge()) {
      return "No Beer";
    }

    return "Beer";
  },
};

sevenEleven.sellBeer(ken); //Bear
```

- 위의 예제에서 this가 실행된 함수 verifyAge()는 일반 함수 호출로 불렸으므로 전역객체 `global object` 값이며, this.age는 100 (첫 줄). 그렇기 때문에 verifyAge 함수가 true를 리턴하며 Bear가 출력.

예제3:

```JavaScript
var age = 100;

function verifyAge() {
  return this.age > 21;
}

const ken = {
  age: 20,
  verifyAge: verifyAge,
};

const sevenEleven = {
  sellBeer: (customer) => {
    if (!customer.verifyAge()) {
      return "No Beer";
    }

    return "Beer";
  },
};

sevenEleven.sellBeer(ken); // No Bear
```

- 위의 예제에서는 dot notation으로 실행되었기 때문에 this는 ken.

예제4:

```JavaScript
function makePerson(name, age) {
  return {
    name,
    age,
    verifyAge: () => {
      return this.age > 21;
    },
  };
}

const ken = makePerson("ken", 30);

if (ken.verifyAge()) {
  alert("Yes, Beer!");
} else {
  alert("No, Beer!");
}
// No Bear
```

- 위 예제의 경우 this가 실행된 verifyAge 함수가 화살표 함수로서 실행. This 값이 없기 때문에 값을 찾아 거슬러 올라가게 되며, 가장 가까운 함수는 makerPerson. `makePerson`은 실행될 때 `일반 함수 실행`이기 때문에 this는 `global object`가 됨. Global에 age가 없기때문에 this.age는 undefined가 되며, undefined와 21을 비교하여 false가 나옴. No bear 출력.

## 3. .call / .apply / .bind

- 모든 자바스크립트의 객체 (배열, 함수 포함)은 내장된 메소드들을 가지고 있음.
- 배열의 경우 `.push`등의 메소드들을 사용할 수 있듯이, 함수 또한 함수만의 메소드가 있음.

### .call

> `.call` 메소드는 첫 번째 인자로 받은 값을 `this`로 설정하여 함수를 실행하며, 두 번째 인자를 시작으로 나머지 인자들은 해당 함수의 인자로 전달

- `.call` 메소드를 실행한다는 것은 `.call`이 사용된 함수를 실행한다는 것

```JavaScript
function foo(a, b, c) {
  console.log(this.age);
  console.log(a + b + c);
}

const ken = {
  age: 35,
};

foo.call(ken, 1, 2, 3);
// 35
// 6
```

### .apply

> `.apply` 메소드는 2개의 인자만을 받고, 첫 번째 인자는 `this`값으로 사용되며, 두번 째 인자는 `반드시 배열`이어야만 하고, 해당 배열의 요소들이 함수의 인자를 전달

- 메소드가 사용된 함수를 실행한다는 사실에는 변함이 없음

```JavaScript
function foo(a, b, c) {
  console.log(this.age);
  console.log(a + b + c);
}

const ken = {
  age: 35,
};

foo.apply(ken, [1, 2, 3]);
// 35
// 6
```

### .bind

> `.bind` 메소드는 `.call` 메소드와 유사하게 첫 번째 인자로 주어진 값을 `this`로 설정하지만, 새로운 함수`를 반환하며 반환된 함수를 `실행`해야 원본 함수가 실행됨

- 메소드가 사용된 함수를 실행한다는 사실에는 변함이 없음

```JavaScript
function foo(a, b, c) {
  console.log(this.age);
  console.log(a + b + c);
}

const ken = {
  age: 35,
};

const bar = foo.bind(ken, 1, 2, 3);

bar();
// 35
// 6
```

```JavaScript
var status = "A";

setTimeout(() => {
  const status = "B";

  const data = {
    status: "C",
    getStatus: function () {
      return this.status;
    }
  };
  
  console.log(data.getStatus.call(this));
}, 0);
// A
```

- 위의 예제에서 마지막 2번째 줄 call안의 `this`를 포함하는 함수가 실행되는 함수를 찾아야 하는데, 얘는 그 위의 함수가 없으므로 전역 스코프에서 실행된 것, 고로 `this`는 `window`.
- return 라인의 this는 그래서 window로 설정되어 실행되는 것이고, 따라서 출력값은 `A`.

## 4. 'new' Keyword

> this가 실행된 함수가 `new` 키워드를 이용하여 함수를 실행된 경우, 해당 함수의 `this`는 새로운 `빈 객체`

- 통상 foo(); 이렇게 실행하지만 new foo(); 이렇게도 실행 가능.
- foo() 는 일반함수, new foo() 는 `생성자 함수`
- 보통 생성자 함수이름은 `대문자`로 시작하는 것이 관례
- 일반함수 이름은 통상 `소문자`로 시작


```JavaScript

```