# GitHub Good First Issue Monitor

Este é um projeto simples desenvolvido em Node.js que monitora repositórios do GitHub em busca de issues marcadas como "good-first-issue". O objetivo deste projeto é estudar e aprender sobre o uso das GitHub Actions.

### Funcionalidades

- Verifica regularmente repositórios específicos em busca de novas issues marcadas como "good-first-issue".
- Registra as issues encontradas para garantir que apenas as novas issues sejam contabilizadas para fazer a notificação.
- Envia email com as issues encontradas.
- Salva logs da execução do monitor em um arquivo.

### Uso

1. Clone este repositório:

```bash
git clone https://github.com/andersonmalves/github-good-first-issue-monitor.git
cd github-good-first-issue-monitor
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o monitor:

```bash
node src/index.js
```

O monitor irá verificar os repositórios configurados e exibirá as novas issues marcadas como "good-first-issue", se houver.

### Configuração

Edite o arquivo monitor.js para adicionar ou remover os repositórios que deseja monitorar:

```js
const repositories = [
    'usuario/repo1',
    'usuario/repo2',
    // Adicione mais repositórios conforme necessário
];
```

### Configuração para envio de e-mails

Para que o envio de e-mails seja realizado com sucesso, você precisa configurar as credenciais necessárias como secrets em seu repositório do GitHub. Siga estas etapas:

1. **Crie uma senha de aplicativo para seu e-mail:**
   - Siga as instruções do provedor de e-mail para criar uma senha de aplicativo. Aqui estão algumas instruções para alguns provedores comuns:
     - [Gmail](https://atendimento.tecnospeed.com.br/hc/pt-br/articles/4418115119127-Como-criar-senha-de-aplicativo-para-email)

2. **Configure os secrets no repositório GitHub:**
   - Acesse as configurações do seu repositório no GitHub.
   - Navegue até a seção "Secrets" ou "Segredos" nas configurações do repositório.
   - Adicione os seguintes secrets:
     - `SMTP_USER`: Seu endereço de e-mail.
     - `SMTP_PASS`: A senha de aplicativo que você criou para o seu e-mail.

Após configurar os secrets, o GitHub Actions poderá acessar essas credenciais de forma segura para enviar e-mails durante a execução do workflow.

Para obter mais informações sobre o uso de secrets no GitHub Actions, consulte a [documentação oficial](https://docs.github.com/pt/actions/security-guides/using-secrets-in-github-actions).

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue se encontrar algum problema ou tiver alguma sugestão de melhoria.

### Licença
Este projeto é licenciado sob a MIT License.
