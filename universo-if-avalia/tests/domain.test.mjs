import test from 'node:test';import assert from 'node:assert/strict';import{weightedScore,isValidScores,normalizeSearch}from'../src/domain/evaluation.ts';import{canAcceptModelBVote}from'../src/domain/voting.ts';
test('ponderação [4,5,4,3] resulta 4,15',()=>assert.equal(weightedScore([4,5,4,3]),4.15));
test('notas devem ser quatro inteiros de 1 a 5',()=>{assert.equal(isValidScores([1,2,3,4]),true);for(const v of [[1,2,3],[1,2,3,6],[1,2,3,4.5],[1,2,3,0]])assert.equal(isValidScores(v),false)});
test('busca ignora acentos',()=>assert.equal(normalizeSearch('Consciência Climática'), 'consciencia climatica'));
test('Modelo B aceita mesmo token em projetos diferentes',()=>assert.equal(canAcceptModelBVote(new Set(['h:NAC-001']),'h','NAC-002'),true));
test('Modelo B bloqueia repetir o mesmo token no mesmo projeto',()=>assert.equal(canAcceptModelBVote(new Set(['h:NAC-001']),'h','NAC-001'),false));
