window.onload = function(){
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event){
    event.preventDefault();

    //Criando elementos:
    const cartao = document.createElement('div');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const b = document.createElement('b');
    const p = document.createElement('p');

    //Adquirindo dados:
    const chassiValor = document.querySelector('input#chassis').value
    const modeloValor = document.querySelector('select#modelo').value
    const imgLink = document.querySelector('input#imagem').value
    const defeito = document.querySelector('textarea').value

    //Adicionando imagem:
    img.setAttribute('src',imgLink);

    //Adicionando textos:
    const btexto = document.createTextNode(`${modeloValor} - ${chassiValor}`);
    b.appendChild(btexto);
    const ptext =document.createTextNode(defeito);
    p.appendChild(ptext);

    //Adicionando classes:
    cartao.classList.add('cartao');
    img.classList.add('cartao-img');
    p.classList.add('cartao-texto');
    h4.classList.add('cartao-titulo');

    //Append dos elementos:
    h4.appendChild(b);
    cartao.appendChild(img);
    cartao.appendChild(h4);
    cartao.appendChild(p);

    document.querySelector('.cartoes').appendChild(cartao);
    form.reset();
    });
}