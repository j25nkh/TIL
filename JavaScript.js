/*---------------------------------------------------------------------------------------------------------------------------------------------------
[Methods]
forEach: return값 X
map:     return값 O
filter:  
reduce:
sort:
---------------------------------------------------------------------------------------------------------------------------------------------------*/
// 0. CallBack 함수
// 1. 다른 함수의 인자로써 이용되는 함수.
// 2. 어떤 이벤트에 의해 호출되어지는 함수.
// 파라미터로 함수를 전달하는 함수
// 콜백함수는 이름이 없는 '익명의 함수' 사용
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

