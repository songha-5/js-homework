// 실습 과제
// ✍ 변수, 상수 작성 과제
// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.

// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.
let movieTitle = '3 IDIOTS'
console.log(movieTitle)

// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.
const LIGHT_SPEED = "빛의 속도(299,792,458 m/s)"
console.log(LIGHT_SPEED)

// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.
const eamilVerificationBoolean = true
console.log(eamilVerificationBoolean)

// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.
let productInventoryQuantity = '47개'
console.log(productInventoryQuantity)

// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.
let memberPoint = '15,800점'
console.log(memberPoint)

// 6. API 서버의 "기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.
const API_SERVER = "https://api.example.com"
console.log(API_SERVER)

// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.
let views = '1,234'
console.log(views)

// 8. "배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.
let deliveryStatus = '준비중'
console.log(deliveryStatus)

// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
const couponAvailability = true
console.log(couponAvailability)

// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.
const TEN_MB = '10MB를 바이트 단위로 10485760'
console.log(TEN_MB)

// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.
let userRatingScore = '85.5'
console.log(userRatingScore)

// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
const notiAgreeStatus = true
console.log(notiAgreeStatus)




// -------------------------------------------------------
// -------------------------------------------------------
// -------------------------------------------------------




// ✍ 함수 작성 과제

//  1. 환영 메시지 생성
// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.
// VIP 회원 : "🌟 VIP {이름}님, 특별한 혜택이 준비되어 있습니다!"
// 일반 회원 : "안녕하세요, {이름}님! 즐거운 쇼핑 되세요."


function welcomeMessage(name, isVip) {
  // VIP, 일반회원 유저이름 넣어 환영 문구 출력
  const vipWelcome = "🌟 VIP " + name + "님, 특별한 혜택이 준비되어 있습니다!"
  const nomalWelcome = "안녕하세요, " + name + "님! 즐거운 쇼핑 되세요."

  // VIP가 맞다면 vipWelcome문구 출력
  // VIP가 아니라면 nomalWelcome문구 출력
  return (isVip && vipWelcome) || (isVip || nomalWelcome)
}

// welcomeMessage 테스트
console.log(welcomeMessage('김가가', true))
console.log(welcomeMessage('김나나', false))




// 2. 배송비 계산
// 주문 금액과 배송 지역을 입력받아 배송비를 계산하는 함수를 작성합니다.
const deliveryCalculate = function (deliveryFee, area) {
  // 문자열을 정수로 변환 (중복작업 방지)
  const price = parseInt(deliveryFee, 10)
  // 배송료, 기본 배송비, 추가 배송비 추가
  const basicCost = 3_000
  const addCost = 3_000
  const squareCost = basicCost + addCost
  // 제주/도서 지역 목록
  const isJeju = '제주'
  const isIsland = '도서'

  // 배송료 계산식 (원금 + 배송비)
  const addDeliveryFee = (deliveryFee) => price + deliveryFee

  // 주문금액이 5만원 이상이면 무료배송(원금반환)
  const freeDelivery = price >= 50_000 && price  
  // 제주/도서 지역이면 3_000 추가
  const areaCheck = (isIsland === area || isJeju === area) && addDeliveryFee(squareCost)
  // 기본 배송비 계산식 (원금에 3_000 추가)
  const basicDelivery = price + basicCost
  // 주문 금액이 5만원 이상이면 무료배송 하거나 제주/도서 지역일시 배송료 추가 아니면 기본 배송비
  const totalPrice = freeDelivery || areaCheck || basicDelivery
  // 결과값이 0보다 작으면 0을 출력해라
  const result = price > 0 && totalPrice || 0

  return result
}
console.log(deliveryCalculate('-1', '제주'))
console.log(deliveryCalculate('', '제주'))
console.log(deliveryCalculate('0', ''))
console.log(deliveryCalculate('3000', '도서'))
console.log(deliveryCalculate('50000', '부산'))



// 3. 비밀번호 유효성 검사
// 비밀번호 문자열을 입력받아 유효성 검사를 수행하는 함수를 작성합니다.
// 비밀번호 유효성 검사, password를 매개변수로 받음
const passwordValid = password => (password >= 8) && (password <= 20)

console.log(passwordValid(7))
console.log(passwordValid(20))
console.log(passwordValid(21))



// 4. 포인트 적립 계산
// 결제 금액과 회원 등급을 입력받아 적립될 포인트를 계산하는 함수를 작성합니다.
// 포인트 적립률
// VIP : 결제 금액의 5%
// GOLD : 결제 금액의 3%
// SILVER : 결제 금액의 1%
// 일반 : 결제 금액의 0.5%

function pointsCalculate (price, membership) {
  // 회원 등급 구분
  const userRating = {
    'vip' : 0.05,
    'gold' : 0.03,
    'silver' : 0.01,
    '노말' : 0.005
  }
  // 맴버쉽 호출하면 membership에 따라 포인트 계산
  const calculate = userRating[membership] * price
  // 값 정수 전환
  const result = parseInt(calculate, 10)

  return  result
}
console.log(pointsCalculate(10002, 'vip'))
console.log(pointsCalculate(10002, 'gold'))
console.log(pointsCalculate(10002, 'silver'))
console.log(pointsCalculate(10002, '노말'))



// 5. 영화 티켓 가격 계산
// 영화 정보와 관람 인원을 입력받아 총 결제 금액을 계산하는 함수를 작성합니다.
const movieTicket = function (movieType, people, discount) {
  // 영화 리스트 가격표 추가 - 새 영화 타입이 추가되면, 추가
  const type =  {
    '일반 영화': 14000,
    '3D 영화' : 17000,
    'IMAX 영화': 20000,
  }
  // 영화 타입과 사람수에 따라 가격 계산
  const totaltotalTicket = type[movieType] * people
  // 조조할인(10시 이전인지) 확인
  const discountTime = 10 >= discount
  // 조조할인 계산식 - 전체금액에서 20% 할인
  const discounttotalTicket = totaltotalTicket - (totaltotalTicket * 0.2)
  // 결과 : 조조할인에 해당하면 적용 / 아니면 기본값 적용
  const discountCalculate = discountTime && discounttotalTicket || totaltotalTicket
  return discountCalculate
}
console.log(movieTicket('IMAX 영화', 2, 10))
console.log(movieTicket('3D 영화', 2, 10))
console.log(movieTicket('일반 영화', 2, 10))
