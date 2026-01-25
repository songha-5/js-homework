
const header = document.querySelector('.tab_herder')
const tabButton = header.querySelectorAll('.tab_button')
const body = document.querySelector('.tab_body')
const tabContent = body.querySelectorAll('.tab_content')

for (let i = 0, l = tabButton.length; i < l; i++ ) {
  // 각각의 탭 버튼을 눌렀을때 클릭 이벤트
  tabButton[i].addEventListener('click', () => {
    const active = header.querySelector('.tab_button.active');
    const tab = body.querySelector('.tab_content.tab');
    const selected = header.querySelector('[aria-selected="true"]')

    // 기존 선택되어있는 선택클래스 제거 후 추가
    if(active) {
      active.classList.remove('active')
    }
    tabButton[i].classList.add('active')

    // aria-selected 선택된 tab에 true 그 외의 탭에 false
    selected.ariaSelected = false
    tabButton[i].ariaSelected = true

    // 해당 탭과 컨텐츠 이름이 매칭되면 class='tab' 추가
    if(tabButton[i].dataset['action'] === tabContent[i].dataset['tab']) {
      // 기존 선택되어있는 탭클래스 제거 후 추가
      if(tab){
        tab.classList.remove('tab')
      }
      tabContent[i].classList.add('tab')
    }
  })
}



































// TODO
// -- 입출금 계좌
// - 배열을 만듦
// - 반복문
// - account_number 계좌번호 넣음
// - account_money 입금 금액 넣음 + 문자열(const로 빼기)


