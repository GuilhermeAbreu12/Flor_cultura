const faqs = document.querySelectorAll('.box-faqs__button')
const answers = document.querySelectorAll('.box-faqs__answers')
let c = 0

faqs.forEach((element, c) =>{
    element.addEventListener('click', ()=>{
        answers[c].classList.toggle('active')
    })
})

