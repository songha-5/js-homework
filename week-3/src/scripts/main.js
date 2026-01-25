
const header = document.querySelector('.tab_herder')
const tabButton = header.querySelectorAll('.tab_button')
const tabBody = document.querySelector('.tab_body')
const tabContent = tabBody.querySelectorAll('.tab_content')

for (let i = 0, l = tabButton.length; i < l; i++ ) {
  console.log(i)
  // 각각의 탭 버튼을 눌렀을때 클릭 이벤트
  tabButton[i].addEventListener('click', () => {
    tabButton.classList.remove('active')
    tabButton[i].classList.add('active')
    tabButton.setAttribute('aria-selected', 'flase')
    tabButton[i].setAttribute('aria-selected', 'true')
  })
}



// ==================

// data-action="account-inquiry" 
// 이면 data-tab="account-inquiry"에 add tab
// if
// tab_button이 가지고있는 data-action === data-tab값과 동일한거에
// data-tab="account_inquiry" add tab하기
// (dataset.dataAction === dataset.dataTab ) {
//   해당 dataset.dataTab
// }

// data-action="account-inquiry"값을 가져




//tab_button에 클래스 추가 active
// 기존 aria-selected="true"를 false로 변경
// 선택된 aria-selected="true"로 변경 
// 선택된 data-tab에 tab class추가































// TODO
// -- 입출금 계좌
// - 배열을 만듦
// - 반복문
// - account_number 계좌번호 넣음
// - account_money 입금 금액 넣음 + 문자열(const로 빼기)


