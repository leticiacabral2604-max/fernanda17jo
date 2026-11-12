# Universo IF Avalia — MVP

Protótipo acadêmico de participação popular educativa para os 46 projetos da Mostra Nacional e da Mostra de Extensão do Universo IF (17 e 18/11/2026). Não é votação, julgamento ou premiação oficial do evento.

## Escopo
- React + Vite + TypeScript no GitHub Pages.
- Google Apps Script + Google Sheets para avaliação e agregados públicos.
- Modelo B: um token pode avaliar vários projetos, mas apenas uma vez cada projeto.
- Quatro critérios: criatividade (30%), clareza (30%), relevância (25%) e demonstração/resultados (15%).
- Ranking separado por modalidade; amostra mínima de cinco avaliações.

## Segurança e privacidade
Tokens são portadores, não identificadores pessoais. O backend deve armazenar apenas hash, verificar cada submissão sob LockService e nunca expor abas privadas. Não registrar IP, MAC, email ou nome. Não usar `no-cors` como confirmação de voto.

## Catálogo
Fonte versionada: `universo_if_catalogo_46_projetos_v1.0.json`. 46 IDs únicos: 24 NAC e 22 EXT. Títulos e metadados devem ser preservados conforme as fontes originais.

## Publicação
A publicação no GitHub Pages e a liberação anônima do Web App do Apps Script exigem aprovação operacional específica. Não considerar homologado sem submissão real, recibo e readback na planilha.

Consulte `docs/CONFIGURAR_GOOGLE.md`, `docs/TESTES_E_QA.md` e `docs/BACKLOG.md`.
