// ==============

// - 페이지랑 오브젝트랑 어떻게 연결하지?
//   - 일단 id?
// - 이거 객체의 개수에 맞게 자동으로 페이지 수 늘어나야 하는거아닌가?
//       - ( 맨위에 적어둠 id + 1, id ++ ) 근데 이게 맞는건지 고민


//정리
// 1. object에 데이터 넣어 관리
// 1-1 id필수
// 1-2 객체 개수 카운터 할 수 있어야함
// 2 총개수 / 2
// 2-1 parseInt로 정수로 떨어지게
// 2-2 page id + / id ++
// 3 다음 페이지 누를때 마다 alt, img, title, subtitle 변경


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

// ALT 설명 문구 - 카드 영역
const characterAlt = ' 게임 캐릭터'
const backgroundAlt = ' 게임 캐릭터 배경'

// 정리...해야겠는데 이거 정리....한번한다고해도되나/? 다른방법이 있을거같은데
const cardWrap = document.querySelector('.cards-wrap')
const firstCard = cardWrap.querySelector('.card-item:first-child')
const firstCardCharacter = firstCard.querySelector('.card-character')
const firstCardBackground = firstCard.querySelector('[aria-label*="게임 캐릭터 배경"]')
const firstInfoTitle = firstCard.querySelector('[data-info="title"]')
const firstInfoSubScript = firstCard.querySelector('[data-info="subScript"]')
const firstInfoGenre = firstCard.querySelector('[data-info="genre"]')

const secondCard = cardWrap.querySelector('.card-item:last-child')
const secondCardCharacter = secondCard.querySelector('.card-character')
const secondCardBackground = secondCard.querySelector('[aria-label*="게임 캐릭터 배경"]')
const secondInfoTitle = secondCard.querySelector('[data-info="title"]')
const secondInfoSubScript = secondCard.querySelector('[data-info="subScript"]')
const secondInfoGenre = secondCard.querySelector('[data-info="genre"]')

const navigationArea = document.querySelector('.navigation')
const totalStateNow = navigationArea.querySelector('[data-page="now"]')

const navigationList = document.querySelector('.navigation')
const navigationNext = navigationList.querySelector('.navi-next')
const navigationPrev = navigationList.querySelector('.navi-prev')

// 전체 페이지 - 오브젝트 총 개수 / 페이지의 개수
const totalPageArray = Object.keys(gamesList)
const totalPage = totalPageArray.length / 2

// 숫자 카운터
let currentPageNumber = 1

// if문 너무 하드코딩임 수정 할 필요 있음
function checkPage (currentPage) {
  if (currentPage === 1) {
    console.log('1~2페이지임?')
  } 
  else if (currentPage === 2) {
    console.log('3~4페이지임?')
  }
  else if (currentPage === 3) {
    console.log('5~6페이지임?')
  } else {
    console.log('다른 페이지임')
  }
}

// 받는값 object
// 만들어야 하는 기능 : src, text add
/* onst key = gamesList.key
const value = gamesList.key.value
console.log(gamesList[key][value]) */
// 오... 해당 페이지를 받아야 할거같은데 해당 페이지가 1일때 1-2를 뿌리고 2일때 3-4을 뿌리고


// 카드 인포 추가 - 카드 영역
function gameInfoAdd (games) {
  // 이거.. 직접하드코딩말고 id불러올때 바로 넣을 수 있게 하기
  // 1페이지 일때 +id 1. 2하면될거같은데  id값이 안불러와짐 ㅠ 정확하게는 앞의 key값에 따라 id값이 안불러와짐 key문제
  if(1 === games['chronoOdyssey']['id']) {
    firstCardCharacter.src = games['odin']['character']
    firstCardCharacter.alt = games['odin']['title'] + characterAlt
    firstCardBackground.style.backgroundImage = games['odin']['background']
    firstCardBackground.alt = games['odin']['title'] + backgroundAlt
    firstInfoTitle.textContent = games['odin']['title']
    firstInfoSubScript.textContent = games['odin']['subTitle']
    firstInfoGenre.textContent = games['odin']['genre']

    secondCardCharacter.src = games['archeAgeWar']['character']
    secondCardCharacter.alt = games['archeAgeWar']['title'] + characterAlt
    secondCardBackground.style.backgroundImage = games['archeAgeWar']['background']
    secondCardBackground.alt = games['archeAgeWar']['title'] + backgroundAlt
    secondInfoTitle.textContent = games['archeAgeWar']['title']
    secondInfoSubScript.textContent = games['archeAgeWar']['subTitle']
    secondInfoGenre.textContent = games['archeAgeWar']['genre']

    totalStateNow.textContent = currentPageNumber
  }
}
gameInfoAdd(gamesList)


// 이전 버튼 / 다음 버튼
navigationNext.addEventListener('click', () => {
  currentPageNumber++
  if (currentPageNumber >= totalPage + 1) {
    currentPageNumber === (currentPageNumber = 1)
  }
  console.log(currentPageNumber)
  checkPage(currentPageNumber)
  gameInfoAdd(gamesList)
})
navigationPrev.addEventListener('click', () => {
  currentPageNumber--
  if (currentPageNumber <= 0) {
    currentPageNumber === (currentPageNumber = totalPage)
  }
  console.log(currentPageNumber)
  checkPage(currentPageNumber)
  gameInfoAdd(gamesList)
})