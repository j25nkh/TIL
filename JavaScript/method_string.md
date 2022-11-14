# slice

> str.slice(a, b);

- a`이상` ~ b`미만` 잘라서 리턴
- b를 입력하지 않으면 a`이상`~ 끝 리턴

```JavaScript
let str = "0123456789"
console.log(str.slice(3, 8)); 
// 7번째부터 13번째 글자: "34567"
```

# replace

> str.replace(a, b);

- 첫번째로 찾은 a라는 str (ex. "sample")을 b로 replace 후 리턴
- replace all을 하려면 str.replace(/sample/g, "replacing word")

# trim

> str.trim()

- text 전후의 공백 삭제
- str.trimStart()
- str.trimEnd()

# Upper Case / Lower Case

> str.toUpperCase / str.toLowerCase

- 대문자 / 소문자화 후 리턴
