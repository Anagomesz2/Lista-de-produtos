let produtos = [
    {
        nome: 'Coca Cola',
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
console.table(produtos);

// Crie um novo array contendo apenas parte dos registros utilizando -3
let produtosBase = ['Coca Cola', 'Fanta', 'Guaraná', 'Sprite'];

let produtosFiltrados = produtosBase.filter((produto) => produto !== 'Fanta');

console.table(produtosFiltrados);
