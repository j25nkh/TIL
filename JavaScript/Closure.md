# Closure

> 함수가 `선언`될 당시 주변 환경 (Lexical Environment)와 함께 갇히는 것

 `선언`될 당시 그 `위치를 기준`으로 `변수들이 함수와 클로저를 형성`하고 있기 때문에 실행되는 위치, 실행되는 시점 (setTimeOut등)은 전혀 관계가 없이 주변환경을 `기억`

```JavaScript
function carrot() {
  let potatoCount = 0;

  function potato() {
    potatoCount++;
    console.log(potatoCount);
  }

  return potato;
}

const veggie = carrot();

veggie(); // 1
veggie(); // 2
veggie(); // 3
```
위 예제에서 veggie()의 실행값이 1이 아닌 이유는, 클로저가 형성된 후 변수에 대해 `지속적으로 그 변화를 추적`하기 때문에 최신 업데이트 된 변수가 남아있는 것 (Live Reference)

Closure는 `Garbage Collection`에 의해 정리되지 않기 때문에 성능 관련 이슈나 메모리 누수의 가장 흔한 원인임. 성능에 예민하지 않은 일상적인 상황에서는 신경쓰지 않아도 되나, 버벅이는 경우 대부분 메모리문제, 메모리 문제중에서도 클로저 문제.

개발자도구 → 메뉴의 Memory 탭 → Heap snapshot → 왼쪽 상단 꽉찬 동그라미 클릭 → 세부사항 확인 가능

# Execution Context (실행 컨텍스트)

> 함수가 `실행`될 때마다, 현재 실행되는 함수에 대한 관련 정보를 컴퓨터 메모리에 저장하는 것

아무것도 실행되기 전에 생기는 `Global context`까지 포함하면 함수의 갯수 + 1의 컨텍스트가 생성됨

컨텍스트가 포함하는 정보:

1. 변수정보 (일반변수, 매개변수, 함수선언 등)
    
2. 스코프 정보 (상위 스코프에 대한 reference, 최상위는 글로벌)

3. `this` 정보 (일반함수 실행시 global object)

[참고](https://res.cloudinary.com/practicaldev/image/fetch/s--zk1rqgAm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zxaetav5cz4gvi87sja5.png)
 


아래의 예제는 함수의 실행 컨텍스트가 i = 6 한번 적용

```JavaScript
for (var i = 1; i < 6; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// 6 (1초뒤)
// 6 (2초뒤)
// 6 (3초뒤)
// 6 (4초뒤)
// 6 (5초뒤)
```

 반면 아래의 예제는 함수가 `선언`될 당시 그 위치를 기준으로 변수들이 함수와 클로저를 형성하며, 함수가 `실행`될 때마다 실행 컨텍스트가 적용되어 j가 매번 업데이트되어 저장

```JavaScript
function setTimer(j) {
  setTimeout(function timer() {
    console.log(j);
  }, j * 1000);
}

for (var i = 1; i < 6; i++) {
  setTimer(i);
}

// 1 (1초뒤)
// 2 (2초뒤)
// 3 (3초뒤)
// 4 (4초뒤)
// 5 (5초뒤)
```
