# 🏥 Sistema de Gestão de Saúde - SUS

Este projeto é um sistema web desenvolvido com o objetivo de simular uma plataforma de gestão de serviços de saúde pública, inspirado no SUS.  
O sistema organiza informações sobre serviços, unidades de saúde e novos recursos disponíveis, utilizando uma interface web dinâmica.

---

## 🚀 Tecnologias utilizadas

- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- :contentReference[oaicite:2]{index=2}
- HTML5
- CSS3
- JSON

---

## 📁 Estrutura do projeto
sistema-saude-sus/
│
├── dados/
│ ├── ofertas.json
│ ├── novos.json
│ └── seminovos.json
│
├── public/
│ ├── css/
│ └── imagens/
│
├── views/
│ ├── index.ejs
│ ├── quemsou.ejs
│ ├── ofertas.ejs
│ ├── novos.ejs
│ └── seminovos.ejs
│
├── app.js
└── package.json


---

## 📌 Funcionalidades

- Página inicial com apresentação do sistema e navegação
- Página “Quem Sou” com informações do aluno e objetivo do projeto
- Página de **Ofertas** com serviços de saúde disponíveis (via JSON)
- Página de **Novos recursos** (equipamentos, unidades e medicamentos)
- Página de **Seminovos** com auditoria de unidades de saúde
- Layout responsivo com cards e navegação estilizada

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
Acesse a pasta do projeto:
cd sistema-saude-sus
Instale as dependências:
npm install
Execute o servidor:
node app.js
Acesse no navegador:
http://localhost:6200
🧠 Objetivo do projeto

O sistema tem como objetivo demonstrar como a tecnologia pode auxiliar na organização e digitalização de serviços de saúde pública, facilitando o acesso à informação e melhorando a gestão de recursos.
👨‍💻 Autor

Desenvolvido por: Mariana Duarte
Projeto acadêmico para fins educacionais.

📄 Licença

Este projeto é de uso educacional e não possui fins comerciais.
