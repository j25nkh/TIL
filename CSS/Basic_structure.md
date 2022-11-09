# 기본적인 CSS 구조

### 기본 문법 예시:

```css
{
    display: flex; /* block, inline-block */
    position: static; /* relative, absolute, fixed */
    margin: 0 auto; /* 컨테이너 중앙에 배치 */
    max-width: 600px; /* 반응형 제작시 %, 100 vh, 20 vw (viewport's height, width) */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    text-align: center;
    border: 3px solid black;
    border-radius: 10px;
}

A {
    display: flex;
}
```

이미지 주위를 텍스트로 감쌀때:
```css
section {
    float: right; /* 이미지가 오른쪽 */
    margin: 0 0 lem lem;
}
```

### Color system
- color name (red, orange,...)
- hex-color
    - '#' + 6자리 색상코드
    - #94FB11
- rgba
    - 색상 3 + 투명도 1
    - rgba(0, 0, 0, 0.5) -> 투명도 50% 검정색
