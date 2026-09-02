---
name: NASARI FOUR PLA — Airbnb Canon
description: 흰 캔버스 + 잉크 + Rausch 한 점. 사진 카드가 위계를 만들고 글자는 겸손하게. getdesign.md/airbnb DESIGN.md 충실 이행
colors:
  primary: "#ff385c"
  primary-active: "#e00b41"
  primary-soft: "#ffd1da"
  ink: "#222222"
  body: "#3f3f3f"
  muted: "#6a6a6a"
  muted-soft: "#929292"
  hairline: "#dddddd"
  hairline-soft: "#ebebeb"
  border-strong: "#c1c1c1"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-strong: "#f2f2f2"
typography:
  display-xl:
    fontFamily: "Pretendard, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "clamp(26px, 3vw, 32px)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.2px"
  display-md:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.18px"
  title-md:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.25
  body-md:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  caption-sm:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.23
  badge:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.18
  micro-label:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.33
  uppercase-tag:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "8px"
    fontWeight: 700
    letterSpacing: "0.32px"
  button-md:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.25
  nav-link:
    fontFamily: "Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    height: "48px"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: "80px"
  product-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
  product-tab-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
  category-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  photo-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  hero-banner-photo:
    rounded: "{rounded.lg}"
  floating-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  amenity-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "12px 0"
  host-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "14px 12px"
    height: "56px"
  footer-light:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
---

# Design System: NASARI FOUR PLA

> 두 규격을 한 곳에. **웹페이지(index·stores·contact)는 아래 Airbnb 캐논**, **문서·인쇄물·웹툴은 Notion 규격**(부록). 충돌 시 대상이 웹페이지면 이 시스템.
> 2026-09-01 사용자 지시: getdesign.md 카탈로그 중 **Airbnb DESIGN.md로 완전 교체**(구 "코스탈"·"바다유리" 세계관 폐기). 원본 = `github.com/VoltAgent/awesome-design-md/design-md/airbnb/DESIGN.md`. 전 6페이지 CSS = `assets/css/main.css` 단일 파일.

## Overview

**Creative North Star: "여행 마켓플레이스"** — 사진이 말하고 글자는 겸손하다. 손님은 사진을 보고 결정한다.

캔버스는 **순백**(`#ffffff`), 글자는 **잉크**(`#222222`, 순검정 아님), 액센트는 **Rausch**(`#ff385c`) 단 하나 — 주요 CTA, 브랜드 워드마크, 히어로 `em` 강조, 모바일 하단 바 버튼. 페이지의 90%는 흰색+잉크, Rausch는 한두 순간만. 디스플레이 타입은 **작고 겸손**(히어로 h1 32px/700, 섹션 22px/600) — 사진 카드와 여백이 위계를 만든다. 모든 인터랙티브 요소는 둥글다(버튼 8px, 카드 14px, 배너 20px, 필 full). 그림자는 한 단계뿐.

**Key Characteristics:**
- 흰 80px 스티키 네비 + 헤어라인. 브랜드 워드마크만 Rausch
- 서브페이지 상단 **상품 탭 스트립**(Homes/Experiences/Services 문법): 4매장 탭, 활성 = 잉크 2px 밑줄, 비활성 = muted, "여기" = 8px 대문자 태그
- 히어로 = **라운드 20px 사진 배너 21:9**(모바일 4:3), 그 아래 조용한 h1 + 메타 + CTA (리스팅 상세 문법)
- 매장·다른 매장 = **사진 카드 그리드**(14px 라운드, 좌상단 흰 플로팅 배지, 4~5줄 메타)
- 메뉴·정보·컨셉 = **어메니티 로우**(12px 패딩, `hairline-soft` 구분선)
- 카테고리 키워드 = 흰 필 칩 스트립(`hairline` 테두리)
- 푸터 = `surface-soft` 라이트, 텍스트 컬럼, 리걸 밴드 muted 13px
- 모션 최소: 카드 사진 scale 1.03, 리빌 12px/0.5s

## Colors

