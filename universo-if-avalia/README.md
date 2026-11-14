# Universo IF Avalia — MVP

Protótipo acadêmico de participação popular educativa para os 46 projetos da Mostra Nacional e da Mostra de Extensão do Universo IF (17 e 18/11/2026). Não é votação, julgamento ou premiação oficial do evento.

## Rodar localmente

```bash
cd universo-if-avalia
npm install
npm run dev
```

Validação: `npm test`, `npm run typecheck` e `npm run build`.

## Escopo
- React + Vite + TypeScript no GitHub Pages.
- Google Apps Script + Google Sheets para avaliação e agregados públicos.
- Modelo B: um token pode avaliar vários projetos, mas apenas uma vez cada projeto.
- Quatro critérios: criatividade (30%), clareza (30%), relevância (25%) e demonstração/resultados (15%).
- Ranking separado por modalidade; amostra mínima configurável (padrão cinco).

## Segurança e privacidade
Tokens são portadores, não identificadores pessoais. O backend calcula hash SHA-256, usa LockService, idempotência e limitação temporária por hash. A planilha deve permanecer privada; funções administrativas não são invocáveis pelo navegador. O ranking público expõe apenas agregados. Não registrar IP, MAC, email ou nome. Não usar `no-cors` como confirmação de voto.

## Catálogo
Fonte versionada em `public/catalog.json.gz`, gerada do arquivo `universo_if_catalogo_46_projetos_v1.0.json` do kit. São 46 IDs únicos: 24 NAC e 22 EXT. O teste automatizado valida todos os campos obrigatórios.

## Publicação
A publicação no GitHub Pages e a liberação anônima do Web App exigem aprovação operacional específica. O workflow Pages é manual. Não considerar homologado sem submissão real, recibo e readback na planilha.

Consulte `docs/CONFIGURAR_GOOGLE.md`, `docs/TESTES_E_QA.md` e `docs/BACKLOG.md`.
