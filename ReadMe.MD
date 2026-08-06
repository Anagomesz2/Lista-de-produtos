# 🚀 Atividade de Revisão — Git, GitHub e JavaScript

## Objetivo

Nesta atividade vocês irão revisar os principais conceitos de **Git**, **GitHub** e **JavaScript**, simulando o fluxo de trabalho utilizado por equipes de desenvolvimento de software.

Todo o desenvolvimento deverá ser realizado utilizando **Git pelo terminal do Visual Studio Code**, seguindo o fluxo apresentado em sala.

> ⚠️ **Importante**
>
> Esta atividade é destinada à revisão e servirá como base para todas as atividades práticas do restante do curso.
>
> O objetivo é praticar o desenvolvimento colaborativo utilizando Git e GitHub.

---

# 📋 Tema da Atividade

Cada turma desenvolverá apenas um projeto.

## DS1

**Sistema de Controle de Produtos**

---

# 📁 Estrutura do Projeto

O projeto deverá conter apenas os seguintes arquivos.

```
README.md
index.js
```

Todo o código deverá estar no arquivo **index.js**.

Todo o desenvolvimento deverá ser realizado utilizando apenas:

- Variáveis
- Arrays
- Métodos de Arrays
- Estruturas de repetição
- Estruturas condicionais
- console.log()
- console.table() (somente para exibição de arrays)

---

# 👥 Equipes

A atividade deverá ser realizada em equipes de **2 ou 3 integrantes**.

Cada integrante deverá possuir:

- uma branch própria;
- quatro commits próprios;
- um Pull Request próprio.

---

# 📌 Regras Gerais

Durante toda a atividade:

- Utilize somente o Git pelo terminal do Visual Studio Code.
- Não utilize GitHub Desktop.
- Não utilize a interface gráfica do VS Code para realizar commits.
- Não altere diretamente a branch **main**.
- Todo desenvolvimento deverá ocorrer exclusivamente na branch individual.
- Todo Pull Request deverá ser revisado por outro integrante da equipe.
- O Merge somente poderá ocorrer após a aprovação.

---

# 🔄 Fluxo da Atividade

Todos os integrantes deverão seguir exatamente o fluxo abaixo.

```

Criar Projeto
↓

Primeiro Commit

↓

Push Main

↓

Adicionar Colaboradores

↓

Clone

↓

Criar Branch

↓

4 Commits

↓

Push Branch

↓

Pull Request

↓

Revisão

↓

Merge

↓

Projeto Final

```

---

# ⚠️ Antes de começar

Esta atividade simula o ambiente de desenvolvimento utilizado por empresas de software.

Portanto:

- trabalhe sempre na sua branch;
- realize commits pequenos e frequentes;
- leia atentamente cada etapa antes de executá-la;
- não pule etapas;
- sempre confira o resultado antes de realizar um commit.

---

# 📂 Organização do Projeto

A estrutura esperada ao final da atividade deverá ser:

```

Repositorio

├── README.md

└── index.js

```

---

# 👨‍💻 Organização da Equipe

Cada integrante receberá um conjunto diferente de atividades.

Para facilitar a leitura do enunciado, os participantes serão chamados de:

- 👨‍💻 Desenvolvedor A
- 👨‍💻 Desenvolvedor B
- 👨‍💻 Desenvolvedor C

```
💡 Observação

Caso a equipe possua apenas dois integrantes, as atividades previstas para o Desenvolvedor C deverão ser divididas igualmente entre o Desenvolvedor A e o Desenvolvedor B.
```

---

# 🛠️ Parte 1 — Configuração do Ambiente

Nesta etapa, a equipe irá preparar o ambiente de desenvolvimento e criar o repositório que será utilizado durante toda a atividade.

> ⚠️ **Importante**
>
> Apenas o **Desenvolvedor A** será responsável pela criação da pasta do projeto e do repositório no GitHub.
>
> Os demais integrantes deverão aguardar o compartilhamento do repositório para realizar o clone.

---

# Etapa 1 — Limpeza das Credenciais

Todos os integrantes deverão remover as credenciais antigas do GitHub salvas no Windows.

Abrir:

```
Gerenciador de Credenciais
```

↓

```
Credenciais do Windows
```

Remover todas as credenciais relacionadas ao GitHub.

---

# Etapa 2 — Configuração do Git

