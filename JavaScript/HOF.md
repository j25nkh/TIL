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



