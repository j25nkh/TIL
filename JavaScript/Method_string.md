# Method for string

### slice

> str.slice(a, b);

- a번째 부터 b번째 글자까지만 남김
- 13번째가 없으면 그 뒤로 쭉

### replace

> str.replace(a, b);

- 첫번째로 찾은 a라는 str (ex. "sample")을 b로 replace
- replace all을 하려면 str.replace(/sample/g, "replacing word")

### toUpperCase()

> 대문자화

### toLowerCase

> 소문자화

### trim()

> text 전후의 공백 삭제

- str.trim()
- str.trimStart()
- str.trimEnd()








```JavaScript
str = "abcdefg hijklmnop qrstuv wxyz"
console.log(str.slice(7, 13)); 
// 7번째부터 13번째 글자: "hijkl"
```



- sort()는 기본 세팅이 `alphabetical order`
- 따라서 그냥 sort()를 했을 때 아래와 같이 오름차순으로 정렬이 되지 않음



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

