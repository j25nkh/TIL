# Arguments 객체

- 함수의 인자가 array의 형태로 존재하는 것
    - array처럼 length, 0부터 시작되는 index를 가지고 있음
    - array와는 달리 forEach, map과 같은 내장 매서드를 가지고 있지 않음
- 모든 함수 내에서 이용가능한 지역변수

[출처 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)
```JavaScript
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```

아래의 방법을 통해 arguments를 array로 변환할 수 있음
```JavaScript
function foo(a, b, c, d) {
    var args = [...arguments];

    console.log(args); // [7, 4, 5, 1]
}

foo(7,4,5,1);
```

입력받고자 하는 매개변수의 갯수를 유동적으로 조절하는 것도 가능 ([출처](https://im-developer.tistory.com/66))
```JavaScript
function makeSum () {
	var sum = 0;
	for(var i=0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;
}

console.log(makeSum(4, 7, 8, 9, 10)); // 38
console.log(makeSum(1, 2, 3, 4)); // 10
console.log(makeSum(67, 42, 10, 7, 8, 91, 11)); // 236
```

