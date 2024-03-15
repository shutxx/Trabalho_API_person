# Trabalho_API_person

### Projeto de Gerenciamento de Pessoas
- Este é um projeto de exemplo para demonstrar um sistema simples de gerenciamento de pessoas utilizando Node.js, Express e Sequelize.

### Instalação
- **Clone o repositório:** git clone https://github.com/shutxx/Trabalho_API_person
- **Entre no diretório do projeto:** cd nome-do-repositorio
- **Instale as dependências:** npm install

### Executando o Projeto
- **Execute o servidor:** npm start
- **O servidor estará acessível em http://localhost:3000.**

### Endpoints
- **GET " /pessoas ":** Retorna todas as pessoas cadastradas.
- **GET " /pessoas/cpf/:cpf ":** Retorna os dados de uma pessoa específica.
- **POST " /pessoas ":** Cria uma nova pessoa.
- **PUT " /pessoas/:id ":** Atualiza os dados de uma pessoa existente.
- **DELETE " /pessoas/:id ":** Remove uma pessoa do sistema.

### Exemplo de Dados

```json
{
"Nome": "Exemplo",
"Email": "exemplo@example.com",
"Telefone": "5555555555",
"DataNascimento": "2000-01-01",
"CPF": "123.456.789-00",
"Status": "ACTIVE"
}
```
[Baixar postman collection](https://github.com/shutxx/Trabalho_API_person/blob/main/APIperson.postman_collection.json)