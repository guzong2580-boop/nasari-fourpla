# 나사리 포플라 (NASARI FOUR PLA) — 홈페이지

울산 울주군 서생면 나사해안길 33, 103동에 위치한 푸드코트형 복합 F&B 건물의 공식 홈페이지.

## 스택
- 정적 HTML + CSS + Vanilla JS
- Pretendard (CDN)
- 배포: GitHub → Vercel 자동 배포

## 폴더 구조
```
나사리포플라_홈페이지/
├── index.html             건물 소개 (히어로 / 컨셉 / 4매장 미리보기 / 위치)
├── contact.html           연락처 + 문의 폼
├── stores/
│   ├── wanyeonhan.html    완연한 나사리 (한식 · 화덕생선구이)
│   ├── bamai.html         바마이 (베트남 쌀국수)
│   ├── seoridam.html      서리담 (카페 · 디저트)
│   └── onbook.html        온북국수 (국수 · 분식)
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── images/{building,stores}/
├── vercel.json
└── README.md
```

## 로컬 미리보기
```powershell
cd C:\Users\adimin\Desktop\나사리포플라_홈페이지
python -m http.server 8000
# → http://localhost:8000
```

## 배포 (예정)
1. GitHub repo `guzong2580-boop/nasari-fourpla` 생성
2. `git init && git add . && git commit -m "init" && git remote add origin ... && git push -u origin main`
3. Vercel에서 repo import → 임시 도메인 `nasari-fourpla.vercel.app`
4. main 푸시 → 자동 재배포 (벌크피드 패턴 동일)

## TODO (보류 — 사용자 확인 후 진행)
- 매장별 실제 운영시간 · 대표 메뉴 · 가격대 입력
- 매장 / 건물 외관 실사진 교체 (현재 gradient placeholder)
- 카카오맵 동적 SDK 연동 (좌표 확정 후)
- contact 폼 백엔드 연동 (Apps Script or Formspree)
- SEO: og:image, sitemap.xml, robots.txt

## 디자인 토큰 (CSS `:root`)
- `--ocean-deep #0E2A3B` / `--ocean #1E4F6E` / `--ocean-light #4A8FB5`
- `--sand #F5EFE3` / `--sand-warm #EAD9B8`
- `--accent #C9743D` (화덕 불씨)
- 폰트: **헤드라인 Paperlogy(8ExtraBold/6SemiBold)** + 본문 Pretendard
  - CDN: `https://fastly.jsdelivr.net/gh/projectnoonnu/2406-3@1.0/Paperlogy-*.woff2`

## 카카오맵 JS API 업그레이드
현재 `contact.html`은 카카오맵 검색 iframe (키 불필요)으로 동작. 동적 지도로 업그레이드 시:
1. https://developers.kakao.com/ → 내 애플리케이션 생성
2. 플랫폼 → Web → 사이트 도메인에 `https://nasari-fourpla.vercel.app` 등록
3. 앱 키 → **JavaScript 키** 복사
4. `contact.html` 내 `YOUR_KAKAO_JS_KEY` 교체 (주석 블록 해제, iframe 블록 제거)
5. 정확 좌표는 카카오 좌표변환기로 재측정 후 `LatLng(35.3375, 129.3447)` 갱신
