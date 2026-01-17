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

// 받는값 object
/* onst key = gamesList.key
const value = gamesList.key.value
console.log(gamesList[key][value]) */
// 오... 해당 페이지를 받아야 할거같은데 해당 페이지가 1일때 1-2를 뿌리고 2일때 3-4을 뿌리고


// 숫자 카운터
let currentPageNumber = 1

// 카드 인포 추가 - 카드 영역
// 타겟 아이디가 ++ --가 되어야하는데.. 어떻게 그 기준을 잡지? 
// 
function gameInfoAdd (currentPage, games) {
  const gameFind = Object.values(games).find(game => game.id === currentPage)
  const gameNextId = Object.values(games).find(game => game.id === currentPage + 1)
  const gameId = gameFind.id
  
  console.log(gameFind + ' -------------------- gameFind')
  console.log(gameId , ' ------------------------ 아이디인가요?')
  console.log('--- 비교 디버깅 시작 ---');
  console.log('내 페이지:', currentPage, typeof currentPage); 
  console.log('타겟 ID:', gameId, typeof gameId);
  console.log('일치 여부:', currentPage === gameId);
  
  // 음... 조건... id = currentPage가 일치하게는 했는데
  if(currentPage === gameId) {
    // 첫번째 card html 추가
    firstCardCharacter.src = gameFind.character
    firstCardCharacter.alt = gameFind.title + characterAlt
    firstCardBackground.style.backgroundImage = gameFind.background
    firstCardBackground.alt = gameFind.title + backgroundAlt
    firstCardBackground.ariaLabel = gameFind.title + backgroundAlt
    firstInfoTitle.textContent = gameFind.title
    firstInfoSubScript.textContent = gameFind.subTitle
    firstInfoGenre.textContent = gameFind.genre
    // 두번째 card html 추가
    secondCardCharacter.src = gameNextId.character
    secondCardCharacter.alt = gameNextId.title + characterAlt
    secondCardBackground.style.backgroundImage = gameNextId.background
    secondCardBackground.ariaLabel = gameNextId.title + backgroundAlt
    secondInfoTitle.textContent = gameNextId.title
    secondInfoSubScript.textContent = gameNextId.subTitle
    secondInfoGenre.textContent = gameNextId.genre
    // 페이지네비게이션에 현재 페이지 반영
    totalStateNow.textContent = currentPageNumber
  }
}

// 전체 페이지 - 오브젝트 총 개수 / 페이지의 개수
const totalPageArray = Object.keys(gamesList)
const totalPage = totalPageArray.length / 2

// 이전 버튼 / 다음 버튼
navigationNext.addEventListener('click', () => {
  currentPageNumber++
  if (currentPageNumber >= totalPage + 1) {
    currentPageNumber === (currentPageNumber = 1)
  }
  gameInfoAdd(currentPageNumber, gamesList)
})
navigationPrev.addEventListener('click', () => {
  currentPageNumber--
  if (currentPageNumber <= 0) {
    currentPageNumber === (currentPageNumber = totalPage)
  }
  gameInfoAdd(currentPageNumber, gamesList)
})