# PhotoRegister

### Aplicação de backend que permita aos usuários registrar suas fotos pessoais, visualizar uma lista de fotos, atualizar e por fim deletá-las com base na sua url.

## Tecnologias

- [NodeJS](https://nodejs.org/en/);
- [Express](https://expressjs.com);
- [Insomnia](https://insomnia.rest);
- [Knex](https://knexjs.org);
- [SQlite](https://www.sqlite.org/index.html);
- [Multer](https://github.com/expressjs/multer);

## Instalação

Garanta que os seguintes requisitos estão instalados na sua máquina:

- NodeJS(v14);
- npm;
- SQlite;

### Passos para configuração

#### 1. Clone o repositório

git clone https://...

#### 2. Navegue até o diretório do projet

cd photoRegister

#### 3. Instale as dependências

`npm install`

#### 4. Inicie o servidor de desenvolvimento

`npm run dev`

## Uso

#### 1. Registrar foto

Envie uma solicitação do tipo POST para o endpoint `/photos` enviando um arquivo do tipo imagem.

#### 2. Visualização da foto

Envie uma solicitação do tipo GET para o endpoint `/photos` para obter a lista das fotos registradas.

#### 3. Atualização das fotos

Envie uma solicitação do tipo PUT para o endpoint `/photos/url` para atualizar o arquivo da imagem.

#### 4. Deletar uma foto

Envie uma solicitação do tipo DELETE para o endpoint `/photos/url` para apagar a foto com respectivo url.
