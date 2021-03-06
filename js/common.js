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

// 페이지가 출력되는 연도를 JS로 자동화
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
