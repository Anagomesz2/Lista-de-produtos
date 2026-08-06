let produtos = [
    {
        nome: 'Coca-Cola',
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

//── ⋆⋅𖤓⋅⋆ ── Desenvolvimento 1 - C ── ⋆⋅𖤓⋅⋆ ──

produtos.length = 4;

console.log('─── ∙ ∙ ∙ ✤ ∙ ∙ ∙ ─── ');
console.log('─ ✤ ─ Quantidade de produtos ─ ✤ ─');
console.log("------> " + produtos.length);

//── ⋆⋅𖤓⋅⋆ ── Desenvolvimento 2 - C ── ⋆⋅𖤓⋅⋆ ──

console.log('─── ∙ ∙ ∙ ✤ ∙ ∙ ∙ ─── ');
console.log(' ─ ✤ ─ Transformar em Maiúsculo─ ✤ ─ ');
let maiusculas = produtos.map((produto) => produto.nome.toUpperCase());
console.table(maiusculas);

//── ⋆⋅𖤓⋅⋆ ── Desenvolvimento 3 - C ── ⋆⋅𖤓⋅⋆ ──

console.log(" ─ ✤ ─ Todos os Elementos ─ ✤ ─ ");
console.log("─── ∙ ∙ ∙ ✤ ∙ ∙ ∙ ─── ");
for (const produto of produtos) {
    console.log(produto);
}

//── ⋆⋅𖤓⋅⋆ ── Desenvolvimento 4 - C ── ⋆⋅𖤓⋅⋆ ──

console.log(' ─ ✤ ─ Quantidade suficiente de Produtos─ ✤ ─ ');
console.log('─── ∙ ∙ ∙ ✤ ∙ ∙ ∙ ─── ');

if (produtos.length >= 5) {
    console.log('O array possui quantidade suficiente de produtos.');
} else {
    console.log('O array possui quantidade insuficiente de produtos.');
}
