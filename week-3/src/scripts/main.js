
const header = document.querySelector('.tab_herder')
const tabButton = header.querySelectorAll('.tab_button')
const body = document.querySelector('.tab_body')
const tabContent = body.querySelectorAll('.tab_content')

for (let index = 0, length = tabButton.length; index < length; index++ ) {
  // 각각의 탭 버튼을 눌렀을때 클릭 이벤트
  tabButton[index].addEventListener('click', () => {
    const active = header.querySelector('.tab_button.active');
    const tab = body.querySelector('.tab_content.tab');
    const selected = header.querySelector('[aria-selected="true"]')

    // 기존 선택되어있는 선택클래스 제거 후 active 추가
    if(active) {
      active.classList.remove('active')
    }
    tabButton[index].classList.add('active')

    // aria-selected 선택된 tab에 true 그 외의 탭에 false
    selected.ariaSelected = false
    tabButton[index].ariaSelected = true

    // 해당 탭과 컨텐츠 이름이 매칭되면 class='tab' 추가
    if(tabButton[index].dataset['action'] === tabContent[index].dataset['tab']) {
      // 기존 선택되어있는 탭클래스 제거 후 추가
      if(tab){
        tab.classList.remove('tab')
      }
      tabContent[index].classList.add('tab')
    }
  })
}


// 계좌조회 목록(배열) 리스트
const accountInquiryList = [
  { title: '입출금 계좌', number: '123-456-789012', money: 12345678},
  { title: '입출금 계좌', number: '123-456-789012', money: 12345678},
]
const accountInquiry = body.querySelector('[data-tab="account-inquiry"]')
const cardAccountInquiry = accountInquiry.querySelectorAll('[data-account="account-inquiry"]')

// 계좌조회 카드리스트 - 반복문을 통해 카드 목록 뿌려줌
accountInquiryList.forEach((list, index) => {
  const title = cardAccountInquiry[index].querySelector('.account_title')
  const number = cardAccountInquiry[index].querySelector('.account_number')
  const money = cardAccountInquiry[index].querySelector('.account_money')
  
  // 배열에서 리스트를 가지고와서 텍스트를 넣어줌
  title.textContent = list.title
  number.textContent = list.number
  money.textContent = list.money.toLocaleString() + ' 원'
})


// 투자현황 목록(배열) 리스트
const investmentStatusList = [
  {title: '국내 주식', subTitle: '10종목 보유', percent: '+5.2', money: 23456789},
  {title: '해외 주식', subTitle: '5종목 보유', percent: '-2.1', money: 15234567},
  {title: '펀드', subTitle: '3개 상품', percent: '+3.7', money: 8123456}
]
const investmentStatus = body.querySelector('[data-tab="investment-status"]')
const cardInvestmentStatus = investmentStatus.querySelectorAll('[data-account="investment-status"]')

// 투자 현황 카드리스트 - 반복문을 통해 카드 목록 뿌려줌
investmentStatusList.forEach((list, index) => {
  const title = cardInvestmentStatus[index].querySelector('.investment_title')
  const keep = cardInvestmentStatus[index].querySelector('.investment_keep')
  const percent = cardInvestmentStatus[index].querySelector('.investment_percent')
  const money = cardInvestmentStatus[index].querySelector('.investment_money')

  // 배열에서 리스트를 가지고와서 텍스트를 넣어줌
  title.textContent = list.title
  keep.textContent = list.subTitle  
  percent.textContent = list.percent + '%'
  money.textContent = list.money.toLocaleString() + ' 원'
})


// 최근 거래 목록(배열) 리스트
const transactionHistoryList = [
  {day: '2026.01.22', title: '스타벅스 강남점', money: '-6500'},
  {day: '2026.01.22', title: '급여 입금', money: '+3,500,000'},
  {day: '2026.01.21', title: 'GS25 편의점', money: '-12,300'},
  {day: '2026.01.21', title: '카카오페이 송금', money: '-50,000'},
  {day: '2026.01.20', title: '쿠팡 결제', money: '-89,000'},
]
const transactionHistory = body.querySelector('[data-tab="transaction-history"]')
const cardTransactionHistory = transactionHistory.querySelectorAll('[data-account="transaction-history"]')

// 최근 거래 카드리스트 - 반복문을 통해 카드 목록 뿌려줌
transactionHistoryList.forEach((list, index) => {
  const title = cardTransactionHistory[index].querySelector('.history_title')
  const day = cardTransactionHistory[index].querySelector('.history_day')
  const money = cardTransactionHistory[index].querySelector('.history_money')

  // 배열에서 리스트를 가지고와서 텍스트를 넣어줌
  title.textContent = list.title
  day.textContent = list.day
  money.textContent = list.money + '원'
})


// 카드 관리 목록(배열) 리스트
const cardManagementList = [
  {title: '신한카드', type: 'VISA', number: '1234 5678 9012 3456', money: 1234560},
  {title: 'KB국민카드', type: 'Mastercard', number: '9876 5432 1098 7654', money: 567890},
]
const managementList = body.querySelector('[data-tab="card-management"]')
const cardManagement = managementList.querySelectorAll('[data-account="card-management"]')

// 카드 관리 카드리스트 - 반복문을 통해 카드 목록 뿌려줌
cardManagementList.forEach((list, index) => {
  const title = cardManagement[index].querySelector('.keep_title')
  const type = cardManagement[index].querySelector('.keep_type')
  const number = cardManagement[index].querySelector('.keep_number')
  const money = cardManagement[index].querySelector('.keep_money')

  // 배열에서 리스트를 가지고와서 텍스트를 넣어줌
  title.textContent = list.title
  type.textContent = list.type
  number.textContent = list.number
  money.textContent = list.money.toLocaleString() + ' 원'
})

































// TODO
// -- 입출금 계좌
// - 배열을 만듦
// - 반복문
// - account_number 계좌번호 넣음
// - account_money 입금 금액 넣음 + 문자열(const로 빼기)


