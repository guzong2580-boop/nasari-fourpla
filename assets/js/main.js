// NASARI FOUR PLA — main.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
  }
  // Mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
});

/* 임시: 카카오맵 승인 후 복구 — index.html에서 #kakaoMap div + SDK script 복구하고 아래 블록 주석 해제
// Kakao Map
if (window.kakao && kakao.maps) {
  kakao.maps.load(function(){
    var c=document.getElementById('kakaoMap'); if(!c) return;
    var pos=new kakao.maps.LatLng(35.3569942,129.3377481);
    var map=new kakao.maps.Map(c,{center:pos,level:3});
    var marker=new kakao.maps.Marker({position:pos}); marker.setMap(map);
    var iw=new kakao.maps.InfoWindow({content:'<div style="padding:6px 10px;font-size:13px;white-space:nowrap;">나사리 포플라</div>'});
    iw.open(map,marker);
    map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
  });
}
*/
