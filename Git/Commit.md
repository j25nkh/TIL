# Github 협업방법

### 내려받기: git Clone

1. 폴더 생성 후 cmd내 해당 폴더로 dir 이동
    - 또는 해당 폴더 우클릭 -> git bash here
2. 클론
    - git clone `url`
3. 브랜치 생성
    - git branch
    - git checkout -b jakejeon
    - git branch
4. 클론한 폴더 실행
    - code .

### 제출: git push

> Commit 전 받드시` 마지막 줄 1 개행`

1. 업데이트
    - git status
    - git add .
    - git status
2. 커밋
    - git commit -m "committing memo" (PC에만 저장된 상태)
3. Push
    - git remote -v (정상이면 origin 주소 나타남)
    - git push origin jakejeon
4. Pull Request (PR) 확인
    - 깃헙 → pull request → new pull request → base: `master` compare `jakejeon` → create pull request
    - 과제제출의 경우 to do 작성 → 제목 eidt → 초록버튼 open이면 제출 끝

### 추가수정

- 아래의 3 과정만 거쳐도 자동으로 PR에 수정사항 반영

    - git add .
    - git commit -m "~"
    - git push origin jakejeon

### 로컬에서 생성 후 새로운 REPO를 업로드하는 경우

- 파일 생성 후 git init을 통해 .git파일 생성 후 진행, 추후 remote로 repo를 연결
    - git init
    - git remote add origin 'url' (origin 대신 아무 이름 지어도 됨)
    - git remote -v로 체크


### 로컬에서 수정진행 후 로컬과 다른 수정이 있는 github 클라우드를 가져와서 로컬에서 구성

    - git fetch origin (다운만 받은 상태)
    - git checkout origin/master (다운 받은 것을 이동해서 보기만 하는 상태 - 수정내용 확인)
    - git checkout master (master로 다시 이동)
    - git merge origin origin/master


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
