# Array 추가 / 제거

| Method | Role |
|---|---|
| .unshift() | 맨 앞 추가 |
| .shift() | 맨 앞 제거 |
| .push() | 맨 마지막 추가 |
| .pop() | 맨 마지막 제거 |
| .indexOf() | 인덱스를 리턴 |
| .splice() | array.splice(a, b) → a 인덱스부터 b개의 항목을 제거 |

splice 예제:

```JavaScript
const alphabet = ['A', 'B', 'C', 'D', 'E'];
let k = alphabet.splice(1, 3);

console.log(alphabet); // [ 'A', 'E' ]
console.log(k); // [ 'B', 'C', 'D' ]
```

# Sorting (정렬)

### Array.Sort()

- sort()는 기본 세팅이 `alphabetical order`
- 따라서 그냥 sort()를 했을 때 아래와 같이 오름차순으로 정렬이 되지 않음

```JavaScript
const nums = [1, 2, 16, 35, 44, 100, 200, 500];
nums.sort();
console.log(nums);
// [ 1, 100, 16, 2, 200, 35, 44, 500 ]
```

이것을 `numertical order`로 쓰려면

```JavaScript
nums.sort(function (a,b) {
    return a - b;
});
```
또는 ES6식으로 표현

```JavaScript
nums.sort((a, b) => a - b);
```

# forEach / Map / Filter / Find / Reduce

| 메소드 | 기능 | 메커니즘 | callback의 매개변수 | 리턴 값 |
|---|---|---|---|---|
| forEach | 순환 |모든 요소 → 함수 → (실행만) | element / index / array | X |
| map | 순환 |모든 요소 → 함수 → 새 배열 반환 | element / index / array | O |
| filter | 필터 |모든 요소 → 필터 → 새 배열 반환 | element / index / array | O |
| reduce | 누산 |모든 요소 → 함수 → 하나의 값 반환 | accumulator / currentValue / currnetIndex / array | O |
| find | 찾기 |모든 요소 → 필터 → 첫번째 값 반환 | index / array | O |

### forEach()

> array.forEach(callback(`element`, `index`, `array`), thisArg)

- 배열 요소 각각 실행, `리턴 값 없음`
- 매개변수
    - map 의 매개변수는 2개: `callback`과 `thisArg`
    - callback함수의 매개변수는 3개: `element`, `index`, `array`

```JavaScript
//기본 구조
number.forEach(function(x) {
    console.log(x * 2);
});

// ES6 화살표 함수화
number.forEach((x) => {console.log(x * 2)});

// ES6 간소화 (괄호제거)
number.forEach(x => console.log(x * 2)); 

// forEach의 매개변수는 3가지 (Value / Index / Array)
var newNumber = number.forEach((currentValue, index, array) => { 
  console.log(currentValue);
  console.log(index);
  console.log(array);
});


// 그래서 forEach 메서드는 변수에 할당하기 보다는 반복문이나 조건문과 같이 그냥 바로 호출되는 것이 일반적이다.
function myFunction(item, index, arr) {
    console.log("index" + index + ": " + item + " w/ " + arr)
}
number.forEach(myFunction);

// forEach 를 사용해서 원소의 값들을 각각 3씩 증가시키기
let data= [1, 2, 3, 4, 5]
let result = [];
data.forEach(x => { result.push(x + 3) });
console.log(result); // [ 4, 5, 6, 7, 8 ]
```


### map()

> array.map(callback(`element`, `index`, `array`), thisArg)

- forEach와 동일하나, 리턴 값 유무차이
- 배열 요소 각각 실행, `새로운 배열 반환`
- 매개변수
    - map 의 매개변수는 2개: `callback`과 `thisArg`
    - callback함수의 매개변수는 3개: `element`, `index`, `array`


```JavaScript
let mapNumber = [1, , 3, 4, 5];
let newMapNumber = mapNumber.map(numer => number * 2);

console.log(newMapNumber); // [ 2, , 6, 8, 10 ]
```


### filter()

> arr.filter(callback(`element`, `index`, `array`), thisArg);

- 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
- 매개변수
    - map 의 매개변수는 2개: `callback`과 `thisArg`
    - callback함수의 매개변수는 3개: `element`, `index`, `array`

```JavaScript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // ['exuberant', 'destruction', 'present']
```

```JavaScript
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); // [12, 130, 44]
```

Case: 객체 in 배열
```JavaScript
 const guys = [
    { name: 'YD', money: 500000 },
    { name: 'Bill', money: 400000 },
    { name: 'Andy', money: 300000 },
    { name: 'Roky', money: 200000 }
];
const rich = guys.filter(man => man.money > 300000);
console.log(rich);
//[ { name: 'YD', money: 500000 },
//{ name: 'Bill', money: 400000 } ]

console.log(rich.map(man => man.name));  // ['YD', 'Bill' ] 
```

```JavaScript
// 중복 제거 (ES6)
const nums = [1, 1, 2, 2, 3, 4, 5];
const filteredNums = nums.filter((element, index, array) => {
    return array.indexOf(element) === index;
});

console.log(filteredNums); // [ 1, 2, 3, 4, 5 ]

//중복 제거 (ES5)
const nums = [1, 1, 2, 2, 3, 4, 5];
const filteredNums = nums.filter( function (element, index, array) {
  if (array.indexOf(element) === index) { 
    // 두번째 1은 indexOf로 찾았을때 -> 첫번째 1의 인덱스값과 비교 -> false
    return array;
  }
});

console.log(filteredNums); // [ 1, 2, 3, 4, 5 ]
```

### reduce():

> array.reduce(callback(`accumulator`, `currentValue`, `currnetIndex`, `array`), initialValue)

- 배열 요소 각각 실행, `하나의 결과값 반환`
- 매개변수
    - reduce 의 매개변수는 2개: `callback`과 `initialValue`
    - callback함수의 매개변수는 4개: `accumulator`, `currentValue`, `currnetIndex`, `array`
    1. initialValue를 제공한 경우: 
        - `accumulator` = initialValue
        - `currentValue` = array의 첫 번째 값
    2. initialValue를 제공하지 않은 경우: 
        - `accumulator` = array의 첫 번째 값
        - `currentValue` = array의 두 번째 값


```JavaScript
// 최대값 구하기
const nums = [2, 13, 4, 7];

const max = nums.reduce( (function (accumulator, currentValue) {
  if (accumulator > currentValue) {
    return accumulator;
  }

  return currentValue;
}));

console.log(max); //13


//최소값 구하기
const min = nums.reduce( (function (accumulator, currentValue) {
  if (accumulator < currentValue) {
    return accumulator;
  }

  return currentValue;
}));

console.log(min); //2
```

reduce 메소드를 사용하여 `배열 반환`가능

```JavaScript
const nums = [1,2,3,4,5];

let oddNums = nums.reduce(function(accumulator, currentValue){
  if(currentValue % 2) {
    accumulator.push(currentValue);
  }
  return accumulator;
},[])

console.log(oddNums); // [1, 3, 5]
```

### find():

> array.find(callback(`index`, `array`), thisArg)

- 필터를 만족하는, `첫번째 결과값 반환`
- 매개변수
    - reduce 의 매개변수는 2개: `callback`과 `thisArg`
    - callback함수의 매개변수는 2개: `index`, `array`

```JavaScript
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```
