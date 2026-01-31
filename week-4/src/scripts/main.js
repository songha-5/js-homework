// TODO
// - closest으로 `data-card="card"`선택해서 이벤트 추가
const cardSection = document.querySelector('[data-select="card"')

cardSection.addEventListener('click', (e) => {
  // const target = e.target.closest('.card_button')
  const target = e.target.closest('.card_button')
  
  // 변수 타겟이 없을때 null(에러)이 반환되므로 바로 반환하여 오류가 안나게 방지
  if(!target) return

  // 변수에서 부모로 올라가 다른 버튼들을 선택해서 조작할 수 있게 선택
  const otherButton = target.closest('[data-select="card"]').querySelector('.checked')
  
  // 두번 누를때는?
  e.preventDefault()
  if(otherButton) {
    otherButton.classList.remove('checked')
  }
  target.classList.add('checked')
})



// forEach???
// 데이터를 배열로 넣을때? 그런데 처음 데이터를 뿌릴때 넣을거라 상관없지 않을까?

// addEventListener > 안에 함수로 넣기
// card_noti에 checked추가 
// data-plan값을 가져와서 .card-noti의 `data-plan`에 textContent로 넣기
// data-price값을 가져와서 .card-noti의 `data-price`에 textContent로 넣기

// 할수있으면 하기
// .card_noti는 누르고 3초뒤에 checked 사라지기

