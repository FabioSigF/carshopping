# AutoClub - Since 2023 (FullStack)

![screencapture-carshopping-vercel-app-2024-10-02-15_58_18](https://github.com/user-attachments/assets/a1d69439-04e8-47ff-8230-5d25f92d8751)

## Introdução

O AutoClub é indicado para amantes de veículos que buscam alugar, vender ou comprar um carro. Através do site, o cliente pode verificar todas as informações pertinentes sobre o veículo, fazer ofertas e criar o seu próprio anúncio.

## Tecnologias Utilizadas

Para desenvolver o Front-End do projeto, utilizei:
- React JS: framework para desenvolvimento;
- JavaScript;
- ContextAPI: gerenciamento de estados;
Estilos:
- Styled Components: personalização de estilos dos componentes;
- SwiperJS: Componentes de Slider;
BackEnd e API:
- Firebase: FireStore e Authentication;

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/FabioSigF/carshopping
cd carshopping
```

2. Instale as dependências:

```bash
npm install
```

3. Faça a configuração do Firease. No arquivo `firebase/config.js`, você deve inserir as informações do seu projeto no firebase:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
```

Cada informação é disponibilizada pelo Firebase quando você cria o projeto. Para mais informações, consulte a documentação oficial.

4. Agora, basta rodar a aplicação:

```bash
npm start
```


## Funcionalidades

### Autenticação de autorização do usuário

Feita através do módulo de Authentication do Firebase. Por enquanto, os métodos de login e register são apenas por email e senha. 

![scrnli_68t489V147F0Yq](https://github.com/user-attachments/assets/db72859e-1d20-4868-a7fa-3e20d53b4a21)

Em `hooks/useAuthentication.js`, existe o código responsável pelas verificações de autenticação e autorização.

Esse hook é usado em `App.js`. As rotas também são configuradas nesse arquivo, separadas entre rotas livres (usuários não autenticados podem utilizar) e rotas reestritas para usuários autenticados.

### Anúncios de veículos

![scrnli_6VVCmurjK7a0qQ](https://github.com/user-attachments/assets/a1bbb4aa-2d90-4f7d-b585-5970982082d9)

Os anúncios são criados seguindo o seguinte modelo:

|Atributo | Tipo | Valor |
|-|-|-|
| uid | UUID | Id do anúncio |
| contact | String | Número de telefone
| description | String | Descrição do anúncio |
| price | Float | Preço do veículo |
| brand | String | Marca do carro |  
| vehicleType | String | Tipo de veículo |
| model | String | Modelo do veículo |
| features | Array de String | Características adicionais do veículo |
| externalColor | String | Cor externa do veículo |
| engine | String | Motor do carro |
| fuelType | String | Tipo de combustível do veículo |
| mileage | Float | Quilometragem do veículo |
| transmission | String | Modelo de transmissão do carro |
| urlImage | String | Url da imagem |
| year | Integer | Ano do veículo |
| city | String | Nome da cidade |
| state | String | Estado que o veículo está sendo vendido |
| createdAt | Date | Data de criação do anúncio |
| createdBy | String | Nome do dono do anúncio |

