# 코딩 컨벤션

> [에어비앤비 인덴팅 관련 코드 컨벤션](https://github.com/airbnb/javascript#whitespace--spaces)

- 인덴트 space 2칸 권장, 한 프로젝트 내 일관성이 더 중요
- `Early Return` 사용
- for문, if, 함수등의 블럭문은 구분되도록 상단/하단 개행
- 중괄호 생략 지양
retrun 위는 개행
- 에어비엔비 컨벤션에서는 [함수선언식보다는 함수표현식을 권장](https://airbnb.io/javascript/#functions--declarations)
    - 함수선언식은 순서배치 사용이 너무 쉽기때문에
    - readability와 maintainability를 위해 순서를 중시하는 함수표현식을 추천
- 마지막줄은 한줄만 개행

### Boolean 네이밍

- is나 has prefix를 넣어 변수이름만 봐도 boolean 값인지 유추 가능하도록 지정

### constant (상수) 네이밍

- 대문자로 된 스네이크 케이스
- const MAX_LENGTH = 10;

### 세미콜론 사용

- 명령문 이후에 사용
    - var i = 5;
    - var func = function () {...}`;`
- {} 닫힌 후 사용 X (오브젝트 선언 예외)
    - function func () {}
- 함수표현식은 변수에 할당하는 명령문으로 `;`가 붙음

```JavaScript
// 선언식
funciton foo() {}

// 표현식
const foo = function() {};
```

### 주석사용

- [참조](https://ko.javascript.info/comments)

### return과 삼항연산자를 이용한 코드 개선

```JavaScript
// 개선 전
function recursion(element) {
  if (element.value >= Node.value) {
    if (!element.left) {
      element.left = node;
    } else {
      recursion(element.left);
    }
  } else {
    if (!element.right) {
      element.right = node;
    } else {
      recursion(element.right);
    }
  }
}

// 개선 후
function recursion(element) {
  if (element.value >= Node.value) {
    element.left ? recursion(element.left) : lement.left = node;
  } else {
    element.left ? recursion(element.right) : lement.right = node;
  }
}

// even more 개선 후 
// 기존 함수는 리턴값이 없었기 때문에 여기서 리턴은 값을 반환하긴 하지만 함수 종료의 의미로 사용
function recursion(element) {
  if (element.value >= Node.value) {
    return element.left ? recursion(element.left) : lement.left = node;
  } 
  
  return element.left ? recursion(element.right) : lement.right = node;
}

// 명시적인게 좋다면 아래와 같이 가능
function recursion(element) {
  if (element.value >= Node.value) {
    element.left ? recursion(element.left) : lement.left = node;
    return;
  } 
  
  element.left ? recursion(element.right) : lement.right = node;
}
```
