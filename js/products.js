// Chamando o que eu preciso
let main__product_box = document.getElementById('main__product-box') // Caixa central
let body = document.querySelector('body')
let div = document.createElement('div')

const Products = [
    {
        img: '../imgs/prods/rosa01.webp',
        title: 'Buquê de rosas com 30 unidades',
        price: '450,00'
    },
    {
        img: '../imgs/prods/rosa02.webp',
        title: 'Buquê de rosas com 30 unidades',
        price: '150,00'
    },
    {
        img: '../imgs/prods/rosa03.webp',
        title: 'Buquê de rosas com 30 unidades',
        price: '250,00'
    },
    {
        img: '../imgs/prods/rosa04.webp',
        title: 'Buquê de rosas com 30 unidades',
        price: '200,00'
    }
]
let test = ['a', 'b']
let content = [];
let conteudo = []
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


main__product_box.innerHTML = content