- **Rausch** `#ff385c` — 주요 CTA 배경, 워드마크, 히어로 강조어, 모바일 바 CTA. 활성 `#e00b41`, 비활성 `#ffd1da`.
- **Ink** `#222222` — 제목·본문·네비·링크. **Body** `#3f3f3f` — 긴 본문. **Muted** `#6a6a6a` — 메타·비활성 탭·리드. **Muted Soft** `#929292` — 번호·비활성 링크.
- **Canvas** `#ffffff` / **Surface Soft** `#f7f7f7`(푸터·호버·지도 자리) / **Surface Strong** `#f2f2f2`(원형 아이콘 버튼).
- **Hairline** `#dddddd`(칩·카드·입력 테두리) / **Hairline Soft** `#ebebeb`(로우 구분선·네비 하단) / **Border Strong** `#c1c1c1`(입력 기본 테두리).
- 별점·숫자도 잉크로(금색 금지). 다크모드 없음. 두 번째 브랜드색 없음.

## Typography

- **Pretendard** 단일 패밀리(Airbnb Cereal VF 대체; Inter 권고보다 한글 최적화 우선). 라틴/한글 동일 스택.
- 램프: 히어로 h1 26–32px/700/1.3 → 부제 16px/500(body색) → 섹션 h2 22px/600/1.2/-0.18px → 카드·로우 제목 16px/600/1.25 → 본문 16px/400/1.5 → 메타 14px/400/1.43 → 리걸 13px → 배지 11px/600 → 번호 12px/700 → "여기" 태그 8px/700/+0.32px 대문자.
- 원칙: **무게로 위계**(같은 16px에서 600 vs 400), 자간 0 기본, 대문자 트래킹 라벨은 8px 태그 하나뿐. 세리프·디스플레이 서체 금지.

## Layout

- `.wrap` 1240px, 거터 `clamp(20px,4vw,48px)`. **8px 베이스**, 섹션 간격 64px(`--section`), 카드 갭 24px, 로우 12px.
- 네비 80px(모바일 64px) sticky. 히어로 = 탭 스트립(서브) → 사진 배너 → 텍스트, 위에서 아래로 order 1·2·3.
- 그리드: 매장 2열(index) / 다른 매장 3열(서브) / 갤러리 4열 8px 갭 / 코스 4열 → 2열 → 1열. 정보·메뉴 5:7. 860px↓ 1열, 760px↓ 하단 고정 바.

## Elevation & Depth

한 단계: `rgba(0,0,0,.02) 0 0 0 1px, rgba(0,0,0,.04) 0 2px 6px, rgba(0,0,0,.1) 0 4px 8px` — 플로팅 배지·폼 카드·코스 카드 호버. 그 외 전부 평면 + 헤어라인. 스크림·글로우·블러·유리 없음.

## Shapes

버튼 8px / 카드·썸네일·지도·입력 컨테이너 14px / 히어로 배너 20px / 필·칩·배지·원형 버튼 full. 딱딱한 모서리는 본문 그리드뿐. 아이콘은 인라인 SVG 스트로크, 잉크색.

## Components

- **top-nav** — 흰 바, 워드마크(Rausch 18px/700 + muted 소제), 메뉴 링크 14px/500 muted → 호버 `surface-soft` 필, 현재 페이지 잉크 600. 모바일 토글 40px 원형 아웃라인.
- **product-tab strip**(`.directory-plate`) — 가로 스크롤, 탭 16px/600, 번호 12px muted-soft, 활성 잉크 밑줄 2px + "여기" 아웃라인 태그.
- **hero banner** — `hero-bg img` 21:9 / 20px 라운드; contact 21:7. 틴트·글로우·웨이브 없음.
- **photo-card**(`.store-row`, `.other`) — 16:10 사진 14px 라운드 → 제목 16px/600 → 메타 14px muted → 메뉴 칩(12px, hairline 필) → 밑줄 링크 14px/600.
- **amenity-row**(`.menu-item`, `.concept-row`, `.info-table`, `.loc-table`, `.seat-facts`) — 12px 패딩, `hairline-soft` 구분, 제목 16px/600 + 설명 14px body.
- **buttons** — primary Rausch 48px/8px, secondary 흰+잉크 1px 테두리, dark 잉크 채움. `:active` scale .98.
- **course-step** — host-card: 24px 패딩, hairline 테두리, 14px 라운드, 호버 그림자. 현재 위치 = 잉크 1px 이중선.
- **form** — 입력 56px/8px `border-strong`, 포커스 잉크 2px, 제출 버튼 전폭 Rausch. 알림은 `surface-soft` 박스.
- **sticky-cta**(모바일) — 흰 바 + 상단 hairline, 좌 Rausch 8px 버튼(길찾기), 우 밑줄 텍스트 링크.
- **footer-light** — `surface-soft`, 3열 링크(14px), 리걸 13px muted.

