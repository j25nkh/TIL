# Function (함수)

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
- `클로져`나 `콜백`으로 유용하게 사용이 가능하다는 장점이 있음
    
```JavaScript
d(); // error

let d = function () {
    console.log("!");
}

d(); // !
```

### Closure (클로저) 함수

- `내부함수` (inner function)에서 `외부함수` (outter fuction)의 스코프에 접근을 가능하게 해주는 것
- 내부함수는 외부함수의 지역변수에 접근할 수 있는데, 외부함수의 실행이 끝나서 소멸된 이후 에도 외부함수의 변수에 접근이 가능함 - 클로저의 메커니즘
- JavaScript에서 클로저는 함수가 생성될 때마다 생성

```JavaScript
function outterFunction(){
    var print = 'sample text';  
    
    return function(){        
        console.log(print);
    }
}
innerFunction = outterFunction();
innerFunction(); // sample text
```

- innerFunction에 이름없는 function이 담겼으며, 마지막 줄이 실행되었을 때 outterFunction은 실행이 끝났음으로 이 함수의 지역변수가 사라지는 것이 자연스러워 보이나, 클로저 덕분에 `접근이 가능`하였음
