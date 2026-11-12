# Configuração Google Apps Script + Sheets

1. Crie uma planilha privada na conta da equipe.
2. Abra Extensões → Apps Script e crie três arquivos: `Code.gs`, `CatalogData.gs` e `Index.html`, copiando os arquivos desta pasta.
3. No editor Apps Script, execute `setupUniverso_()`. As abas Projetos, Codigos, Avaliacoes e Configuracao serão criadas sem apagar dados existentes. Confira 46 projetos.
4. Gere tokens aleatórios de alta entropia (pelo menos 128 bits) em ferramenta segura sob controle do organizador. Calcule o SHA-256 hexadecimal de cada token fora do projeto e cadastre somente o hash com `registerTokenHash_(hash)` pelo editor. Não publique tokens ou hashes.
5. Para abrir/fechar a avaliação, execute `setVotingStatus_('ABERTO')` ou `setVotingStatus_('FECHADO')` no editor. Essas funções administrativas terminam em underscore para não serem invocáveis pelo navegador.
6. Implante como Web App executando como proprietário. Acesso anônimo só se a política institucional permitir. Mantenha a planilha privada.
7. Configure a variável de repositório `APPS_SCRIPT_URL` em Settings → Secrets and variables → Actions → Variables. Ela contém apenas a URL pública do Web App, não tokens.
8. Em Settings → Pages, selecione GitHub Actions como origem. A publicação continua manual pelo workflow `Publicar Universo IF Avalia no GitHub Pages` e só deve ser executada após aprovação da equipe.
9. Teste com token sintético: dois projetos diferentes devem aceitar; repetição do mesmo projeto deve ser recusada; confira o recibo e a linha em Avaliacoes.

O HTML Service usa `google.script.run`, evitando fingir que um POST cross-origin com `no-cors` foi confirmado. O servidor calcula o hash do token, aplica LockService, idempotência e limite temporário de tentativas; o ranking expõe somente agregados.

A criação da planilha, implantação, liberação anônima e votos de teste ainda não foram executados. Não abra a votação real antes de validar política institucional, código e QA independente.
