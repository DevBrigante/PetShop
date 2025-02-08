# ShopDogs 🐾

> Um e-commerce moderno de pet shop, com foco em usabilidade e interatividade.

## 📝 Sobre o Projeto

O **ShopDogs** é uma aplicação web construída com **React** e **TypeScript** que simula um e-commerce para pet shops. Os usuários podem visualizar produtos disponíveis, como rações e brinquedos, e adicionar ao carrinho. O projeto consome dados de uma API simulada com `JSON Server`.

---

## ⚠️ Aviso Importante

> **Este projeto depende do consumo de uma API simulada com `JSON Server`. Certifique-se de seguir as instruções para configurar e rodar o servidor localmente com o arquivo `db.json`, utilizando a porta `3001`. Sem isso, o site não funcionará corretamente.**

---

## Acesse o ShopDogs online

Clique no link abaixo para acessar o projeto:
**[ShopDogs - Acesse aqui](https://shop-dogs-umber.vercel.app/)**

---

## 🌟 Funcionalidades

- Listagem de produtos consumidos de uma API simulada.
- Adicionar produtos ao carrinho de compras.
- Atualização dinâmica do estado global utilizando Context API.
- Interface totalmente responsiva, adaptada para dispositivos móveis e desktops.

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Garantia de tipagem estática para maior segurança e manutenção do código.
- **Tailwind CSS**: Framework para estilização rápida e eficiente com classes utilitárias.
- **Context API**: Gerenciamento de estado global para compartilhamento de dados entre componentes.
- **React Hooks**: Utilização de `useState`, `useEffect`, e outros hooks.
- **JSON Server**: API simulada para manipulação de dados.

---

## 🔄 Configurando o Projeto e Consumindo a API

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/shopdogs.git

2. **Navegue até o diretório do projeto:**
    ```bash
    cd shopdgos

3. **Instale as dependências:**
    ```bash
    npm install

4. **Configure o JSON Server:**
    ```bash
    npm install -g json-server
    json-server --watch db.json

5. **Inicie o projeto:**
    ```bash
    npm run dev

