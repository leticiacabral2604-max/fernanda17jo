# Configuração Google Apps Script + Sheets

1. Na conta da equipe, crie uma planilha privada chamada Universo IF Avalia.
2. Crie as abas `Projetos`, `Codigos`, `Avaliacoes` e `Configuracao`.
3. Abra Extensões → Apps Script e copie os arquivos `Code.gs`, `CatalogData.gs` e `Index.html` do pacote local.
4. Configure o ID da planilha e os parâmetros no Script Properties; não coloque tokens válidos no repositório.
5. Cadastre somente hashes SHA-256 dos tokens aleatórios gerados pelo organizador.
6. Execute a função de inicialização e confira os cabeçalhos/contagens.
7. Implante como Web App: executar como proprietário. Só habilite acesso anônimo se a política institucional permitir.
8. Mantenha a planilha privada. A API pública deve retornar apenas agregados de ranking.
9. Teste um token sintético em dois projetos e repita o primeiro projeto; confirme um sucesso, um bloqueio e o readback na planilha.

Não usar `fetch(..., {mode: 'no-cors'})` como prova de gravação. A interface de voto/ranking usa HTML Service e `google.script.run` quando a integração direta do Pages não puder garantir recibo.

A criação da planilha, implantação, liberação anônima e votos de teste são operações da equipe; não foram executadas por esta integração.
