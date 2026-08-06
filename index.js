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

console.log("lista de produtos:");
console.log("===========================");
console.table(produtos);

//desenvolvimento 1 main
produtos.shift("Cola Coca");
console.table(produtos);
