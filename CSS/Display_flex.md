# display: flex

### display: flex를 사용할 경우 정렬방식:
- `justify-content` (가로정렬)
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around
    - space-evenly
- `align-items` (세로정렬, 요소들간)
    - stretch
    - flex-start
    - flex-end
    - center
    - baseline

align-items 내 항목들의 경우 A안의 a에 대해:

```css
a {
    order: -3;*/
    align-self; 
}
 /* item중 몇번째, 해당 요소만 개별 이동 */
```

- `align-content` (세로정렬, 줄사이 간격)
    - stretch
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around
    - space-evenly
- `flex-direction`: (요소들의 정렬방향)
    - row
    - row-reverse - justify-content의 순서도 세로로 바꿈
    - column
    - column-reverse
- `flex-wrap`
    - nowrap
    - wrap
    - wrap-reverse
- `flex-flow`: (flex-direction과 flex-wrap을 한번에)
    - <flext-direction 인자> <flext-wrap 인자>

예시:

```css
A {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    align-content: flex-start; 
}
```
