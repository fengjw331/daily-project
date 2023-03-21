const ACTIVE='active'
const data=['island','spring','summer','autumn','winter']
const text_description=document.querySelector('.text-description')
const h1=text_description.querySelector('h1')
const h2=text_description.querySelector('h2')
const p=text_description.querySelector('p')
const menu_logo=document.querySelector('.menu-logo')
const main=document.querySelector('.main')
const aside=document.querySelector('.aside')
const buttons=document.querySelectorAll('.aside a')
const videos=document.querySelectorAll('.content video')
const overlay=document.querySelector('.video-overlay')

videos[0].classList.add(ACTIVE)
modefy_content(0)

menu_logo.addEventListener('click',()=>{
    menu_logo.classList.toggle(ACTIVE)
    main.classList.toggle(ACTIVE)
    aside.classList.toggle(ACTIVE)
})
buttons.forEach((el,index)=>{
    el.addEventListener('click',()=>{
        videos.forEach((video,i)=>{
            video.classList.remove(ACTIVE)
            if(index===i){
                video.classList.add(ACTIVE)
                modefy_content(index)
            }
        })
    })
})


function modefy_content(index){
    h1.innerHTML=CONTENT_INFO[data[index]].h1
    h2.innerHTML=CONTENT_INFO[data[index]].h2
    p.innerHTML=CONTENT_INFO[data[index]].p
    overlay.className=`video-overlay overlay-${data[index]}`
}