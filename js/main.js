// 검색창 요소 찾기 
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector(".search input");

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function() {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색한 요소 내부 실제 input 요소에서 포커스가 해제(블러)되며 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll", function() {
  if (window.scrollY > 500) {
    // Badge 요소 숨기기
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else {
    // Badge 요소 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });    
  }
})

// 나타낼 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll(".visual .fade-in");
// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay : true,
  loop: true
})