Todos os integrantes deverão configurar seu usuário do Git.

Configurar nome:

```bash
git config --global user.name "Seu Nome"
```

Configurar e-mail:

```bash
git config --global user.email "seu@email.com"
```

Confirmar configuração:

```bash
git config --list
```

Verificar se os campos abaixo aparecem corretamente:

```
user.name
user.email
```

---

# Etapa 3 — Criação do Projeto

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

Criar uma pasta para o projeto.

Exemplo:

```
revisao-git-github
```

Abrir a pasta no Visual Studio Code.

Criar os arquivos:

```
README.md
index.js
```

A estrutura deverá ficar semelhante a:

```
revisao-git-github

├── README.md
└── index.js
```

---

# Etapa 4 — Criar o Repositório no GitHub

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

Criar um novo repositório no GitHub.

Configurações obrigatórias:

- Repositório Público;
- Não adicionar README;
- Não adicionar .gitignore;
- Não adicionar licença.

Copiar a URL do repositório.

Exemplo:

```
https://github.com/usuario/revisao-git-github.git
```

---

# Etapa 5 — Inicializar o Git

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

No terminal do Visual Studio Code executar:

```bash
git init
```

Verificar:

```bash
git status
```

---

# Etapa 6 — Primeiro Commit

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

Adicionar os arquivos:

```bash
git add .
```

Verificar:

```bash
git status
```

Realizar o primeiro commit:

```bash
git commit -m "first commit"
```

---

# Etapa 7 — Renomear a Branch Principal

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

Executar:

```bash
git branch -M main
```

Verificar:

```bash
git branch
```

Resultado esperado:

```
* main
```

---

# Etapa 8 — Conectar ao GitHub

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

Executar:

```bash
git remote add origin URL_DO_REPOSITORIO
```

Verificar:

```bash
git remote -v
```

---

# Etapa 9 — Primeiro Push

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

Executar:

```bash
git push -u origin main
```
> ⚠️ Caso seja solicitada autenticação, utilize sua conta do GitHub para concluir o envio do repositório.
>
> Após o envio, acesse o GitHub e confirme se os arquivos foram enviados corretamente.

Arquivos esperados:

```
README.md
index.js
```

---

# Etapa 10 — Adicionar Colaboradores

> ⚠️ **Somente o Desenvolvedor A deverá executar esta etapa.**

No GitHub acessar:

```
Settings
```

↓

```
Collaborators
```

↓

```
Add people
```

Adicionar todos os integrantes da equipe.

---

# Etapa 11 — Aceitar Convite

Todos os integrantes deverão acessar o GitHub e aceitar o convite recebido para colaborar no repositório.

> Após todos aceitarem o convite, o Desenvolvedor A deverá confirmar se todos aparecem na lista de colaboradores do repositório.

---

# 🛠️ Parte 2 — Preparação da Equipe

Nesta etapa, cada integrante deverá obter uma cópia do repositório, criar sua própria branch e prepará-la para o desenvolvimento.

> ⚠️ **Importante**
>
> A partir desta etapa, **todos os integrantes** deverão executar os procedimentos em seus próprios computadores.

---

# Etapa 1 — Clonar o Repositório

Todos os integrantes deverão realizar o clone do repositório criado pelo Desenvolvedor A.

Executar:

```bash
git clone URL_DO_REPOSITORIO
```

Exemplo:

```bash
git clone URL_DO_REPOSITORIO
```

---

# Etapa 2 — Acessar a Pasta do Projeto

Após concluir o clone, acessar a pasta criada.

```bash
cd revisao-git-github
```

Verificar se os arquivos foram copiados corretamente.

Arquivos esperados:

```
README.md
index.js
```

---

# Etapa 3 — Verificar a Branch Atual

Executar:

```bash
git branch
```

Resultado esperado:

```
* main
```

---

# Etapa 4 — Criar a Branch Individual

Cada integrante deverá criar sua própria branch.

Utilize o seguinte padrão:

```
nome-sobrenome
```

Exemplos:

```
joao-silva
```

```
maria-souza
```

```
pedro-lima
```

Criar a branch:

```bash
git checkout -b nome-sobrenome
```

---

# Etapa 5 — Confirmar a Branch

Executar:

```bash
git branch
```

O resultado deverá destacar apenas sua própria branch.

Exemplo:

```
main

* joao-silva
```

