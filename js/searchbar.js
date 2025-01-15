// Importando variáveis e constantes
import { Products } from "./products.js";
import { c } from "./products.js";
import { main__product_box } from "./products.js";

// Identificando os elementos DOM
const searchbar = document.getElementById('searchbar')
let body = document.querySelector('body')
const products = document.querySelectorAll('.products')
const nothingMore = document.getElementById('nothingMore')

// Declarando variáveis e constantes
let d = 0
let user = '3'
console.log('Retornou')

searchbar.addEventListener('input',()=>{
    console.log('Alguém está digitando...')
    searchbar.value = searchbar.value.trimStart()
    if (searchbar.value != ''){
        products.forEach((product) => {
            product.style.display = 'none'
        })
        for (d in Products){
            Products[d].title = Products[d].title.toLowerCase()
            if (Products[d].title.includes(searchbar.value.toLowerCase())){
                products[d].style.display = 'flex'
                nothingMore.style.display = 'none'
            } else {
                nothingMore.style.display = 'flex'
            }
        }
    } else {
        products.forEach((product) => {
            product.style.display = 'flex'
        })
        nothingMore.style.display = 'none'
    }
});

for(d in Products){
    if (Products[d].title.includes(user)){
        console.log(Products[d].title)
    }
    
}