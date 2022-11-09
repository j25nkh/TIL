# slice

> str.slice(a, b);

- a번째 부터 b번째 글자까지만 남김
- 13번째가 없으면 그 뒤로 쭉

# replace

> str.replace(a, b);

- 첫번째로 찾은 a라는 str (ex. "sample")을 b로 replace
- replace all을 하려면 str.replace(/sample/g, "replacing word")

# trim()

> str.trim()
- text 전후의 공백 삭제
- str.trimStart()
- str.trimEnd()

```JavaScript
str = "abcdefg hijklmnop qrstuv wxyz"
console.log(str.slice(7, 13)); 
// 7번째부터 13번째 글자: "hijkl"
```
# toUpperCase() / # toLowerCase

> str.toUpperCase / str.toLowerCase
