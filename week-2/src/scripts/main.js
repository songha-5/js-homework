// 게임 모음리스트
const gamesList = {
   chronoOdyssey: {
    id: 1,
    title: "크로노 오디세이",
    subTitle: "멈춰 있던 시간이 흐른다",
    genre: "MMORPG",
    character: "/src/images/game_character_1.png",
    background: "url('/src/images/game_background_1.png')"
   },
   archeAgeWar: {
    id: 2,
    title: "아키에이지 워",
    subTitle: "시대의 전설을 향해",
    genre: "MMORPG",
    character: "/src/images/game_character_2.png",
    background: "url('/src/images/game_background_2.png')"
   },
   POE2: {
    id: 3,
    title: "패스 오브 엑자일 2",
    subTitle: "얼리 액세스 오픈!",
    genre: "핵앤슬래시",
    character: "/src/images/game_character_3.png",
    background: "url('/src/images/game_background_3.png')"
  },
  odin: {
    id: 4,
    title: "오딘 : 발할라 라이징",
    subTitle: "신의 영역을 차지하라",
    genre: "MMORPG",
    character: "/src/images/game_character_4.png",
    background: "url('/src/images/game_background_4.png')"
  },
  ROM: {
    id: 5,
    title: "롬: 리멤버 오브 마제스티",
    subTitle: "세계는 하나의 전장이 된다",
    genre: "MMORPG",
    character: "/src/images/game_character_5.png",
    background: "url('/src/images/game_background_5.png')"
  },
  battleground: {
    id: 6,
    title: "배틀그라운드",
    subTitle: "최후까지 생존하라!",
    genre: "배틀로얄",
    character: "/src/images/game_character_6.png",
    background: "url('/src/images/game_background_6.png')"
  }
}

// 변수 이름 축약을 위한 함수
const getElement = (selector, context = document) => {
  return context.querySelector(selector);
}

// 카드 영역: class/data 설정 문구
const characterAlt = ' 게임 캐릭터'
const backgroundAlt = ' 게임 캐릭터 배경'
const firstCardText = '.card-item:first-child'
const lastCardText = '.card-item:last-child'
const cardCharacter = '.card-character'
const backgroundCharacter = '[aria-label*="게임 캐릭터 배경"]'
const infoTitle = '[data-info="title"]'
const infoSubScript = '[data-info="subScript"]'
const infoGenre = '[data-info="genre"]'

// 카드 영역: 첫번째 카드 선택
const cardWrap = getElement('.cards-wrap')
const firstCard = getElement(firstCardText, cardWrap)
const firstCardCharacter = getElement(cardCharacter, firstCard)
const firstCardBackground = getElement(backgroundCharacter, firstCard)
const firstInfoTitle = getElement(infoTitle, firstCard)
const firstInfoSubScript = getElement(infoSubScript, firstCard)
const firstInfoGenre = getElement(infoGenre, firstCard)

// 카드 영역: 두번째 카드 선택
const secondCard = getElement(lastCardText, cardWrap)
const secondCardCharacter = getElement(cardCharacter, secondCard)
const secondCardBackground = getElement(backgroundCharacter, secondCard)
const secondInfoTitle = getElement(infoTitle, secondCard)
const secondInfoSubScript = getElement(infoSubScript, secondCard)
const secondInfoGenre = getElement(infoGenre, secondCard)

// 네비게이션 선택
const navigationArea = getElement('.navigation')
const totalStateNow = getElement('[data-page="now"]', navigationArea)
const navigationNext = getElement('.navi-next', navigationArea)
const navigationPrev = getElement('.navi-prev', navigationArea)

// 현재페이지 카운터
let currentPageNumber = 1

// 페이지 네비게이션에 따라 HTML구조 변경
function gameInfoAdd (currentPage, games) {

  // 페이지 계산 짝수 / 홀수
  const oddIdPage = (currentPage * 2) - 1
  const evenIdPage = currentPage * 2

  // object.id가
  const oddPage = Object.values(games).find(game => game.id === oddIdPage)
  const evenPage = Object.values(games).find(game => game.id === evenIdPage)


  // 짝수 HTML페이지 추가
  if(oddPage) {
    firstCardCharacter.src = oddPage.character
    firstCardCharacter.alt = oddPage.title + characterAlt
    firstCardBackground.style.backgroundImage = oddPage.background
    firstCardBackground.alt = oddPage.title + backgroundAlt
    firstCardBackground.ariaLabel = oddPage.title + backgroundAlt
    firstInfoTitle.textContent = oddPage.title
    firstInfoSubScript.textContent = oddPage.subTitle
    firstInfoGenre.textContent = oddPage.genre

    // 페이지네비게이션에 현재 페이지 반영
    totalStateNow.textContent = currentPageNumber
  }
  // 홀수 HTML페이지 추가
  if(evenPage) {
    secondCardCharacter.src = evenPage.character
    secondCardCharacter.alt = evenPage.title + characterAlt
    secondCardBackground.style.backgroundImage = evenPage.background
    secondCardBackground.ariaLabel = evenPage.title + backgroundAlt
    secondInfoTitle.textContent = evenPage.title
    secondInfoSubScript.textContent = evenPage.subTitle
    secondInfoGenre.textContent = evenPage.genre

    // 페이지네비게이션에 현재 페이지 반영
    totalStateNow.textContent = currentPageNumber
  }
  
}

// 전체 페이지 - 오브젝트 총 개수 / 페이지의 개수
const totalPageArray = Object.keys(gamesList)
const totalPage = totalPageArray.length / 2

// 페이지 숫자 올리기
function countPlus (plus) {
  if (plus >= totalPage + 1) {
    plus === (currentPageNumber = 1)
  }
}
// 페이지 숫자 내리기
function countMinus (minus) {
  if (minus <= 0) {
    minus === (currentPageNumber = totalPage)
  }
}

// 이전 버튼 작동
navigationNext.addEventListener('click', () => {
  currentPageNumber++
  
  countPlus(currentPageNumber)
  gameInfoAdd(currentPageNumber, gamesList)
})
// 다음 버튼 작동
navigationPrev.addEventListener('click', () => {
  currentPageNumber--
  
  countMinus(currentPageNumber)
  gameInfoAdd(currentPageNumber, gamesList)
})