# Using VS Code

### indent (들여쓰기 설정)

1. 오른쪽 하단 공백: 4 <- 클릭 후 반드시 `공백을 사용한 들여쓰기` 설정 후 2칸으로 설정

### VS Code 콘솔로그 사용
1. '좌측 실행 및 디버그' 클릭
2. 첫번째 '실행 및 디버그 버튼 클릭'
3. 디버거 node.js 선택

### Quokka live code execution

1. Quokka.js 인스톨
2. .js 파일 실행 후 ctrl + shift + p 눌러서 'quokka.js: start on current file' click
3. variable / object / date 명을 코드에 입력하는 것만으로도 변수값을 보여줌 (console.log를 사용할 필요 x)
4. VS Code 재실행 때마다 start on current file 활성화 해야함

### .md 파일 preview

1. 상단 탭 우클릭 → open preview

### 불필요한 space를 추적하는 extension

 - trailing-spaces

### 파일의 끝 new line 자동추가

 - vscode에서 설정창 열기 (맥이라면 command + , 윈도우라면 Ctrl + ,)
 - 검색 창에 insert final newline 검색
 - 나오는 설정 값에 체크


### 변수명 한번에 바꾸기
 - F2

### 출력창에 Object의 내용이 일부만 표시될 때
 - console.log(myObject) 대신
 - console.log(JSON.stringify(myObject));
