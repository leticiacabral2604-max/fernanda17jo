# Status de execução

- G0 GitHub/repositório/branch/autorização: PASS. Repositório autorizado: `leticiacabral2604-max/fernanda17jo`; branch `feat/universo-if-avalia-mvp`; PR draft #1 aberto.
- G1 Catálogo: PASS. JSON fonte compactado e versionado no frontend; 46 projetos únicos, 24 NAC e 22 EXT; todos os campos obrigatórios preservados.
- G2 Interface: implementação React/Vite/TypeScript com busca sem acentos, filtros, detalhes, navegação responsiva e ligação opcional ao Web App. Testes locais do pacote de implementação: 7/7 PASS. Build/typecheck do commit remoto: NOT_RUN, pois o ambiente local não conseguiu instalar dependências do npm e o Actions ainda não reportou execução.
- G3 Apps Script: implementação em `apps-script/` com planilha privada, hashes SHA-256, funções administrativas privadas, validação, LockService, idempotência, limitação temporária e regra Modelo B; não executado contra uma planilha real.
- G4 Voto real + recibo + readback + duplicidade: BLOCKED_CONNECTED_VOTE. Requer planilha da equipe, implantação do Web App, token sintético e autorização para gravar voto de teste.
- G5 GitHub Pages: workflow manual de publicação preparado em `.github/workflows/pages.yml`; ainda não executado nem publicado. BLOCKED_DEPLOY até CI aprovado e aprovação explícita de publicação.
- G6 QA independente: NOT_RUN; requer segunda pessoa e smartphone real.

Não declarar PUBLICADO_HOMOLOGADO sem teste real em navegador, recibo do servidor e readback da planilha.
