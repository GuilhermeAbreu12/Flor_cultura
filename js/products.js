// Chamando o que eu preciso
export let main__product_box = document.getElementById('main__product-box') // Caixa central

export const Products = [
    {
        img: '../imgs/prods/rosa01.webp',
        title: 'Buquê de rosas com 30 unidades',
        price: '450,00'
    },
    {
        img: '../imgs/prods/rosa02.webp',
        title: 'Buquê de rosas com 20 unidades',
        price: '260,00'
    },
    {
        img: '../imgs/prods/rosa03.webp',
        title: 'Buquê de rosas com 12 unidades',
        price: '198,00'
    },
    {
        img: '../imgs/prods/rosa04.webp',
        title: 'Buquê de rosas Spray',
        price: '900,00'
    },
    {
        img: '../imgs/prods/rosa05.webp',
        title: 'Buquê de Rosas Colombianas com 12 unidades',
        price: '218,00'
    },
    {
        img: '../imgs/prods/rosa06.webp',
        title: 'Buquê de Rosas Colombianas com 6 unidades',
        price: '139,00'
    },
    {
        img: '../imgs/prods/rosa07.webp',
        title: 'Buquê de rosas colombianas com 3 unidades',
        price: '79,00'
    },
    {
        img: '../imgs/prods/rosa08.webp',
        title: 'Buquê de rosas colombianas com 20 unidades',
        price: '370,00'
    },
    {
        img: '../imgs/prods/rosa09.webp',
        title: 'Ramalhete de Rosas Champagne',
        price: '99,00'
    },
    {
        img: '../imgs/prods/rosa10.webp',
        title: 'Ramalhete com 6 Rosas vermelhas',
        price: '99,00'
    },
    {
        img: '../imgs/prods/rosa11.webp',
        title: 'Ramalhete de Girassol',
        price: '58,00'
    },
    {
        img: '../imgs/prods/rosa12.webp',
        title: 'Ramalhete de Rosas Brancas',
        price: '98,00'
    }
]
let content = [];
export let c = 0;
// Gerando dinamicamente
for(c in Products){
    content += `
        <div class="products" tabindex="0">
            <div class="products__img">
                <img src="${Products[c].img}" alt=".">
            </div>
            <div class="products__title">
                <p>${Products[c].title}</p>
            </div>
            <button class="products__price" tabindex="0">
            <h5>R$ ${Products[c].price}</h5>
            </button>
        </div>
        
    `
}
let nothingMore = `
    <div id="nothingMore" tabindex="0">
        <p> Não encontramos mais resultados relacionados </p>
    </div>
`
main__product_box.innerHTML = content + nothingMore