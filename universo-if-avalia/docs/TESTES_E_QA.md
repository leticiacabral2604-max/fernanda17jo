# Plano de testes e QA — Universo IF Avalia

## Critérios de aceitação
- Catálogo: 46 IDs únicos (24 NAC e 22 EXT), busca sem acentos, filtros por modalidade, área e data.
- Notas inteiras de 1 a 5 nos quatro critérios; pesos de 30%, 30%, 25% e 15%.
- Rejeição de notas inválidas, projetos inexistentes e repetição do mesmo código no mesmo projeto.
- Modelo B: um código autorizado pode avaliar projetos diferentes.
- Ranking por modalidade, com mínimo de cinco avaliações válidas por projeto para classificação.

## Evidências confirmadas em 14/11/2026
- GitHub Pages publicado em https://leticiacabral2604-max.github.io/fernanda17jo/ ; execução de publicação #1: build e deploy concluídos com sucesso (https://github.com/leticiacabral2604-max/fernanda17jo/actions/runs/43616275733).
- Interface do GitHub Pages aberta no navegador e catálogo exibindo 46/46 projetos.
- Navegação de um projeto no GitHub Pages até o Web App do Apps Script com seleção automática de EXT-001.
- Planilha privada criada e conectada ao Web App; consulta ao ranking retorna EXT-001 com uma avaliação, média 4,55 e situação «Aguardando amostra mínima».
- Em teste controlado anterior, avaliação válida de EXT-001 (notas 5, 4, 5, 4) produziu média ponderada 4,55 e recibo; repetição do mesmo código/projeto foi recusada.
- Teste controlado do mínimo de cinco avaliações: quatro linhas sintéticas adicionais temporárias permitiram verificar a classificação; as quatro linhas foram removidas, preservando somente a avaliação original de teste.
- Votação foi devolvida ao estado FECHADO após os testes.
- CI do pull request #1 passou antes da integração; 10 testes automatizados foram registrados no histórico da PR.

## Testes ainda não comprovados
- Mesmo código autorizado em **dois projetos diferentes**, com confirmação de dois recibos e linhas distintas.
- Fluxo completo com token inválido enquanto a votação está ABERTA; testar apenas em ambiente controlado.
- Verificação sistemática de layout em 320, 375, 768 e 1280 px; Chrome Android e Safari iOS quando disponíveis.
- Navegação por teclado, foco visível, contraste, mensagens de erro, alvos de toque e leitor de tela.
- Testes de concorrência com submissões simultâneas e idempotência em condições de corrida.
- Revisão independente por outro integrante ou responsável, se exigida pelo roteiro original.

## Roteiro de integração controlada
1. Manter a planilha privada e o caráter de protótipo acadêmico explícito.
2. Abrir o GitHub Pages em janela anônima e verificar catálogo, filtros, detalhes e navegação para avaliação.
3. Em período autorizado de teste, abrir temporariamente a votação e usar códigos sintéticos.
4. Avaliar dois projetos diferentes com o mesmo código; verificar recibos e duas linhas na aba Avaliacoes.
5. Tentar novamente um dos pares código/projeto e confirmar bloqueio sem linha duplicada.
6. Testar token inválido com votação aberta e verificar rejeição sem gravação.
7. Fechar a votação e remover somente dados sintéticos criados especificamente para o teste, após registrar evidências.

## Cuidados
Não publicar códigos de avaliação, hashes ou dados da planilha. Não confundir votos sintéticos com participação real. A publicação do catálogo não autoriza votação oficial do evento.
