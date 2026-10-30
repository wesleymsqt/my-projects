# Buy Blue

Aplicativo móvel desenvolvido em **React Native** com **Expo** para gerenciamento de listas de compras. O objetivo é oferecer uma interface limpa e intuitiva para adicionar produtos, marcar itens como comprados e filtrar a visualização.

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React Native](https://lucide.dev/) (Ícones)

## 📱 Funcionalidades

- **Adicionar Produto:** Insira novos itens na sua lista de compras.
- **Marcar como Concluído:** Toque no item para alterar o status entre "Pendente" e "Comprado".
- **Filtragem:** Visualize apenas itens pendentes ou itens já comprados.
- **Remover Item:** Pressione e segure (long press) ou clique no ícone de lixeira para remover um item.
- **Limpar Lista:** Botão para excluir todos os itens da lista de uma vez.

## 📦 Como rodar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Android Studio](https://developer.android.com/studio) (para emulador Android)
- Ou o aplicativo **Expo Go** no seu celular físico.

### Passo a passo

1. **Clone o projeto**

   `````bash
   git clone https://github.com/wesleymsqt/app-buyBlue.git

   `````

2. **Acesse a pasta do projeto**

   ```bash
   cd app-buyBlue
   ```

3. **Instale as dependências**

   ```bash
   npm install
   ```

4. **Execute o projeto**

   Para rodar no Android (Emulador ou USB):

   ```bash
   npm run android
   ```

   Para rodar no iOS (Mac apenas):

   ```bash
   npm run ios
   ```

   Para iniciar apenas o servidor Metro:

   ```bash
   npm start
   ```

## 📂 Estrutura do Projeto

```
src/
  ├── app/             # Telas da aplicação (Home)
  ├── assets/          # Imagens e ícones
  ├── components/      # Componentes reutilizáveis (Button, Input, Filter, etc.)
  └── types/           # Definições de tipagem TypeScript
```

## 📝 Licença

Esse projeto está sob a licença MIT.
