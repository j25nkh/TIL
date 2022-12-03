# Asynchronous (비동기)

### 동기 / 비동기 함수 동작순서 메커니즘

- 일반적 callback으로 비동기를 진행할때, return이 없음 (순서가 없기때문에 누가 누구한테 줄지 불명확)
- 함수가 callback의 형태로 불리는거지 동기 흐름처럼 값을 반환해서 이어받고 추가연산을 행하는 것 자체가 불가능함
- JavaScript 내 비동기 함수
    - `setTimeOut`
    - `ajax` 함수
    - `fetch` (브라우저에 요청을 보내달라고 주문을 넣는 함수)
    - `이벤트리스너`
- [참고: 코딩애플](https://www.youtube.com/watch?v=v67LloZ1ieI)

### 직렬 진행

- 첫 번째 비동기 작업이 모두 완료된 후, 다음 비동기 시작

    ```JavaScript
    setTimeout(function foo() {
        console.log("Serial 1");

        setTimeout(function bar() {
            console.log("Serial 2");
        }, 1000);
    }, 1000);
    ```

### 병렬 진행

- 첫 번째 비동기에 대한 완료를 기다리지 않고 다음 비동기 시작

    ```JavaScript
    setTimeout(function foo() {
        console.log("Parallel 1");
    }, 1000);

    setTimeout(function bar() {
     console.log("Parallel 2");
    }, 1000);
    ```


# Promise

### Promise의 특징
- 비동기 callback과 다르게 `return`을 할 수 있다는 것, `에러핸들링`이 용이하다는 것이 가장 큰 장점
- 비동기를 간편하게 (`콜백지옥 탈출`) 처리하도록 돕는 JavaScript 내장 `오브젝트`
- `promise는 객체를 반환하는 class`고 따라서 변수에 담을 수 있고, 따라서 `return`도 할 수 있음. 기존 callback에서 저글링 하던것과 비교하면 많은 옵션이 열리는 것.
- 객체지향 프로그래밍의 모범예
- Promise 생성자함수는 함수를 매개변수로 받으며, 그 함수는 매개변수로 `resolve`와 `reject`라는 함수를 자동으로 사용. 정해진 기능 수행 후,
    - 성공시 `resolve` 함수를 실행
    - 실패시 `reject` 함수를 실행

### Promise의 구조
- State (상태): `pending` -> `fulfilled` or `rejected`
    - resolve가 실행되면 fulfilled 상태가 되고, reject가 실행되면 rejected 상태가 됨
    - console에 `인스턴스이름;` 찍어보면 나옴
    - 한번이라도 성공하거나 실패한 promise는 초기상태로 돌아갈 수 없음
- Producer vs. Consumer
- 모든 promise 인스턴스는 `.then`, `.catch`, `.finally`의 메소드를 사용할 수 있음
    - `.then`은 성공시의 로직, `.catch`는 에러로직
    - 메소드들은 매개변수로 callback함수를 받음
    - 그 callback 함수는 promise가 fulfilled/rejected 되었을 때 호출됨
    - 그 callback 함수는 resolve/reject 되었을 때 넣어주는 데이터를 인자로 받음
- [참고: 드림코딩](https://www.youtube.com/watch?v=JB_yU6Oe2eE&t)

```JavaScript
// 출처: 바닐라코딩
console.log(0); // 동기

const p1 = new Promise(function (resolve, reject) { // <- 프로미스를 만드는 순간 executor 함수가 자동으로 실행, 따라서 아래 1 출력
  console.log(1); // 동기로 바로 실행

  setTimeout(function () {
    console.log(2); // 비동기
    resolve();
  }, 1000);
});

console.log(3); // 동기

p1.then(function one () {
  console.log(4); // 비동기
})
  .then(function two () {
    console.log(5); // 비동기
  })
  .catch(function onError () {
    console.log(6); // 비동기
  })
  .finally(function final () {
    console.log(7); // 비동기
  });

console.log(8); // 동기

// 찍히는 순서는 0 - 1 - 3 - 8  - (1초뒤) - 2 - 4 - 5 - 7

```

```JavaScript
let successful = true;

// [1. Producer part]
const promise = new Promise(function (resolve, reject)  {

  console.log('doing something...');

  if (successful) {
    setTimeout(function() {
      resolve('successful!');
    }, 2000);
  } else {
    setTimeout(function() {
      reject(new Error('no network'));
    }, 2000);
  }
});

// [2. Consumer part]
promise
    // 성공 케이스. 여기서 value는 resolve라는 콜백함수를 통해 전달한 값
  .then(function (value) {
    console.log(value);
  })
  // pro mise의 then을 호출하게 되면 똑같은 promise를 호출하기 때문에 그걸 잡아서 error를 chaining할 수 있음
  .catch(function (error) { // 실패 케이스.
    console.log(error);
  })
  // 성공/실패에 상관 없이 무조건 마지막에 실행되는 녀석
  .finally(function() {
    console.log('finally');
  });

// doing something...
// successful!
// finally
```

### Promise 체이닝

- then 실행구문은 promise 인스턴스를 반환값으로 리턴
- 따라서 .thenm .catch를 연결해서 체이닝 할 수 있음
- 이전 블록의 반환값은 다음 것으로 이어짐

```JavaScript
// 출처: 바닐라코딩
promise.then(function done (data) {
    console.log("Promise sucess!", data);
    return 1;
}).then(function handleOne (one) {
    console.log("I am one,", data);
    return one + 1;
}).then(function handleTwo (two) {
    console.log("I am two.", data);
}).then(function handleError (data) {
    console.log("Promise Failed!", data); // 앞의 구문에서 나오는 모든 에러를 캐치
});
```

```JavaScript
// 출처: 드림코딩
const fetchNumber = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));
```

```JavaScript
// 출처: 드림코딩
const fetchNumber = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
});

fetchNumber
.then(function(value) {
  return value * 2; // 2
})
.then(function(value) {
  return value * 3; // 6
})
.then(function(value) { // 다른 비동기와 연결
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value - 1), 1000);
  });
})
.then(num => console.log(num));
// 5
```

# async await

###   특징
- 비동기를 동기 코드 흐름과 유사한 형태로 편리하게 작성 가능
- 함수 앞 `async`를 붙이면 promise의 producer 파트를 모두 대체할 수 있음
- async 함수는 항상 `promise 객체를 반환`, 만약 return을 사용한다면 `resolve`값으로 사용됨
- [출처: 드림코딩](https://www.youtube.com/watch?v=aoQSOZfz3vQ&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=13)
```JavaScript
// Promise 사용
function fetchUser() {
  return new Promise((resolve, reject) => {
      resolve('Jake');
  })
}

const user = fetchUser();
user.then(console.log);
console.log(user); // {'Jake'}
```

```JavaScript
// async 사용
async function fetchUser() {
  return 'Jake';
}

const user = fetchUser();
user.then(console.log);
console.log(user); // {'Jake'}
```

- `await`은 aync가 붙은 함수 `내부`에서만 사용할 수 있음
- `await 변수`형태로 쓰이며, 이 변수는 `promise가 할당`된 변수
- 출처: 바닐라코딩
```JavaScript
// Async/Await Example #1
const a = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(666);
  }, 1000);
});

const b = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(777);
  }, 1000);
});

// a, b: promise
async function process() {
  const result = (await a) + (await b);
  console.log(result);
}

process();
