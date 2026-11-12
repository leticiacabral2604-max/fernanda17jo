# Plano de testes e QA

## Domínio
- Catálogo: 46 IDs únicos, 24 NAC e 22 EXT.
- Busca sem acentos e filtros por modalidade, área e data.
- Nota ponderada: [4,5,4,3] = 4,15.
- Rejeitar notas vazias, decimais, fora de 1–5 e projetos inexistentes.
- Modelo B: mesmo token em dois projetos diferentes é aceito; repetição do par token/projeto é rejeitada.

## Integração real obrigatória
1. Abrir GitHub Pages em navegador anônimo.
2. Consultar ranking sem revelar dados privados.
3. Enviar avaliação válida com token sintético autorizado.
4. Receber recibo inequívoco do servidor.
5. Conferir linha na aba Avaliacoes.
6. Repetir o mesmo token/projeto e confirmar bloqueio sem segunda linha.
7. Usar o mesmo token em outro projeto e confirmar aceitação.
8. Verificar atualização do ranking após cinco votos válidos por projeto.

## Responsividade e acessibilidade
Validar 320, 375, 768 e 1280 px; teclado, foco, contraste, mensagens de erro, alvos de toque e leitor de tela. Registrar Chrome Android e Safari iOS quando disponíveis.

## Evidência atual
7 testes automatizados de catálogo/domínio passaram no ambiente de execução. `npm ci` não executou porque o pacote local ainda não possui package-lock.json; build/typecheck e QA em dispositivos permanecem pendentes. Não houve voto real nem readback de planilha.
