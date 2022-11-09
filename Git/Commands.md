# Git 명령어

> Commit

- Snapshot을 생성하는 행위
- Git 히스토리는 기본적으로 수많은 커밋들의 집합
- 하나의 커밋은 다음 세 가지 정보를 갖고 있음:
  - 바로 이전의 커밋 (Parent Commit)
  - 이전 커밋과 비교한 수정 내역
  - Commit Hash (커밋의 고유 아이디 값)
  
> git clone
- 클라우드에 저장된 Git 프로젝트를 다운받는 명령어
- git clone GIT_REMOTE_ADDRESS

> git add
- 변경 사항 중, 다음 커밋에 추가할 사항들을 선별하는 명령어
- git add FILE_OR_DIRECTORY

> git commit
- 커밋을 생성하는 명령어
- -m 은 커밋 메시지를 함께 추가하는 옵션
git commit -m "MY COMMIT MESSAGE"

> git branch
- 브랜치 목록/생성/삭제 명령어
  - 브랜치 목록조회: git branch
  - 브랜치 생성: git branch BRANCH_NAME
  - 브랜치 삭제: git branch -d BRANCH_NAME

> git checkout
- 브랜치 이동 명령
  - 브랜치 이동: git checkout BRANCH_NAME
  - 브랜치 생성 & 이동: git checkout -b BRANCH_NAME

> git merge
- 현재 브랜치에 다른 브랜치의 수정 내역을 병합하는 명령어
- git merge OTHER_BRANCH_NAME

> git fetch
- Github과 같은 클라우드에 저장된 Git 프로젝트의 현재 상태를 다운
- git fetch origin

> git pull
- Github과 같은 클라우드에 저장된 Git 프로젝트의 현재 상태를 다운받고 현재 위치한 브랜치로 병합
- git fetch + git merge
- git pull REMOTE_NAME BRANCH_NAME

> git push
- Github과 같은 클라우드에 내 컴퓨터의 작업 사항을 업데이트
- 등록된 클라우드 주소 닉네임(REMOTE_NAME)과 반영하고 싶은 브랜치 이름(BRANCH_NAME)을 함께 사용
- git push REMOTE_NAME BRANCH_NAME
‌
> git remote
- 클라우드 주소를 등록
- 등록하는 주소마다 고유 닉네임을 부여해야 한다.
  - 등록: git remote add REMOTE_NAME REMOTE_ADDRESS
  - 삭제: git remote remove REMOTE_NAME

> git log
- 현재 위치한 브랜치의 커밋 내역을 확인
- git log
‌
