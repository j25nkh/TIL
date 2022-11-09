# Array 요소 추가 / 제거

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

# Sort()

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

# forEach()

- return값이 없음

```JavaScript
const numbers = [1, 2, 3, 4, 5];

// for loop 방식
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// forEach 사용
numbers.forEach(function (number) {
    console.log(number);
})

// forEach ES6
numbers.forEach(number => console.log(number))

// forEach는 인자로서 number, index, array를 받음
numbers.forEach((number, index, array) => {
    console.log('Index: ' + index + ' value: ' + number + ' array: ' + array);
});
```

# map()

- return값이 있음

# filter()



# reduce()


  

  

// 1. forEach
// 배열의 처음부터 마지막 요소까지 반속하여 실행
let number = [1, 2, 3, 4, 5];

// 기본 함수 구조
number.forEach(function(x) {
    console.log(x * 2);
});

// 화살표 함수화
number.forEach((x) => {console.log(x * 2)});
number.forEach(x => console.log(x * 2)); 

// forEach의 매개변수는 3가지 (Value / Index / Array)
var newNumber = number.forEach((currentValue, index, array) => { 
  console.log(currentValue);
  console.log(index);
  console.log(array);
});

// 콜백 함수가 return 하는 값을 따로 모아서 어떤 처리를 하는 과정이 없기 때문에, 메서드를 호출한 코드를 함수에 할당하면 undefined가 할당된다.
console.log(newNumber)

// 그래서 forEach 메서드는 변수에 할당하기 보다는 반복문이나 조건문과 같이 그냥 바로 호출되는 것이 일반적이다.
function myFunction(item, index, arr) {
    console.log("index" + index + ": " + item + " w/ " + arr)
}
number.forEach(myFunction);

// forEach 를 사용해서 원소의 값들을 각각 3씩 증가시키기
let data= [1, 2, 3, 4, 5]
let result = [];
data.forEach(x => { result.push(x + 3) });
console.log(result);





// 2. forEach
// forEach의 반환값 undefined와 달리 반환값이 있음
// 기존 배열의 값이 바뀌는 게 아닌 새로운 배열을 생성, 반환
let mapNumber = [1, , 3, 4, 5];
let newMapNumber = mapNumber.map(x => x*2);

// value, index, array를 매개변수로 가지고 반복하는 것은 forEach와 동일
let newMapNumber2 = mapNumber.map((x, y, z) => {console.log(x + " " + y + " " + z)})





// 3. filter
// 반환값 있음, 걸러주는 함수
// 역시 매개변수는 value, index, array 3가지
let filterNumber = [1, 2, 3, 4, 5];
let newFilterNumber = filterNumber.filter(x => x > 3);
console.log(newFilterNumber);

// 객체타입에 응용 Case
const guys = [
    { name: 'YD', money: 500000 },
    { name: 'Bill', money: 400000 },
    { name: 'Andy', money: 300000 },
    { name: 'Roky', money: 200000 }
];
const rich = guys.filter(man => man.money > 300000);
console.log(rich);
console.log(rich.map(man => man.name));

// True와 False값을 가지는 FullCase
const rich2 = guys.filter(man => {
    if (man.money > 300000) {
        if (man.name === 'YD') {
            return true;
        }
    }
    return false;
});
console.log(rich2);

// 중복 제거하기 Case
const filterNumber2 = [1, 1, 2, 2, 3, 4, 5];
const newFilterNumber2 = filterNumber2.filter((number, index, array) => {
    return array.indexOf(number) === index;
});
console.log(newFilterNumber2);





// 4. reduce










// arr = [1, 2, 3, 5] 오름차순 ( b - a 면 내림차순)
arr = [5,1,3,2]
arr.sort( (a, b) => a - b)    

// 화살표 함수쓰지 않았을 경우
arr.sort( function(a, b) { return a - b; } )
