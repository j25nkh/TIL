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



```JavaScript

```