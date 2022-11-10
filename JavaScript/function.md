# 선언식 vs. 표현식

### 함수선언식 - Function Declaration

- 일반적인 프로그래밍 언어와 같은 함수 선언방식
- 최상위로 hoisting 되기 때문에 순서 배치가 자유로움
    
```JavaScript
d(); // !

function d() {
    console.log("!");
}

d(); // !
```

### 함수표현식 - Function Expression
- 자바스크립트 언어의 특징을 이용한 선언방식으로 `호이스팅에 영향을 받지 않음`
- Hoisting이 이루어지지 않아 코딩시 `배치순서`가 필수
- [클로져](https://github.com/j25nkh/TIL/blob/master/JavaScript/closure.md)나 `콜백`으로 유용하게 사용이 가능하다는 장점이 있음
    
```JavaScript
d(); // error

let d = function () {
    console.log("!");
}

d(); // !
```

# Callback (콜백) 함수

1. 다른 함수의 인자로써 이용되는 함수.
2. 어떤 이벤트에 의해 호출되어지는 함수.
- 파라미터로 함수를 전달하는 함수
- 콜백함수는 이름이 없는 '익명의 함수' 사용

예제: [출처](https://bigtop.tistory.com/35)
```JavaScript
function checkGang(count, link, good) {
    count < 3 ? link() : good();
  }
  function linkGang() {
    console.log('1일 3깡은 기본입니다. 아래 링크를 통해 깡을 시청해주세요');
    console.log('https://youtu.be/xqFvYsy4wE4');
  }
  function goodGang() {
    console.log('오늘 할당량은 모두 채우셨습니다! :)')
  }
  checkGang(2, linkGang, goodGang);  // 여기서 linkGang과 goodGang함수가 콜백함수
```

# Recursion Function (재귀)

> 스스로를 다시 부르는 행위

재귀 함수를 구현할 때는 반드시 `Termination Case`가 있어야 함

Life of rabbit 예제: 첫 해에는 토끼 한쌍, 토끼가 태어난 후 셋때 해부터 매해 한쌍의 토끼를 낳을 때 n해의 토끼수를 구하는 공식 (`피보나치 수열`)

```JavaScript
function rabbits(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return rabbits(n - 1) + rabbits(n - 2);
}
```

Factorial의 값을 구하는 예제:

```JavaScript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n = n * factorial(n - 1);
}

// factorial(5) = 120
```




# First Class Object (일급객체)

> 어떠한 프로그래밍 언어가 함수를 일급 객체로 다룬다면, 그 언어에서 함수는 일급 함수

JavaScript는 아래의 조건을 만족, JavaScript내에서 함수는 일급 객체:

일급객체의 조건:

- 인자로 전달할 수 있거나
- 반환 값으로 사용할 수 있거나
- 변수에 할당될 수 있거나 자료구조에 저장될 수 있거나

# HOF - Higher Order Function (고차함수)

> 함수를 인자로 받거나 반환하는 함수

인자로 함수를 받지 않고 함수를 반환하지도 않는다면, First Order Fucntion (일차원 함수 / 일반함수)라고 표현

일반함수 예제:
```JavaScript
function foo(a, b) {
  return a + b;
}

foo(1, 2);
```

HOF 예제:

```JavaScript
function foo (a, callback) {
  for (let i = 0; i < a.length; i++) {
    callback(a[i], i, a);
  }
}

foo([1,2,3], function log (item) {
  console.log(item);
});
// 1, 2, 3
```

```JavaScript
function repeat(n, callback) {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
}

repeat(5, console.log);
repeat(10, window.alert);
repeat(20, console.warn);
```
`map`, `reduce`등도 모두 고차함수



