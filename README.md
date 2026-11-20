# Todo List Page

Lista de tarefas simples feita em React, onde o usuário acompanha suas tarefas diárias.

## Funcionalidades
- Criação de tarefas
- Remoção de tarefas
- Marcar tarefas como concluídas
- Atribuir uma categoria a cada tarefa (Trabalho, Pessoal ou Estudos)

## Tecnologias
- HTML5
- CSS
- JavaScript
- React e React DOM
- Vite (ferramenta que roda e empacota o projeto)

## Como rodar
Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

Na pasta do projeto, execute:

```bash
npm install
npm run dev
```

Abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Limitações
- As tarefas ficam guardadas apenas na memória da página (`useState`). Ao recarregar, a lista volta para as tarefas de exemplo.

## Próximos passos
1. Salvar as tarefas no navegador com `localStorage`, para não se perderem ao recarregar.
2. Futuramente, guardar em um banco de dados, por meio de uma API.
3. Melhorar o visual do front-end.