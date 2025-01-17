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
let content = [];
export let c = 0;
// Gerando dinamicamente
for(c in Products){
    content += `
        <div class="products" tabindex="3">
            <div class="products__img">
                <img src="${Products[c].img}" alt=".">
            </div>
            <div class="products__title">
                <p>${Products[c].title}</p>
            </div>
            <button class="products__price" tabindex="3">
            <h5>R$ ${Products[c].price}</h5>
            </button>
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