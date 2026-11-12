# Status de execução

- G0 GitHub/repositório/branch/autorização: PASS. Repositório autorizado: `leticiacabral2604-max/fernanda17jo`; branch `feat/universo-if-avalia-mvp`; PR draft #1 aberto.
- G1 Catálogo: PASS. JSON fonte compactado e versionado no frontend; 46 projetos únicos, 24 NAC e 22 EXT; todos os campos obrigatórios preservados e testados.
- G2 Interface: PASS. React/Vite/TypeScript, busca sem acentos, filtros, detalhes, navegação responsiva e ligação opcional ao Web App. GitHub Actions executou `npm ci`, `npm run typecheck`, `npm test` e `npm run build` com sucesso no commit `b2d0b74`.
- G3 Apps Script e regra Modelo B offline: PASS. Backend com hash SHA-256, funções administrativas privadas, validação, LockService, idempotência, limitação temporária, ranking agregado e teste de sintaxe. 10/10 testes automatizados passaram no GitHub Actions, incluindo sintaxe do Apps Script/HTML Service, catálogo, nota 4,15, validação, busca sem acentos e regra B. Ainda sem execução contra uma planilha real.
- G4 Voto real + recibo + readback + duplicidade: BLOCKED_CONNECTED_VOTE. Requer planilha da equipe, implantação do Web App, token sintético e autorização para gravar voto de teste.
- G5 GitHub Pages: workflow manual de publicação preparado em `.github/workflows/pages.yml`; ainda não executado nem publicado. BLOCKED_DEPLOY até aprovação explícita de publicação.
- G6 QA independente: NOT_RUN; requer segunda pessoa e smartphone real.

Não declarar PUBLICADO_HOMOLOGADO sem teste real em navegador, recibo do servidor e readback da planilha.
