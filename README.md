# Backend Globo Server API REST - Node.JS / Express

Este projeto foi desenvolvido com a utilização de NODE.JS | EXPRESS | MONGODB

## Início

Para iniciar, instalar as dependências e executar o projeto:

### `npm i`

### `npm run dev`

Após subir o Server, poderá fazer Requests:

### Criar Novo Usuário
###
### POST: `localhost:3333/users`
### body: `{ "email": "email@email",	"senha": "xxxxx",	"nivel_acesso": "administrador" }`

### Listar Usuários
###
### GET: `localhost:3333/users`

### Editar Usuários
###
### PUT: `localhost:3333/users/{id}`
### body: `{ "email": "email@email",	"nivel_acesso": "administrador" }`

### Deletar Usuários
###
### DELETE: `localhost:3333/users/{id}`
