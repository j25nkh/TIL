# Trouble Shooting

### npm install 후 one drive 폴더 삭제 안되는 문제 (node_modules 폴더)

시도해 보았지만 해결되지 않았던 방법

1. One Drive 연결 해제 후 삭제 시도
2. 명령 프롬프트의 rd /s /q '경로'
3. npm install rimraf -g 를 통한 rimraf node_modules 
4. Wise Force Deleter 사용
5. Unlocker 사용

해결되었던 방법

[참고링크](https://velog.io/@d2h10s/OneDrive-%EC%9C%88%EB%8F%84%EC%9A%B0-%EC%9E%AC%EB%B6%84%EC%84%9D-%EC%A7%80%EC%A0%90-%EB%B2%84%ED%8D%BC-%EC%98%A4%EB%A5%98-0x80071129-%ED%95%B4%EA%B2%B0%EB%B2%95)

- 시작 - 시스템구성 - 부팅 탭 - 부팅옵션 - 안전부팅 체크 - 다시 시작하지 않고 끝내기
- Window Powershell을 관리자 권한으로 실행 - chkdsk /r /f 입력 - Y
- 재부팅 후 안전모드에서 삭제