let produtos = [
  {
        nome: 'Cola Coca',
        preco: 19,
    },
    {
        nome: 'Fanta',
        preco: 15,
    },
    {
        nome: 'Guaraná',
        preco: 17,
    },
    {
        nome: 'Pepsi',
        preco: 18,
    },
];

console.log('lista de produtos:');
console.log('===========================');
console.table(produtos);

// Removendo o último elemento do array - 1
produtos.pop();
console.table(produtos);

// Adicionar um novo elemento ao final do array utilizando o método push - 2

let produto2 = ['Sprite'];
produto2.push('Coca Cola');
console.table(produto2);

// Crie um novo array contendo apenas parte dos registros utilizando -3
let produtosBase = ['Coca Cola', 'Fanta', 'Guaraná', 'Sprite'];

let produtosFiltrados = produtosBase.filter((produto) => produto !== 'Fanta');

console.table(produtosFiltrados);

// Inverter a ordem do array utilizando -4
let produtos4 = ['Coca Cola', 'Guarana', 'Sprite'];
produtos4.reverse();

// Exibir o resultado utilizando:
console.table(produtos4);
//desenvolvimento 1 main
produtos.shift("Cola Coca");
console.table(produtos);

//desenvolvimento 2
let novoProduto = { nome: 'Sprite', preco: 10 };
produtos.unshift(novoProduto);
console.table(produtos);

//desenvolvimento 3
let produtoEncontrado = produtos.find((produto) => produto.nome === 'Pepsi');
console.log(produtoEncontrado);
