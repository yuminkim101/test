# GitHub 사용 첫 번째 테스트

## 1. Git 기본 명령어

| 명령어 | 의미 |
|---|---|
| `git init` | Git 저장소 생성 (최초 1회) |
| `git add README.md` | README.md 변경 사항 등록 |
| `git add .` | 현재 폴더 및 하위 폴더의 변경 사항 등록 |
| `git commit -m "first commit"` | 변경 내용 기록, `" "` 안에 설명 |
| `git status` | Git 상태 확인 |

## 2. GitHub 연결 및 업로드

| 명령어 | 의미 |
|---|---|
| `git remote add origin 저장소URL` | GitHub 저장소 연결 (최초 1회) |
| `git push -u origin main` | main 브랜치 최초 업로드 및 연결 |
| `git push` | 이후 커밋 업로드 |
| `git remote -v` | 연결된 저장소 주소 확인 |

- `origin`: GitHub 원격 저장소 별칭
- `main`: 기본 브랜치 이름

## 3. 파일 수정 후 반영 순서

1. 파일 수정 → `Command + S` 저장
2. `git add README.md` → 변경 사항 등록
3. `git commit -m "README 설명 추가"` → 커밋 생성
4. `git push` → GitHub 업로드

**주의**
- 파일 수정 후 새 커밋 시 `git add` 다시 실행
- `git add` 이후 추가 수정 시 다시 `git add`
- 커밋 메시지: 변경 내용 한 줄 요약
- 이전 커밋 기록 유지, 커밋마다 고유 ID 부여

## 4. 브랜치 기초

| 명령어 | 의미 |
|---|---|
| `git switch -c min` | min 브랜치 생성 및 이동 |
| `git switch main` | main 브랜치로 이동 |
| `git branch` | 로컬 브랜치 목록 확인 |
| `git push -u origin min` | min 브랜치 최초 업로드 |

- **Branch:** 독립적인 작업 흐름
- **Pull Request(PR):** 변경 사항 검토 및 병합 요청
- **Merge:** 브랜치 변경 내용 합치기
- **Conflict:** 변경 사항 충돌