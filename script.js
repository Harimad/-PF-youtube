const moreBtn = document.querySelector('.detail_btn')
const detailTitle = document.querySelector('.title .detail')

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked')
  detailTitle.classList.toggle('clamp')
})
