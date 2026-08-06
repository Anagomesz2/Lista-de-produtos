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


