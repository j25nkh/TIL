# 코딩 컨벤션

> [에어비앤비 인덴팅 관련 코드 컨벤션](https://github.com/airbnb/javascript#whitespace--spaces)

- 인덴트 space 2칸 권장, 한 프로젝트 내 일관성이 더 중요
- `Early Return` 사용
- for문과 if문 상단에 개행
- 에어비엔비 컨벤션에서는 [함수선언식보다는 함수표현식을 권장](https://airbnb.io/javascript/#functions--declarations)
    - 함수선언식은 순서배치 사용이 너무 쉽기때문에
    - readability와 maintainability를 위해 순서를 중시하는 함수표현식을 추천
- 마지막줄은 한줄만 개행

### 세미콜론 사용

- 명령문 이후에 사용
    - var i = 5;
    - var func = function () {...}`;`
- {} 닫힌 후 사용 X (오브젝트 선언 예외)
    - function func () {}
