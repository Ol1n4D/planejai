# 🎓 Desafio Santander Bootcamp 2026 - AI React Front-end


Desafio final proposto no curso Front End React do BootCamp Santander 2026 oferecido pela DIO - Digital Inovation One



# 💰 PlanejAI — Educador Financeiro Inteligente

Projeto desenvolvido durante o desafio **"Desenvolvendo Seu Educador Financeiro Inteligente com React e IA Generativa"**.

O objetivo foi criar uma aplicação capaz de ajudar o usuário a compreender melhor sua situação financeira por meio de uma simulação e de insights gerados por Inteligência Artificial.


🌐 **Site:**https://ol1n4d.github.io/planejai/#/

🔗 **Repositório:** https://github.com/Ol1n4D/planejai

---

## 🎯 Objetivo do projeto

O PlanejAI permite que o usuário informe alguns dados financeiros, como renda, despesas e dívidas, para realizar uma simulação.

A aplicação calcula uma estimativa de economia mensal e utiliza **IA generativa** para apresentar uma análise com sugestões personalizadas.

A ideia é transformar dados financeiros simples em informações que possam ajudar o usuário a tomar decisões mais conscientes.

---

## 🔄 Fluxo principal da aplicação

O fluxo principal funciona da seguinte maneira:

```text
Usuário
   ↓
Preenche os dados financeiros
   ↓
Realiza a simulação
   ↓
Aplicação calcula a economia mensal
   ↓
IA analisa os dados
   ↓
Insights financeiros são apresentados
   ↓
Resultado pode ser consultado no histórico
```

### Etapas

1. O usuário acessa a aplicação.
2. Preenche o formulário com seus dados financeiros.
3. A aplicação realiza o cálculo da situação financeira.
4. Os dados são utilizados para solicitar uma análise à IA.
5. O resultado apresenta os insights financeiros.
6. A simulação fica disponível no histórico.

---

## 📂 Organização do projeto

O projeto foi organizado de forma modular para facilitar a manutenção e evolução da aplicação.

```text
src/
├── assets/
├── components/
├── constants/
├── context/
├── data/
├── hooks/
├── pages/
├── services/
├── styles/
├── utils/
├── App.tsx
├── main.tsx
└── router.tsx
```

---


## 📂 Arquivos e pastas importantes

Durante a evolução do projeto, os principais arquivos que precisam ser revisados são:

### `src/pages/`

Contém as páginas principais da aplicação.

- `SimulationFormPage` — formulário da simulação.
- `SimulationResultsPage` — apresentação dos resultados.
- `SimulationHistoryPage` — histórico das simulações.

Essa organização ajuda a separar responsabilidades e evita concentrar toda a lógica da aplicação em um único componente.

### `src/services/`

Contém a integração com serviços externos.

O arquivo relacionado ao serviço de IA é responsável pela comunicação com o **Google Gemini**.

### `src/utils/`

Contém funções auxiliares utilizadas pela aplicação, incluindo a lógica dos cálculos da simulação.

### `src/components/`

Contém componentes reutilizáveis utilizados nas páginas.

### `src/router.tsx`

Define as principais rotas e o fluxo de navegação da aplicação.

---

## ✨ Melhoria implementada

Para evoluir o projeto sem alterar sua estrutura principal, a melhoria escolhida foi **[DESCREVA AQUI A MELHORIA QUE VOCÊ IMPLEMENTOU]**.

### Exemplo de melhoria

Uma melhoria simples seria adicionar uma validação mais clara no formulário financeiro.

A aplicação poderia verificar se:

- A renda foi preenchida;
- Os valores informados são maiores ou iguais a zero;
- As despesas não ultrapassam valores inválidos;
- O usuário recebeu uma mensagem clara quando houver algum problema no preenchimento.

Essa melhoria ajuda a evitar entradas inválidas e melhora a experiência do usuário.

---

## 🛠️ Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Google Gemini API
- Git
- GitHub

---

## ▶️ Como executar

### 1. Clone o projeto

```bash
git clone https://github.com/Ol1n4D/planejai.git
```

### 2. Acesse a pasta

```bash
cd planejai
```

### 3. Instale as dependências

```bash
pnpm install
```

### 4. Configure a API do Gemini

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GEMINI_API_KEY=SUA_CHAVE_DA_API
```

Não compartilhe sua chave da API publicamente.

### 5. Execute o projeto

```bash
pnpm dev
```

Depois, acesse o endereço apresentado pelo Vite no terminal.

---

## 🧪 Como testar

Para testar o fluxo principal:

1. Acesse a aplicação.
2. Preencha os dados financeiros.
3. Envie o formulário.
4. Confira o cálculo realizado.
5. Verifique os insights gerados pela IA.
6. Acesse o histórico e confira a simulação realizada.
7. Teste também a melhoria implementada.

---

## 📸 Demonstração Visual (Screenshots)

Alguns prints podem ser adicionados para demonstrar a evolução do projeto.

### Formulário

![Formulário da simulação](https://github.com/Ol1n4D/planejai/blob/main/src/screenshot/formulario.png)

### Resultado

![Resultado da simulação](https://github.com/Ol1n4D/planejai/blob/main/src/screenshot/resultado.png?raw=true)

### Histórico

![Histórico](https://github.com/Ol1n4D/planejai/blob/main/src/screenshot/historico.png?raw=true)

---

## 📚 O que aprendi

Durante o desenvolvimento do projeto, pude praticar conceitos importantes de desenvolvimento frontend.

Entre os principais aprendizados estão:

- Criação e reutilização de componentes React;
- Utilização de TypeScript;
- Gerenciamento de estado;
- Utilização de props;
- Navegação com React Router;
- Organização de um projeto React;
- Consumo de API;
- Integração com Inteligência Artificial;
- Validação e tratamento de dados;
- Utilização de Git e GitHub.

Também aprendi que uma boa aplicação não depende apenas de fazer o código funcionar. É importante pensar na experiência do usuário, organizar o código e testar os principais fluxos.

---

## 🚀 Evolução do projeto

A melhoria implementada neste desafio representa uma evolução sobre a versão inicial da aplicação.

O objetivo não foi modificar completamente o projeto, mas identificar uma oportunidade de melhoria, implementá-la e compreender como essa alteração impacta o funcionamento e a experiência do usuário.

Esse processo faz parte da minha evolução prática no desenvolvimento com **React, TypeScript e Inteligência Artificial**.

---

## 👨‍💻 Autor

**Danilo Silva**

Projeto desenvolvido para fins de estudo e evolução profissional na área de tecnologia.

[🔗 Acessar o projeto no GitHub](https://github.com/Ol1n4D/planejai)
