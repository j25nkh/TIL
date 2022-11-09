# Debugging

1. 코드에 `Debugger;` 키워드를 삽입
2. 웹페이지 파일을 실행
3. 크롬 개발자 도구를 열고 sources를 눌러서 scope등에서 참조

### Call Stack

- 함수가 호출되면 `Call Stack`에 쌓이고, 종료되면 빠짐
- 웹 브라우저 → 개발자도구 → console에 코드입력 (함수 실행라인 직전에 debugger;) 추가 → 순차적으로 다음줄로 넘기면서 Sources 탭의 Call stack 확인 가능

