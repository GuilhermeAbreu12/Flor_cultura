// Chamando o que eu preciso
export let main__product_box = document.getElementById('main__product-box') // Caixa central
// Lista de itens no menu lateral
const Agapantos = document.getElementById('Agapantos')
const Girassois = document.getElementById('Girassois')
const Margaridas = document.getElementById('Margaridas')
const Tulipas = document.getElementById('Tulipas')
const Orquideas = document.getElementById('Orquideas')
const Lírios = document.getElementById('Lirios')
const Bromelias = document.getElementById('Bromelias')
const Ixoras = document.getElementById('Ixoras')
const Allamandas = document.getElementById('Allamandas')
const Dalias = document.getElementById('Dalias')
const Gerberas = document.getElementById('Gerberas')

import { Products } from "./dataBase.js";
import { searchbar } from "./searchbar.js";
import { filtrar } from "./searchbar.js";
// import { totalProducts } from "./dataBase.js"
let content = [];
export let c = 0;
// Gerando dinamicamente
for(c in Products){
    content += `
        <div class="products" tabindex="3">
            <div class="products-head">
                <div class="products__img">
                    <img src="${Products[c].img}" alt="imagem da flor ${Products[c].title}">
                </div>
                <div class="products-amount-div">
                    <p class="products-amount-div__number"></p>
                </div>
            </div>    
            <div class="products__title">
                <p>${Products[c].title}</p>
            </div>
            <button class="products__price" tabindex="3">
            <h5>R$ ${Products[c].price}</h5>
            </button>
            <div class="products__quantityBar">
                <button class="removeButton">-</button>
                <button class="addButton">+</button>
            </div>
        </div>
    `
}
let nothingMore = `
    <div id="nothingMore">
        <p> Não encontramos mais resultados relacionados </p>
    </div>
`
// Menu lateral Clicks

Agapantos.addEventListener('click', ()=>{
    searchbar.value = 'Agapanto'
    filtrar()
})
Girassois.addEventListener('click', ()=>{
    searchbar.value = 'Girassol'
    filtrar()
})
Margaridas.addEventListener('click', ()=>{
    searchbar.value = 'Margarida'
    filtrar()
})
Tulipas.addEventListener('click', ()=>{
    searchbar.value = 'Tulipa'
    filtrar()
})
Orquideas.addEventListener('click', ()=>{
    searchbar.value = 'Orquídea'
    filtrar()
})
Lírios.addEventListener('click', ()=>{
    searchbar.value = 'Lírio'
    filtrar()
})
Bromelias.addEventListener('click', ()=>{
    searchbar.value = 'Bromélia'
    filtrar()
})
Ixoras.addEventListener('click', ()=>{
    searchbar.value = 'Íxora'
    filtrar()
})
Allamandas.addEventListener('click', ()=>{
    searchbar.value = 'Allamanda'
    filtrar()
})
Dalias.addEventListener('click', ()=>{
    searchbar.value = 'Dália'
    filtrar()
})
Gerberas.addEventListener('click', ()=>{
    searchbar.value = 'Gérbera'
    filtrar()
})
main__product_box.innerHTML = content + nothingMore

// Sistema de compras
const buyNumber = document.getElementById('buyNumber__Number');
let totalProducts = 0;
buyNumber.innerText = totalProducts;

const graySpace = document.getElementsByClassName('products-amount-div');

const shoppingCartIcon = document.getElementById('shopping_cart__cart')

const products__quantityBar = document.querySelectorAll('.products__quantityBar');
const buyButton = document.querySelectorAll('.products__price').forEach((button, i) => {
    button.addEventListener('click', () =>{
        if (Products[i].amount === 0){
            products__quantityBar[i].classList.add('active');
            graySpace[i].classList.add('active')            
        }
        adicionarDados(i)
        atualizarDados()
    })
})

const addButton = document.querySelectorAll('.addButton').forEach((button, i) => {
    button.addEventListener('click', () => {
        adicionarDados(i)
        atualizarDados()
    })
})

const removeButton = document.querySelectorAll(".removeButton").forEach((button, i) => {
    button.addEventListener('click', ()=>{
        if (Products[i].amount === 1){
            products__quantityBar[i].classList.remove('active');
            graySpace[i].classList.remove('active');
        }
        if ((totalProducts >= 0) && (totalProducts <= 999)){
            Products[i].amount --;
            totalProducts --;
        }
        atualizarDados()
    })
})

const ShoppingCartItems = [];

function atualizarDados(){
    buyNumber.innerText = totalProducts;
    if (totalProducts > 0) shoppingCartIcon.style.fill = 'white'; 
    else shoppingCartIcon.style.fill = 'none';
    
    const buyNumber__Number = document.querySelectorAll('.products-amount-div__number').forEach((number, i) => { 
        number.innerHTML = `${Products[i].amount}`;
    });
    Products.forEach(product => {
        if (product.amount > 0){
            ShoppingCartItems.push(product.title, product.price)
        }
    });
    console.log(ShoppingCartItems);
}
function adicionarDados(i){
    if ((totalProducts >= 0) && (totalProducts < 999)){
        Products[i].amount ++;
        totalProducts ++;
    }
}

// Shopping cart - page
const ShoppingCartList = document.querySelector('#ShoppingCartList');

if (ShoppingCartList){
    ShoppingCartItems.innerHTML += `
        <p>${ShoppingCartItems}</p>
    `
}
// Estou tentando usar este mesmo script para rodar na página de carrinho, preciso de uma forma de separar os títulos, imagens, preços, etc, dentro da const ShoppingCartList para que possa formatar corretamente na página