---

# Etapa 6 — Publicar a Branch

Enviar a branch para o GitHub.

```bash
git push -u origin nome-sobrenome
```

Após o primeiro envio, os próximos comandos poderão utilizar apenas:

```bash
git push
```

---

# Etapa 7 — Atualizar o Repositório Local

Antes de iniciar o desenvolvimento, execute:

```bash
git pull
```

Caso o Git informe que o repositório já está atualizado, prossiga normalmente.

---

# Etapa 8 — Conferir no GitHub

Acessar o repositório no GitHub.

Selecionar a lista de branches.

Confirmar que todas as branches da equipe foram criadas.

Exemplo:

```
main

joao-silva

maria-souza

pedro-lima
```

---

# Etapa 9 — Verificar a Estrutura Inicial

Todos os integrantes deverão abrir o arquivo `index.js` e confirmar que ele foi clonado corretamente.

---

# 🛠️ Parte 3 — Desenvolvimento Individual

Nesta etapa, cada integrante desenvolverá sua parte do projeto em sua própria branch.

> ⚠️ **Importante**
>
> - Todas as alterações deverão ser realizadas exclusivamente na sua branch.
> - Ao finalizar cada atividade, execute o programa e verifique se o resultado está correto antes de realizar o commit.
> - Cada integrante deverá realizar exatamente **4 commits**, seguindo as mensagens informadas nesta atividade.
>
> - Os commits deverão ser realizados obrigatoriamente na ordem apresentada no enunciado.

---

# 💾 Fluxo de Versionamento

Ao concluir cada atividade, execute sempre a sequência abaixo.

Execute o programa e confirme que o resultado está correto.

```bash
git status
```

Adicionar as alterações.

```bash
git add .
```

Realizar o commit.

```bash
git commit -m "MENSAGEM_DO_COMMIT"
```

Enviar a alteração para o GitHub.

```bash
git push
```

> - Repita esse processo ao final de **cada atividade**.
> - Verifique no GitHub se o commit foi enviado corretamente antes de iniciar a próxima atividade.

---

# 👨‍💻 Desenvolvedor A

## 🎯 Desenvolvimento 1

Remover o primeiro elemento do array utilizando:

```javascript
shift()
```

Exibir o resultado utilizando:

```javascript
console.table()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: remove primeiro registro
```

---

## 🎯 Desenvolvimento 2

Adicionar um novo elemento no início do array utilizando:

```javascript
unshift()
```

Exibir o resultado utilizando:

```javascript
console.table()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: adiciona registro no início
```

---

## 🎯 Desenvolvimento 3

Localize um elemento existente no array utilizando:

```javascript
find()
```

Exiba apenas o elemento encontrado.

Exibir o resultado utilizando:

```javascript
console.log()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: localiza registro
```

---

## 🎯 Desenvolvimento 4

Ordenar o array em ordem alfabética utilizando:

```javascript
sort()
```

Exibir o resultado utilizando:

```javascript
console.table()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: ordena registros
```

---

# 👨‍💻 Desenvolvedor B

## 🎯 Desenvolvimento 1

Remover o último elemento do array utilizando:

```javascript
pop()
```

Exibir o resultado utilizando:

```javascript
console.table()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: remove último registro
```

---

## 🎯 Desenvolvimento 2

Adicionar um novo elemento ao final do array utilizando:

```javascript
push()
```

Exibir o resultado utilizando:

```javascript
console.table()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: adiciona registro ao final
```

---

## 🎯 Desenvolvimento 3

Crie um novo array contendo apenas parte dos registros utilizando:

```javascript
filter()
```

Exiba o novo array utilizando:

```javascript
console.table()
```

> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: filtra registros
```

---

## 🎯 Desenvolvimento 4

Inverter a ordem do array utilizando:

```javascript
reverse()
```

Exibir o resultado utilizando:

```javascript
console.table()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: inverte registros
```

---

# 👨‍💻 Desenvolvedor C

## 🎯 Desenvolvimento 1

Exibir a quantidade de elementos do array utilizando:

```javascript
length
```

Exibir o resultado utilizando:

```javascript
console.log()
```
> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: exibe quantidade de registros
```

---

## 🎯 Desenvolvimento 2

Transforme todos os elementos do array utilizando:

```javascript
map()
```

Exemplo:

