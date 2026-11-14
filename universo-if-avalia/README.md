# Universo IF Avalia — MVP publicado

Protótipo acadêmico de participação popular educativa para os 46 projetos da Mostra Nacional e da Mostra de Extensão do Universo IF (17 e 18/11/2026). **Não é votação, julgamento ou premiação oficial do evento.**

**Aplicativo publicado:** https://leticiacabral2604-max.github.io/fernanda17jo/

## Rodar localmente

```bash
cd universo-if-avalia
npm ci
npm run dev
```

Validação: `npm test`, `npm run typecheck` e `npm run build`.

## Funcionalidades
- React + Vite + TypeScript no GitHub Pages.
- Catálogo com 46 projetos (24 NAC e 22 EXT), pesquisa, filtros e detalhes.
- Google Apps Script + planilha Google Sheets privada para avaliações e ranking público.
- Modelo B: o mesmo código pode avaliar projetos diferentes, mas não repetir a avaliação do mesmo projeto.
- Critérios: criatividade (30%), clareza (30%), relevância (25%) e demonstração/resultados (15%).
- Ranking separado por modalidade; amostra mínima configurável, atualmente cinco avaliações.

## Segurança e privacidade
Códigos são portadores, não identificadores pessoais. O backend calcula SHA-256, utiliza `LockService`, idempotência e limitação temporária por hash. A planilha permanece privada; funções administrativas não devem ser invocáveis pelo navegador. O ranking público expõe apenas agregados. Não coletar IP, MAC, email ou nome. Não usar `no-cors` como confirmação de voto.

## Catálogo
Fonte versionada em `public/catalog.json.gz`, gerada do arquivo `universo_if_catalogo_46_projetos_v1.0.json` do kit. São 46 IDs únicos: 24 NAC e 22 EXT.

## Publicação e estado dos testes
- GitHub Pages publicado e workflow de build/deploy concluído com sucesso.
- Planilha privada e Web App integrados.
- Avaliação sintética válida, recibo, bloqueio de duplicata e limiar do ranking testados em ambiente controlado.
- Votação atualmente **FECHADA**.
- Teste manual no celular relatado como funcional.
- **Ainda não homologado integralmente**: permanecem verificações de token em projetos diferentes, token inválido com votação aberta, concorrência, acessibilidade e tamanhos de tela específicos. Consulte o plano de QA.

Documentos: [Configuração Google](./docs/CONFIGURAR_GOOGLE.md), [Testes e QA](./docs/TESTES_E_QA.md) e [Backlog](./docs/BACKLOG.md).
