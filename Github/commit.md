# git Clone (내려받기)

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

# git push (제출)

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

# 추가수정

아래의 3 과정만 거쳐도 자동으로 PR에 수정사항 반영

    - git add .
    - git commit -m "~"
    - git push origin jakejeon
    