- letras minúsculas para maiúsculas;
- adicionar um texto antes do nome;
- adicionar um texto após o nome.

Exiba o resultado utilizando:

```javascript
console.table()
```

> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: transforma registros
```

---

## 🎯 Desenvolvimento 3

Percorrer todos os elementos do array utilizando uma estrutura de repetição.

Utilize:

```javascript
for...of
```

Exibir cada elemento utilizando:

```javascript
console.log()
```

> - Execute o arquivo e confirme o resultado antes de realizar o commit.

Commit:

```text
feat: percorre registros
```

---

## 🎯 Desenvolvimento 4

Criar uma estrutura condicional utilizando:

```javascript
if
```

Verificar se o array possui pelo menos **5 elementos**.

Caso possua, exibir:

```text
O array possui quantidade suficiente de registros.
```

Caso contrário, exibir:

```text
O array possui quantidade insuficiente de registros.
```

Commit:

```text
feat: valida quantidade de registros
```

Ao concluir os quatro desenvolvimentos, confirme no GitHub se todos os commits foram enviados corretamente.

Caso algum commit ainda não tenha sido enviado, execute:

```bash
git push
```
# 🛠️ Parte 4 — Pull Request, Revisão e Merge

Nesta etapa, cada integrante deverá enviar suas alterações para revisão, analisar o código de outro integrante e concluir o Merge das alterações na branch **main**.

> ⚠️ **Importante**
>
> Nenhum Merge poderá ser realizado sem que o Pull Request tenha sido revisado por outro integrante da equipe.

---

# Etapa 1 — Conferir a Branch

Antes de criar o Pull Request, confirme se você está na sua própria branch.

Executar:

```bash
git branch
```

Resultado esperado:

```
main

