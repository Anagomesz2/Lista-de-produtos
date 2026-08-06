let produtos = [
    {
        nome: 'Cola coca',
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

//── ⋆⋅𖤓⋅⋆ ── Desenvolvimento 1 - C ── ⋆⋅𖤓⋅⋆ ──

produtos.length = 4;

console.log("====================");
console.log("Quantidade de produtos:");
console.log(produtos.length);
