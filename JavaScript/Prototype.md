

# Constructor Function (생성자 함수)

- `new` 키워드와 함세 어떤 함수를 실행하는 것, 함수명은 명사, `첫 글자는 대문자`
- 원래 `return`을 명시 하지 않는 함수를 반환값이 없으나, `생성자 함수는 기본으로 빈 객체를 만들어, 그 안에 this를 넣어 반환`함.
- 생성자 함수가 반환해주는 빈 객체는 흔히 `instance`라고 부름
- 만약 `객체`를 리턴하면 this를 리턴하지 않음, 그 외를 리턴할 시 그대로 `this`를 리턴
- 일반적인 상황에서 생성자 함수를 사용할 시 `return`을 쓰지 않고, `this`를 리턴해서 사용
- 아래의 예제에서 `new`가 없었다면 반환값이 없음

```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const ken = new Person("ken", 37); // 생성자 함수

console.log(ken); // 여기서 ken은 Person의 인스턴스다 라고 표현
```

### Object, Array 등을 생성할때 보통 이렇게 사용:

```JavaScript
const obj = {};
const arr = [];
const func = function () {};
```

- array, function 또한 모드 object이며 `New`를 사용하여 생성이 가능:

```JavaScript
const obj = new Object();
const arr = new Array();
const func = new Function();
```

> Object와 Array 모두 대문자에 new 키워드 → 사실상 `내장된 생성자 함수`가 background에서 돌아가는 것

- 그래서 우리가 간결하게 코드를 작성해도 JavaScript 내부에서는 생성자 함수를 이용해 만드는 것과 동일하게 object를 생성

- 따라서 모든 JavaScript Obj는 생성자 함수를 사용해서 만듬

- 함수도 객체이기 때문에 func.title 이런게 가능

# Prototype

- 모든 함수는 생성될 때 prototype을 가지고 생성됨 (배열의 `length`처럼)

```JavaScript
function bar () {} // 함수 생성
bar.prototype; // prototype 기본 내장
```

- 일반적인 상황에서 함수의 `prototype`객체는 별 다른 역할을 하지 않으나, `생성자 함수`로서 실행될 때 특별한 역할을 함
- 자바스크립트의 모든 `인스턴스` 객체는 해당객체의` 프로토타입`에 존재하는 `속성` 및 `메소드`에 접근하여 사용할 수 있습니다.


```JavaScript
function Person (name) {
  this.name = name;
}

Person.prototype.age = 30;

const ken = new Person("ken");

console.log(ken); // Person { name: 'ken' }
console.log(ken.age); // 30
```

- 위 예제에서 ken이라는 인스턴스에 age라는 속성이 없는데도 불구 하고 출력이 가능
- 이는 `ken.age`가 `Person.prototype.age`값을 출력했기 때문

```JavaScript
var obj = {}
// var obj = new Object()와 동일

Object.prototype.hello = 123;
console.log(obj.hello); // 123
```

```JavaScript
var arr = []
// var arr = new Array()와 동일

Array.prototype.hello = 345;
console.log(arr.hello); // 345
```

- 위 처럼 인스턴스는 본인의 프로토타입에 있는 속성과 메소드를 쓸 수 있으나, 인스턴스 `본인에게 해당 속성이 있으면`, 본인것을 사용

```JavaScript
var obj = {}
Object.prototype.hello = 123;
console.log(obj.hello); // 123
console.log(obj); // {}

obj.hello = 345;
console.log(obj.hello); // 345
console.log(obj); // {hello: 345}
```

- Method 들의 문서를 찾으면 `array.prototype.push()` 이런 식으로 되어 있음

```JavaScript
var arr = [];
arr.push(1);
```

> 이런 예제도 사실은 `Array라는 생성자함수`를 통해 생성한 `arr라는 인스턴스`에 `Array.prototype에 내장되어 존재하는 push라는 메소드`를 인스턴스가 사용 하는 것

- 따라서 아래처럼 인스턴스 내에서 `.push`를 재 정의하는 것도 가능하나, 실제로 현업에서 내장 프로토타입을 수정하는 것은 위험한 작업방식으로 지양

```JavaScript
var arr = [];
arr.push = function () {console.log("push...");};

arr.push(2); // push...
console.log(arr); //[ push: [λ] ]
```

- array 또한 object의 종류로서 아래의 예제들도 가능

```JavaScript
Object.prototype.me = "ken";
const arr = [];
console.log(arr.me); // ken
```

```JavaScript
Object.prototype.me = "you";

function Person (name) {
  this.name = name;
}

const ken = new Person("ken");

console.log(ken.me); // you
```

### Dunder proto (던더 프로토)

> `Person.prototype` 을 통해서 Person의 prototype 객체에 접근할 수 도 있지만, 인스턴스가 생성될 때 함께 생성되는 `인스턴스`의 `__proto__`를 통해서도 Person의 prototype 객체에 접근 할 수 있다.

- 실제로 현업에서는 사용하면 안됨

```JavaScript
function Person (name) {
  this.name = name;
}

const ken = new Person("ken");

ken.__proto__.me = "you";

console.log(ken.me); // you
console.log(ken); // Person { name: 'ken' }
```

```JavaScript
function Person (name) {
  this.name = name;
}

const ken = new Person("ken");
const result = Person.prototype === ken.__proto__;
console.log(result); // true

const result = Array.prototype.__proto__ === Object.prototype;
console.log(result); // true

const result = null === Object.prototype.__proto__;
console.log(result); //true
```

# Inheritance

- JavaScript의 경우 `inheritance`가 엄밀이 따지면 상속은 아님
- 다른 언어에서는 상속을 주는 주체가 상속을 준 만큼 없어져야 하는데, JavaScript는 parents급 주체가 대신 해 주는 것에 가까움. 
- 하지만 통상 `상속`이라 통용

### Object.create()

- `프로토타입이 인자`인 `빈 객체`를 생성

```JavaScript
var obj = {hello: 1}
var ken = Object.create(obj);

console.log(ken); // {}
console.log(ken.hello); // 1
```

- `inheritance`를 이용한 `instance`의 `prototype 부여` 예제

```JavaScript
function Animal (name) {
    this.name = name;
  }
  
  Animal.prototype.sleep = function () {
    console.log("sleep");
  };
  
  function Human (name, language) {
    Animal.call(this, name); // call 메소드의 첫 인자는 this, 두 번째 인자인 name은 Animal이라는 함수가 인자를 필요로 하기 때문에 받아서 넣어준 것
    this.language = language
  }
  
  Human.prototype = Object.create(Animal.prototype);
  // Animal.prototype이 프로토타입인 빈 객체가 Human.prototype의 프로토타입
  
  Human.prototype.constructor = Human;
  // 모든 constructor (생성자함수)에 프로토타입이 존재하듯, 모든 프로토타입에도 constructor가 존재
  // 윗 줄에서 prototype을 지정해주었기 때문에 constructor 또한 지정해주어야 함
  
  Human.prototype.write = function () {
    console.log("write");
  };
  
  // inheritance를 통해 Object > Animal > Human 순으로 계층이 형성
  
  var dog = new Animal("badooki");
  var ken = new Human("ken", "Korean");

console.log(dog); // Animal { name: 'badooki' }
console.log(dog.name); // badooki​​
console.log(dog.language); // undefined

console.log(ken); // Human { name: 'ken', language: 'Korean' }
console.log(ken.write); // [λ]
```