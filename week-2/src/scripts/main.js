console.log('HI')



// ==============


// - 음..오브젝로 넣어야할거같은데 텍스트,이미지,서브텍스트 죄다 넣고 관리
// - 근데 이거 오브젝트에 넣고 관리해야하잖아, json으로 넣으는게 좋을듯
// - 근데 난 지금 그렇게 못하니 패스 ( 데이터 받아오는 역할)
// - 페이지랑 오브젝트랑 어떻게 연결하지?
//   - 일단 id?
// - 이거 객체의 개수에 맞게 자동으로 페이지 수 늘어나야 하는거아닌가?
//   - 7 / 2 > 3.5 parseInt(number)=3 
//   - 이거는 페이지 숫자만 표기할뿐, 위의 데이터는 어떻게 페이징해야할지  고민해야함
//     - 이거 그냥 다음누르면 무조건 다음페이지 누르면 이전페이지 이렇게하면,, 연타누르면 꼬일거같지? 아닌가?
//         - 연결 안되어 있는 경우 : 로직짜기 쉬울듯, 애니메이션 들어가면, 근데 지금은 안들어감 괜찮은듯?
//         - id + 1, 2? if (nextPage) else (prevPage)
//         - 잠깐 셋타임아웃이면 오류 안나잖아? 그럼 연결안되게 짜는게 낫지않음? 무조건 다음페이지 누르면 + id 하는게 낫쟈나?
// - 그럼 페이지 3 > 1로 넘어가는건 어떻게 표현하면될지 고민
//   - parseInt(number)가 오브젝트.length를 넘어가면 1
//   - if( parseInt(number) > object.length ) { page = 1 }
//   - page = 1을 어떻게 뿌리라 할껀데? 1~2번인데 그걸 어떻게? 1번뿌리라고하면 자연스럽게 1~2번뿌리는거아니잖아, 1,4이렇게 뿌릴수도있는거 아냐? 
//     - 위의 내용 고민해보기
//       - ( 맨위에 적어둠 id + 1, id ++ ) 근데 이게 맞는건지 고민
//     - object에 id넣어야하면 되지 않을까? 음 굿

// 2. 숫자 누르면 3>1로 이동 (?????)
// - 
// 3. 숫자 누르면 위의 이미지가 바뀜
//   - []대괄호인거같긴해...
//   - 객체의 수 / 2 ? 
//   - 근데 length를 안알려줌 다른 방법이 있지 않을까?
//   - 위에꺼 안될듯? currentNumber여야하는데 그걸 어떻게 찾음?
//   - 
// - 카드영역의 alt에 페이지 넘어갈때마다 이름을 넣어줄 수있나?


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

// 하는 기능 || 눌렀을 때 페이지 넘버가 넘어가는 기능
// 받아야 하는 값 || 현제 페이지 / 전체 페이지
// const로 추가해야하는 값  || let 현재페이지 / let 전체페이지
// 현재페이지 : 아이디는 안됌, id에서 + 2(변수로 뺸것/어떰?)
// 현재페이지 : 햐.. 문제가 생김 이거 값을 저장을 못함
// 현재페이지 : 무조건 +2하면 1에서 +2된단 말이지
// 현재페이지 : 무조건 +2하면 1에서 +2된단 말이지
// 전체페이지 : 전체객체 / 2(이거도 변수로 빼자 추가될 수 있쟈나) 

// 음! 다른거!



// id=1이면 card-item data-zoom="character"에 src변경
// aria-label 크로노 오디세이 변경
// card-info 변경

// id=2에 card-item 변경

// id=3에 ..

// 이걸 자동화

// 받는값 object
// 만들어야 하는 기능 : src, text add
/* onst key = gamesList.key
const value = gamesList.key.value
console.log(gamesList[key][value]) */
// 오... 해당 페이지를 받아야 할거같은데 해당 페이지가 1일때 1-2를 뿌리고 2일때 3-4을 뿌리고


// ALT 설명 문구 - 카드 영역
const characterAlt = ' 게임 캐릭터'
const backgroundAlt = ' 게임 캐릭터 배경'

// HTML 선택자 - 카드 영역


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

// 카드 인포 추가 - 카드 영역
function gameInfoAdd (games) {
  // 이거 HTML로 그려야하나? 고민 < 랜더할때 깜박거리면 그러지 않기
  // 이거.. 직접하드코딩말고 id불러올때 바로 넣을 수 있게 하기
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
  }
}

gameInfoAdd(gamesList)



// 뭘 받아와야하지? 
// 기능: 페이지를 눌렀을때 앞으로, 뒤로 가는 버튼
// 총페이지, 현재페이지
// 현재 페이지, 오브젝트, 
// 현재페이지 index 번호 ( 누르면 ++ 2 하면될듯)
//  총페이지, 
const totalPageArray = Object.keys(gamesList)
const totalPage = totalPageArray.length / 2
const navigationList = document.querySelector('.navigation')
const navigationNext = navigationList.querySelector('.navi-next')
const navigationPrev = navigationList.querySelector('.navi-prev')

console.log(Math.ceil(totalPage) + '토탈 페이지')

function navigation (currentPage) {
  const currentId = gamesList.archeAgeWar.id
  let currentPageNumber = 0
  
  //  마우스 클릭을 하면 +currentPage가 +1 currentPage가 -1
  navigationNext.addEventListener('click', (currentPage) => {
    currentPageNumber++
    console.log(currentPageNumber)
    console.log(currentPageNumber + '   커렌트 페이지?')
  })
  navigationPrev.addEventListener('click', (currentPage) => {
    currentPageNumber--
    console.log(currentPageNumber)
    console.log(currentPageNumber + '   커렌트 페이지?')
  })
  
  // 여기엔 마우스클릭이벤트
  if (currentPage <= 2) {
    console.log('1~2페이지임?')
  } 
  else if (currentPage <= 4) {
    console.log('3~4페이지임?')
  }
  else if (currentPage <= 6) {
    console.log('5~6페이지임?')
  } else {
    console.log('다른 페이지임')
  }
}

navigation(4);
