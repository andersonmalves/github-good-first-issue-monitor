# GitHub Good First Issue Monitor

Este é um projeto simples desenvolvido em Node.js que monitora repositórios do GitHub em busca de issues marcadas como "good-first-issue". O objetivo deste projeto é estudar e aprender sobre o uso das GitHub Actions.

### Funcionalidades

- Verifica regularmente repositórios específicos em busca de novas issues marcadas como "good-first-issue".
- Registra as issues encontradas para garantir que apenas as novas issues sejam contabilizadas para fazer a notificação.
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

### Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue se encontrar algum problema ou tiver alguma sugestão de melhoria.

### Licença
Este projeto é licenciado sob a MIT License.