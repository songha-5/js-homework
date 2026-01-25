
const header = document.querySelector('.tab_herder')
const tabButton = header.querySelectorAll('.tab_button')
const tabBody = document.querySelector('.tab_body')
const tabContent = tabBody.querySelectorAll('.tab_content')

for (let i = 0, l = tabButton.length; i < l; i++ ) {
  console.log(i)
  // 각각의 탭 버튼을 눌렀을때 클릭 이벤트
  tabButton[i].addEventListener('click', () => {
    // tabButton.classList.remove('active')
    tabButton[i].classList.add('active')
    // tabButton.setAttribute('aria-selected', 'flase')
    tabButton[i].setAttribute('aria-selected', 'true')


    tabContent[i].classList.add('tab')
  })
}


// ==================




































// TODO
// -- 입출금 계좌
// - 배열을 만듦
// - 반복문
// - account_number 계좌번호 넣음
// - account_money 입금 금액 넣음 + 문자열(const로 빼기)


