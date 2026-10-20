# 클래스로 (Classro) 회사 소개 웹사이트

동네 공방·작업실의 원데이 클래스(도자기, 베이킹, 가죽공예, 플라워, 드로잉, 향수)를 앱에서 찾고 바로 예약·결제하는 서비스 **클래스로**의 소개 사이트입니다.

> 수업용 가상 회사입니다. 등장하는 회사·인물·수치는 모두 지어낸 것입니다.

## 페이지 구성

- 히어로: 클래스 종류를 눌러 보며 분위기를 확인
- 클래스: 여섯 가지 손작업 소개
- 예약 방법: 탐색부터 예약 완료까지 5단계
- 숫자로 보기: 제휴 공방 수, 월 예약 수, 평균 결제액
- 회사 정보: 설립, 대표, 구성원, 서비스, 수익 모델

## 폴더 구조

```
.
├── index.htm        # 메인 페이지
├── css/style.css    # 스타일
├── js/main.js       # 히어로 클래스 선택 동작
└── 00_회사소개.md   # 사이트 제작 기준 문서
```

## 실행 방법

별도 빌드 없이 `index.htm`을 브라우저로 열면 됩니다. 글꼴은 Google Fonts에서 불러오므로 인터넷 연결이 필요합니다.

---

## Git 학습 노트

### 1. Git 기본 명령어

| 명령어 | 의미 |
|---|---|
| `git init` | Git 저장소 생성 (최초 1회) |
| `git add README.md` | README.md 변경 사항 등록 |
| `git add .` | 현재 폴더 및 하위 폴더의 변경 사항 등록 |
| `git commit -m "first commit"` | 변경 내용 기록, `" "` 안에 설명 |
| `git status` | Git 상태 확인 |

### 2. GitHub 연결 및 업로드

| 명령어 | 의미 |
|---|---|
| `git remote add origin 저장소URL` | GitHub 저장소 연결 (최초 1회) |
| `git push -u origin main` | main 브랜치 최초 업로드 및 연결 |
| `git push` | 이후 커밋 업로드 |
| `git remote -v` | 연결된 저장소 주소 확인 |

- `origin`: GitHub 원격 저장소 별칭
- `main`: 기본 브랜치 이름

### 3. 파일 수정 후 반영 순서

1. 파일 수정 → `Command + S` 저장
2. `git add README.md` → 변경 사항 등록
3. `git commit -m "README 설명 추가"` → 커밋 생성
4. `git push` → GitHub 업로드

**주의**
- 파일 수정 후 새 커밋 시 `git add` 다시 실행
- `git add` 이후 추가 수정 시 다시 `git add`
- 커밋 메시지: 변경 내용 한 줄 요약
- 이전 커밋 기록 유지, 커밋마다 고유 ID 부여

### 4. 브랜치 기초

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