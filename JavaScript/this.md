# This

- JavaScript의 모든 함수 (화살표 함수 제외) `내부`에서는 별도의 선언 없이 `this`라는 키워드 사용 가능
- `this`값은 `선언` 부분만 봐서는 알 수가 없으며, 그 함수가 어떻게 `실행`되었는지에 따라 결정: 
- `()가 붙은것을 실행하는 곳만 보면 됨`
- JavaScript 에서 함수가 실행될 수 있는 방법은 4가지며 그에 따른 `this`는 다음과 같음:

| 함수실행방법 | this값 |
|---|---|
|  1. Regular Function Call (일반적인 함수 실행) | `global object` (브라우저에서는 `window` /  strict mode에서는 `undefined`) |
| 2. Dot Notation (Object Method Call) | .앞의 객체 |
| 3. Call, Apply, Bind | 첫 번째 인자 |
| 4. 생성자함수 ("new" Keyword) | 새로운 빈 객체 |
| *화살표함수 | this 존재하지 않으므로, 사용시 일반변수 취급 |

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

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)
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

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)

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

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)

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

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)

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

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)

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

## 3. 함수의 Method 중 (.call / .apply / .bind method)

### function.call

-  `call 메소드는` 첫 번째 인자로 받은 값을 `this`로 설정하여 함수를 실행함
- 두 번째 인자를 시작으로 나머지 인자들은 해당 함수의 인자로 전달
- call 메소드는 받을 수 있는 인자의 갯수 제한이 없음

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)
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
- 위의 예제에서 마지막 2번째 줄은 `call 메소드`로 실행되어 첫번째 인자가 `this`
- 그 첫번째 인자가 `this`인데, 그럼 그 this가 포함된 함수가 `실행`된 방법을 찾으면 됨
- 그 함수가 setTimeout이라는 화살표 함수, 그래서 this는 일반 변수취급되어 this값을 찾을때까지 상위로 이동
- 그 상위는 global이므로 this.status = "A"
- .call(this) 대신 this 자리에 .`null`이나 `undefined`가 들어갔다면 this는 `global object` (비엄격모드)

### .apply

- `call 메소드`랑 똑같은데 단지 두번째~ 인자들을 배열로 받는 것
- `.apply` 메소드는 2개의 인자만을 받고, 첫 번째 인자는 `this`값으로 사용되며, 두번 째 인자는 `반드시 배열`이어야만 하고, 해당 배열의 요소들이 함수의 인자를 전달

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

- `.bind` 메소드는 `.call` 메소드와 똑같은데, `새로운 함수를 반환`하며 반환된 함수를 `실행`해야 원본 함수가 실행됨\
- 동일하게 받을 수 있는 인자 갯수에 제한이 없음
- `bind 메소드`는 반환된 함수를 `실행`하다 보니 일반함수를 실행하는 것 처럼 보일 수 있으니 주의해서 변별해야 함


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
function foo(a, b, c, d, e, f) {
  console.log(this.age);
  console.log(a + b + c + d + e + f);
}

const ken = {
  age: 35,
};

// 1 -> a
// 2 -> b
// 3 -> c
const bar = foo.bind(ken, 1, 2, 3);

// 4 -> d
// 5 -> e
// 6 -> f
bar(4, 5, 6); // 35 출력, 21 출력
```

## 4. 생성자함수 ('new' Keyword)

- this가 실행된 함수가 `생성자 함수` (함수 실행문 앞에 new 키워드가 붙어 실행되는 것)인 경우 `this`는 새로운 `빈 객체`
- foo() 는 일반함수, new foo() 는 `생성자 함수`
- 보통 생성자 함수이름은 `대문자`로 시작하는 것이 관례
- 일반함수 이름은 통상 `소문자`로 시작

[예제출처: 바닐라코딩](https://www.vanillacoding.co/)
```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

new Person("ken", 30); //Person{name: "ken", age: 30}
```

## *화살표 함수

> this가 일반 변수가 됨으로, this값이 없을 시 this를 찾아 상위 스코프로 이동. 상위 스코프가 `실행`된 방식에 따라 this가 결정되며, 없을시 계속 위로 이동


# This 예제

```JavaScript
var obj = {
  a: console.log(this), // --- (1)
  fn: function() {
    console.log(this); // --- (2)
    function fn() {
      console.log(this); // --- (3)
    }
    fn();
  }
}

obj.a;
obj.fn();
```
1. This는 함수가 실행되어야 값이 정해지는데, 1번에서는 실행된 함수가 없음. 그래서 여기에 없는 this를 찾기 위해 상위 (글로벌)에서 this를 찾음. 그래서 답은 `global object`

2. Obj.fn()가 dot notation으로 실행되었기 때문에 this는 `obj`

3. fn()의 형태로 일반적 실행이니 this는 `global object`


```JavaScript
globalThis.baz = 1;

const obj = {
  baz: 101,

  func1: function () {
    console.log("func1 = ", baz, this.baz); // --- (1)

    const func2 = function () {
      console.log("func2 = ", baz, this.baz); // --- (2)
    };

    func2();
  };
};

obj.func1();
```
1. baz는 1, this.baz는 101 (위에 baz: 101 이건 그냥 객체)

2. 1, 1 (일반실행)

```JavaScript
globalThis.baz = 1;

function Constructor {
  this.baz = 201;

  this.func3 = function () {
    console.log("func3 = ", baz, this.baz); // --- (1)

    func4();
  };

  const func4 = function () {
    console.log("func4 = ", baz, this.baz); // --- (2)
  };
}
  
const instance = new Constructor();
instance.func3();
```

1. 1 (this.func3에 값이 없어서 상위에서 baz값을 찾음), 201

2. 1 (같은 이유), 1 (일반실행)
