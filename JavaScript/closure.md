# Closure (클로저)

- 함수가 `선언`(생성, 실행과는 별개)될 당시의 주변환경 (Lexical Environment)과 함께 갇히는 것
- JavaScript에서 클로저는 함수가 생성될 때마다 생성
- 실행되는 위치, 시점(setTimeout) 다 상관없이 유효
- `내부함수` (inner function)에서 `외부함수` (outter fuction)의 스코프에 접근을 가능하게 해주는 것
- 내부함수는 외부함수의 지역변수에 접근할 수 있는데, 외부함수의 실행이 끝나서 소멸된 이후 에도 외부함수의 변수에 접근이 가능함 - 클로저의 메커니즘
- Closure는 `garbage collector`에 의해 정리되지 않기 때문에, 성능저하나 메모리 누수의 가장 흔한 원인

```JavaScript
function outterFunction () {
    var count = 0;  
    
    function log () {
      count++;
      console.log(count);
    }
    
    return log;
    //log라는 함수를 실행하는게 아닌 통채로 리턴, ()없이
}

const innerFunction = outterFunction(); 
// innerFunction이라는 함수를 만들고, outterFunction을 실행
// 사실상 function log 가 담김

innerFunction(); 
// 1 출력: count를 접근할 수 없는 글로벌 스코프에서 실행되었음에도 불구하고, outterFunction이 선언될 당시 주변환경을 기억하는 closure로인해 해당 변수에 접근이 가능했음.

innerFunction(); 
// 2 출력: 클로저는 지속적으로 변화를 추적하기 때문에 변수가 업데이트
```

- innerFunction에 이름없는 function이 담겼으며, 마지막 줄이 실행되었을 때 outterFunction은 실행이 끝났음으로 이 함수의 지역변수가 사라지는 것이 자연스러워 보이나, 클로저 덕분에 `접근이 가능`하였음

```JavaScript
function addPrefix(x) {
  return function addVerb(y) { // inner함수를 리턴
    return x + y;
  };
}

// 함수를 할당 후 변수(x)를 넣어 실행
const addUn = addPrefix("un"); 
const addRe = addPrefix("re");

// 함수를 할당 후 변수(y)를 넣어 실행
const word1 = addUn("do"); 
const word2 = addRe("do");
const word3 = addUn("load");
const word4 = addRe("load");

console.log(word1); //undo
console.log(word2); //redo
console.log(word3); //unload
console.log(word4); //reload
```

# Execution Context (실행 컨텍스트)

- 함수가 `실행`될 때마다, 현재 실행되는 함수에 대한 관련 정보를 컴퓨터 메모리에 저장하는 것
- 아무것도 실행되기 전에 생기는 `Global context`까지 포함하면 함수의 갯수 + 1의 컨텍스트가 생성됨
- 컨텍스트가 포함하는 정보:

1. 변수정보 (일반변수, 매개변수, 함수선언 등)
2. 스코프 정보 (상위 스코프에 대한 reference, 최상위는 글로벌)
3. `this` 정보

[참고이미지](https://res.cloudinary.com/practicaldev/image/fetch/s--zk1rqgAm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zxaetav5cz4gvi87sja5.png)
 
```JavaScript
function addPrefix(x) {
  return function addVerb(y) { 
    return x + y;
  };
}

const addUn = addPrefix("un"); 
const word1 = addUn("do"); 
const word2 = addUn("load");

console.log(word1); //undo
console.log(word2); //unload
```

- 위의 예제에서 각 함수 실행문에 따른 메모리저장 정보는 다음과 같음:

| - | addPrefix("un") | addUn("do") | addUn("load") |
|---|---|---|---|
| 1. 변수정보 | 매개변수 x의 값: "un" | 매개변수 y의 값: "do" | addUn("load") |
|  | 선언되어 생성된 `addVerb` 함수 | - | - |
| 2. 스코프정보 |상위스코프는 global | ←가 상위스코프 | ←←가 상위스코프 |
| 3. `this`정보 | 일반함수실행: `global object` | 일반함수실행: `global object` | 일반함수실행: `global object` |

아래의 예제[(출처: 바닐라코딩)](https://www.vanillacoding.co/)는 함수의 실행 컨텍스트가 i = 6 한번 적용 
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

아래의 예제[(출처: 생활코딩)](https://opentutorials.org/course/743/6544)처럼 클로저를 활용하여 오브젝트의 메소드를 생성하는 방법도 가능

```JavaScript
function factory_movie(title){
  return {
      get_title : function (){
          return title;
      },
      set_title : function(_title){
          title = _title
      }
  }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title()); //Ghost in the shell
console.log(matrix.get_title()); //Matrix

ghost.set_title('공각기동대');

console.log(ghost.get_title()); //공각기동대
console.log(matrix.get_title()); //Matrix
```
