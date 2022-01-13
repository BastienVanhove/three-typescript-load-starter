import './assets/styles/style.css'

const loadPage = document.querySelector<HTMLDivElement>('.load-page')
for(let i = 0; i<10000; i++){
  console.log(i)
}
window.addEventListener('load',()=>{
  if(loadPage) loadPage.style.opacity = '0'
  setTimeout(()=>{
    if(loadPage) loadPage.style.display = 'none'
  },500)
})
//const app = document.querySelector<HTMLDivElement>('#app')!

