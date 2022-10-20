# Selector (선택자)

display: flex를 사용할 경우 정렬방식:

| Selector | Description |
|---|---|
| class: . | (그룹 내 여러개일 때 사용)|
| ID # | 특수한 1가지에 사용 |
| A, B, C | 하나라도 일치 |
| A B | 특정요소의 하위요소 |
| A > B | "직속 1단계" 자식요소 |
| * | 전체 |
| A + B | A 바로 다음의 B만 (Child가 아닌 동등 레벨) |
| A ~ B | A 다음 B들 |
| A[href="url"] | (href는 attribute) |
| href^ "http" | http로 시작하는 |
| href* "urlpart" | urlpart를 포함하는 |
| href$ ".jpg" | jpg로 끝나는 |
| :linked | |  
| :visited | | 
| :checked | | 
| :hover | | 
| A:not(B) | B를 제외한 모든 A |
| A[data-filtype = "image] | png, jpeg, jpg, gif |


* 예시:
```css
<a href="image.jpg" data-filetype="image"> image link </a>
```

n에 `even`, `odd`, `2n+1`등을 넣어 사용 가능

| Selector | Description |
|---|---|
| A:nth-child(n) |  |
| A:nth-last-child(n) |  |
| A:nth-of-type(n) |  |
| A:nth-last-of-type(n) |  |
| A:first-child |  |
| A:last-child |  |
| A:only-child |  |
| A:only-of-type |  |
| A:first-of-type |  |