* nome-sobrenome
```

---

# Etapa 2 — Conferir se Todos os Commits Foram Enviados

Executar:

```bash
git status
```

Resultado esperado:

```
nothing to commit, working tree clean
```

Caso exista alguma alteração pendente, execute:

```bash
git add .
git commit -m "mensagem"
git push
```

---

# Etapa 3 — Criar o Pull Request

Acesse o repositório no GitHub.

Selecione sua branch.

Clique em:

```
Compare & Pull Request
```

ou

```
New Pull Request
```

Configurar:

Base:

```
main
```

Compare:

```
sua-branch
```

Criar o Pull Request.

---

# Etapa 4 — Revisar Outro Pull Request

Cada integrante deverá revisar o Pull Request de outro integrante da equipe.

Durante a revisão, verificar:

- se os quatro commits foram realizados;
- se as mensagens dos commits estão corretas;
- se o código executa corretamente;
- se apenas as alterações previstas foram realizadas.

---

# Etapa 5 — Aprovar o Pull Request

Caso tudo esteja correto, aprovar o Pull Request.

No GitHub selecionar:

```
Review changes
```

↓

```
Approve
```

↓

```
Submit review
```

---

# Etapa 6 — Realizar o Merge

Após receber uma aprovação, realizar o Merge.

Selecionar:

```
Merge Pull Request
```

↓

```
Confirm Merge
```

---

# Etapa 7 — Atualizar a Branch Main

Após o Merge, todos os integrantes deverão retornar para a branch principal.

Executar:

```bash
git checkout main
```

Atualizar o repositório local.

```bash
git pull origin main
```

---

# Etapa 8 — Confirmar o Resultado

Executar:

```bash
git log --oneline
```

Confirmar que os commits da equipe estão presentes na branch **main**.

---

# Etapa 9 — Conferir no GitHub

Acessar a página principal do repositório.

Confirmar que:

- todos os Pull Requests foram concluídos;
- todos os commits estão presentes;
- a branch **main** contém todas as alterações da equipe.

---

# 🏁 Encerramento

Ao final desta atividade, a equipe deverá possuir:

- repositório GitHub criado;
- colaboradores adicionados;
- branches individuais;
- quatro commits por integrante;
- Pull Requests criados;
- Pull Requests revisados;
- Merge realizado;
- branch **main** atualizada;
- projeto funcionando corretamente.

Parabéns!

Nesta atividade vocês utilizaram o mesmo fluxo básico de versionamento empregado por equipes de desenvolvimento de software em projetos colaborativos.

# 📒 Dicionário

## 🆕 Criando um novo projeto com Git

Comandos utilizados quando iniciamos um projeto do zero.

| Comando                   | Finalidade                                        |
| ------------------------- | ------------------------------------------------- |
| `git init`                | Inicializa um novo repositório Git                |
| `git add .`               | Adiciona arquivos ao stage (área de preparação)   |
| `git commit -m`           | Cria uma nova versão do projeto com uma mensagem  |
| `git remote add origin`   | Conecta o projeto local a um repositório remoto   |
| `git remote -v`           | Mostra o repositório remoto configurado           |
| `git push -u origin main` | Envia a primeira versão para o repositório remoto |

---

## 📝 Semântica dos commits (Conventional Commits)

Prefixos utilizados para identificar o tipo de alteração realizada no projeto.

| Prefixo     | Finalidade                                                                 |
| ------------ | -------------------------------------------------------------------------- |
| `feat:`      | Quando se trata de uma nova funcionalidade (*feature*)                     |
| `fix:`       | Quando se trata de uma correção de bug                                     |
| `docs:`      | Quando se faz uma alteração na documentação                                |
| `style:`     | Quando se trata apenas de formatação de código (sem alterar comportamento) |
| `refactor:`  | Quando se trata de refatoração de código, sem alterar funcionalidades      |
| `test:`      | Quando se adiciona ou refatora testes, sem impacto no código de produção   |
| `chore:`     | Quando se atualizam tarefas, configurações, ferramentas ou dependências    |

---

## 📥 Clonando um projeto existente

Comandos utilizados quando um desenvolvedor entra em um projeto já existente.

| Comando         | Finalidade                                        |
| --------------- | ------------------------------------------------- |
| `git clone`     | Cria uma cópia local de um repositório remoto     |
| `git status`    | Verifica o estado atual do projeto                |
| `git remote -v` | Verifica o endereço do repositório conectado      |
| `git pull`      | Atualiza o projeto local com alterações do remoto |

---

## 📝 Trabalhando no dia a dia

Comandos utilizados durante o desenvolvimento de novas funcionalidades.

| Comando         | Finalidade                                             |
| --------------- | ------------------------------------------------------ |
| `git status`    | Verifica arquivos modificados ou pendentes             |
| `git add .`     | Prepara alterações para o commit                       |
| `git commit -m` | Registra uma nova alteração no histórico               |
| `git push`      | Envia alterações para o repositório remoto             |
| `git pull`      | Baixa alterações realizadas por outros desenvolvedores |

---

## 🌿 Desenvolvimento com Branches

Comandos utilizados no trabalho em equipe.

| Comando                             | Finalidade                           |
| ----------------------------------- | ------------------------------------ |
| `git branch`                        | Lista branches locais                |
| `git checkout`                      | Alterna entre branches existentes    |
| `git checkout -b`                   | Cria uma nova branch e já acessa ela |
| `git branch -a`                     | Lista branches locais e remotas      |
| `git push -u origin nome-da-branch` | Envia uma nova branch para o remoto  |

---

## 🔀 Integração de código

Comandos utilizados para unir trabalhos realizados por diferentes desenvolvedores.

| Comando      | Finalidade                                     |
| ------------ | ---------------------------------------------- |
| `git merge`  | Junta alterações de uma branch em outra        |
| `git pull`   | Atualiza a branch antes de realizar integração |
| `git status` | Verifica conflitos ou alterações pendentes     |

---

## 🔎 Análise e histórico

Comandos utilizados para entender o que aconteceu no projeto.

| Comando                           | Finalidade                                   |
| --------------------------------- | -------------------------------------------- |
| `git log`                         | Mostra histórico completo dos commits        |
| `git log --oneline`               | Mostra histórico resumido                    |
| `git log --graph --all --oneline` | Mostra graficamente o histórico das branches |
| `git diff`                        | Mostra diferenças entre versões              |

---

## 🧹 Organização e limpeza

Comandos utilizados após finalizar tarefas.

| Comando             | Finalidade                                         |
| ------------------- | -------------------------------------------------- |
| `git branch -d`     | Remove uma branch local após o merge               |
| `git branch -D`     | Força a remoção de uma branch local                |
| `git fetch`         | Busca informações do remoto sem aplicar alterações |
| `git fetch -p`      | Remove referências de branches remotas excluídas   |
| `git remote remove` | Remove a conexão com um repositório remoto         |

---
