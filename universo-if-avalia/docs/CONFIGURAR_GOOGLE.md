# Configuração Google Apps Script + Sheets

1. Crie uma planilha privada na conta da equipe.
2. Abra Extensões → Apps Script e crie três arquivos: `Code.gs`, `CatalogData.gs` e `Index.html`, copiando os arquivos desta pasta.
3. Execute `setupUniverso()` e confira 46 linhas em Projetos. As abas Codigos, Avaliacoes e Configuracao são criadas automaticamente.
4. Gere tokens aleatórios fora deste repositório. Cadastre somente seus hashes SHA-256 hexadecimais usando `registerTokenHash(hash)` pelo editor do Apps Script. Não compartilhe hashes ou códigos publicamente.
5. Para abrir/fechar, execute `setVotingStatus('ABERTO')` ou `setVotingStatus('FECHADO')`.
6. Implante como Web App executando como proprietário. Acesso anônimo só se a política institucional permitir. Mantenha a planilha privada.
7. Teste com token sintético: dois projetos diferentes devem aceitar; repetição do mesmo projeto deve ser recusada; confira o recibo e a linha em Avaliacoes.

O HTML Service usa `google.script.run`, evitando fingir que um POST cross-origin com `no-cors` foi confirmado. Ainda não foi criada planilha, implantado Web App ou gravado voto de teste.
