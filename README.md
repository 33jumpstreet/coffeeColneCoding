# coffeeColneCoding
\- 책<프론트엔드 개발을 시작하려고 해>를 공부하며 커피 전문점 웹 사이트를 실습하였습니다.   
\- 스타벅스 사이트를 클론 코딩하였습니다. 

### 1. 뷰포트 렌더링 방식 설정
- 웹 페이지가 모바일 디바이스에서 화면에 표시되는 방식을 지정   
- 사용방법 
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- content의 속성값   

  - width=device-width : 화면의 가로 너비를 사용자 디바이스의 가로 너비와 동일하게 적용     
  - initial-scale = 1.0 : 초기 화면의 확대/축소 비율을 지정  
  - user-scalable = no : 사용자가 디바이스 화면을 확대(yes) 혹은 축소(no)할 수 있는지 지정   
  - maximun-scale = 1 : 사용자가 화면을 확대할 수 있는 최대값  
  - minimum-scale = 1 : 사용자가 화면을 축소할 수 있는 최소값    
#
### 2. 파비콘 
- 웹 페이지의 대표 아이콘  
- 단순히 웹페이지뿐만 아니라 다음과 같이 모바일 홈 화면 추가용으로도 제공할 수 있습니다.   
- 다양한 용도와 크기의 이미지 여러개를 제공할 수도 있지만, 단순히 조금 큰 이미지(512x512) 하나만 사용하는 것도 권장   
- favicon.ico 파일이 필요하다면 https://iconifier.net/ 에서 파일을 변환할 수 있습니다. 
#
### 3. 오픈 그래프와 트위터 카드
\- 웹 페이지가 Google이나 Naver 등에서 검색되거나 slcak이나 카카오톡 같은 소셜미디어에 공유될 때 필요한 정보를 제공할 수 있습니다. 
```
<!-- The Open Graph Protocal -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Heropy Coffee" />
<meta property="og:title" content="Heropy Coffee Landing" />
<meta property="og:description" content="헤로피커피는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/for_seo.jpg" />
<meta property="og:url" content="https://epic-darwin-271c77.netlify.app" />
<!-- Twitter Cards -->
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Heropy Coffeee" />
<meta property="twitter:title" content="Heropy Coffee Landing" />
<meta property="twitter:description" content="헤로피커피는 세계에서 가장 큰 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/for_seo.jpg" />
<meta property="twitter:url" content="https://epic-darwin-271c77.netlify.app" />
```
#
### 4. 구글 폰트 
- https://fonts.google.com/  
#
### 5. BEM 방법론
- HTML class 속성을 통해 요소의 일부분 혹은 상태를 이른으로 구분할 수 있도록 작성하는 것입니다. 이 방법을 이용하면 요소의 이름만 가지고도 보다 쉽게 HTML 구조를 이해할 수 있습니다.     

|표시|설명|
|------|---|
|대상__일부분|2개의 언더바(_)기호로 대상의 일부분을 나타냄|
|대상--상태|2개의 대시(-)기호로 대상의 상태를 나타냄|
#
### 6. absolute, fixed 값의 특징
- 블록요소로 변경  
: 본래의 display 속성은 무시하고 자동으로 display: block 속성과 값으로 변경됩니다. 블록 요소가 되면 가로/세로 너비나 여백 위/아래 값을 사용할 수 있게 됩니다.   
- 가로 너비가 최대한 줄어드려는 시도  
: 대상 요소가 블록 요소로 변경되긴 하지만 '가로 너비가 최대한 늘어나려고 시도'하는 블록 요소의 특성은 무시되고 마치 인라인 요소처럼 '가로 너비가 최대한 줄어드려는 시도'를 하게 됩니다. 따라서 요소 내용의 너비를 그대로 활용하는 경우가 아니라면 별도 너비를 꼭 지정해야 합니다.   
- 기준 위치   
: absolute 값은 부모 요소를, fixed 값은 뷰포트를 기준으로 대상 요소를 배치합니다. 이때 대상요소에 top, bottom, left, right 속성을 활용해 정확한 위치를 지정하는데, 만약 이 속성을 사용하지 않는다면 브라우저는 대상 요소의 정확한 위치를 알 수 없기 때문에 처음 대상 요소가 있던 위치를 그대로 사용하게 됩니다.  
#
### 5. bos-shadow 속성
- 요소에 그림자를 추가하는 속성
- x축 거리, y축거리, 흐림 처리 범위, 확대/축소 범위, 색상 순으로 작성
- 색상을 제외하고 모두 px 단위를 사용
- 사용방법
```
box-shadow: 10px 30px 20px 0 rooyalblue;
```
#
### 6. 애니메이션 라이브러리 - gsap
https://greensock.com/docs/v3/GSAP  
#
### 7. 슬라이더 구현 - swiper
https://swiperjs.com/  
#
### 8.  YouTube Player API
- IFrame Player API를 통해 웹사이트에 YouTube 동영상 플레이어를 퍼가고 JavaScript를 사용하여 플레이어를 제어할 수 있습니다.  
#
### 9. 스크롤 위치에 따라 각 섹션의 요소를 애니메이션으로 구현 - ScrollMagic.js 
- cdn  
https://cdnjs.com/libraries/ScrollMagic  
- 사용법   
https://scrollmagic.io/docs/ScrollMagic.Scene.html#addTo   
#
### 10. HTML 특수문자
- 특정 글자를 대신 표시하는 데 사용됩니다. 
- 표기는 엠퍼센드(&) 기호로 시작해서 세미콜론(;) 기호로 종료합니다. 

|HTML 특수문자|출력|약어|설명|
|------|------|------|--|
|\&lt;|<|Less Than||
|\&gt;|>|Greater Than||
|\&nbsp;||Non Breaking SPace|줄바꿈 없는 공백(띄어쓰기)|
|\&copy;|ⓒ|COPYright||

- 더 많은 특수문자는 아래 사이트 참고  
https://html.spec.whatwg.org/multipage/named-characters.html  
#






