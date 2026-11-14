# Configuração Google Apps Script + Sheets

## Estado atual — 14/11/2026
- Planilha privada criada e integrada ao Google Apps Script.
- Abas de dados: `Projetos`, `Codigos`, `Avaliacoes` e `Configuracao`.
- Catálogo de 46 projetos carregado (24 NAC e 22 EXT).
- Web App implantado e integrado ao GitHub Pages.
- Variável de repositório `APPS_SCRIPT_URL` configurada.
- GitHub Pages publicado pelo workflow manual de Actions.
- Testes controlados de avaliação válida, bloqueio de duplicata e mínimo de cinco avaliações no ranking executados; evidências em `TESTES_E_QA.md`.
- Configuração de votação: **FECHADO**. A planilha permanece privada.

## Endereços
- Aplicação: https://leticiacabral2604-max.github.io/fernanda17jo/
- Web App: https://script.google.com/macros/s/AKfycbyoPqcur1AiBBYa9CdEdTD2Frqtby4UUQ-BxOHCv8Be_zDu_DHpN_Zh_bULiDC2IYfI/exec

## Procedimento para reproduzir a instalação
1. Crie uma planilha privada na conta da equipe.
2. Abra Extensões → Apps Script e crie os arquivos `Code.gs` (ou `Código.gs`), `CatalogData.gs` e `Index.html`, conforme o código do projeto.
3. Execute `setupUniverso_()` no editor. Confirme as abas e os 46 projetos sem sobrescrever dados existentes.
4. Gere códigos individuais aleatórios de alta entropia (pelo menos 128 bits) sob controle do organizador. Calcule SHA-256 hexadecimal e cadastre apenas os hashes por `registerTokenHash_(hash)`. Nunca publique códigos ou hashes.
5. Abra ou feche a avaliação somente pelo editor com `setVotingStatus_('ABERTO')` ou `setVotingStatus_('FECHADO')`. As funções administrativas não devem ficar expostas ao navegador.
6. Implante como Web App executando como proprietário. Acesso anônimo apenas se autorizado pela instituição; mantenha a planilha privada.
7. Em Settings → Secrets and variables → Actions → Variables, configure `APPS_SCRIPT_URL` com a URL do Web App (sem códigos).
8. Em Settings → Pages, selecione GitHub Actions. Execute manualmente o workflow de publicação após revisão.
9. Em teste controlado, valide: código em dois projetos distintos, duplicata no mesmo projeto, token inválido, recibo e registro na planilha. Resta executar integralmente esse cenário.

## Segurança
O HTML Service usa `google.script.run`. O backend calcula hashes SHA-256, utiliza `LockService`, idempotência e limitação temporária de tentativas por hash; o ranking público apresenta agregados. Não use `no-cors` como confirmação de envio.

Este é um protótipo acadêmico, não uma votação oficial. Não abrir votação pública sem autorização e QA final.
