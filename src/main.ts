import './assets/styles/style.css'

const endLoading = () =>{
  const loadPage = document.querySelector<HTMLDivElement>('.load-page')
  if(loadPage) loadPage.style.opacity = '0'
  setTimeout(()=>{
    if(loadPage) loadPage.style.display = 'none'
  },500)
}
window.addEventListener('load', endLoading)
//const app = document.querySelector<HTMLDivElement>('#app')!