## Do's and Don'ts

- ✅ Rausch는 CTA·워드마크·강조어에만. 배경 필드로 쓰지 않는다.
- ✅ 제목은 작게, 사진은 크게. 히어로 h1 32px 넘기지 않는다.
- ✅ 사실만: 미확정 운영정보 "안내 준비 중". 바마이·온복국수 로고 미사용. 용어 "복합 외식공간"·"온복국수"·"NASARI FOUR PLA". 가격 미기재.
- ✅ 모든 페이지에 다른 3매장 링크.
- ❌ 드렌치·틴트·유리판·글로우·웨이브·세리프·아웃라인 숫자·마퀴 애니메이션·다크 섹션·두 번째 액센트·이모지 아이콘·금색 별.
- ⚠️ index 구조의 `.sec-kicker`, `.hero-eyebrow`, `.scroll-cue`, `.shoreline`, `.footer-mark`, `.hero-tint/.hero-glow`는 HTML에 남아 있고 CSS로 `display:none` — 향후 HTML 정리 시 삭제 대상. 새 섹션에 추가 금지.
- 🔴 6페이지 동시 배포. 사용자 확인 후 push.

---

## 부록 — 문서·인쇄물·웹툴: Notion 규격

이 프로젝트의 **문서 조판·웹툴** 기준은 **Notion 디자인 규격**이다. 규격서 본문은 여기에 복사하지 않고 마스터 1부만 둔다.

| 문서 | 경로 |
|---|---|
| 규격서 본문 (원본) | `C:\Users\adimin\.claude\design\DESIGN.notion.md` |
| 한글·A4 인쇄 보정 부록 | `C:\Users\adimin\.claude\design\DESIGN.ko-print.md` |

**문서를 조판하기 전에 위 두 파일을 먼저 읽는다.** 부록이 원본과 충돌하면 부록이 우선한다.

### 적용 원칙 (2026-08-06 확정, 2026-09-01 범위 명시)

- 🔴 **신규 문서·웹툴부터 적용.** 이미 나간 PDF는 **재조판하지 않는다.** 이 규격 때문에 `vercel --prod` 재배포를 하지 않는다.
- 🔴 **홈페이지(index·stores·contact)는 예외** — 위 Airbnb 캐논이 우선(2026-09-01 사용자 확정).
- 관공서 공문(인감·직인·결재란)은 예외 — 해당 서식 규정이 우선한다. 부록 5절 참조.
- 사용자가 다른 스타일(예: "애플 디자인")을 명시하면 그 지시가 이 규격보다 우선한다.

### 빠른 요약 (상세는 위 두 파일)

- 캔버스 `#f6f5f4` 웜 페이퍼 / 카드 `#ffffff` / 헤어라인 `#e6e6e6`
- 구조 액센트는 **Notion Blue `#0075de` 하나뿐** — CTA와 링크에만. 나머지 컬러는 장식 전용
- 폰트: `"Inter","Pretendard","Noto Sans KR",...` (순서 고정 — 라틴/숫자는 Inter, 한글은 Pretendard)
- 한글 본문 자간 0, line-height 1.6+ / 본문 10.5pt (9pt 미만 금지)
- 인쇄물은 `box-shadow` 대신 1px 보더. 다크모드·hover 없음
- 🔴 A4 페이지는 `height:297mm; overflow:hidden` (`min-height` 쓰면 빈 페이지가 낀다)
- 🔴 공개 배포물에 전화번호·상세주소 금지. 배포 폴더에 `.vercelignore`(`*.bak_*.html`) 필수
