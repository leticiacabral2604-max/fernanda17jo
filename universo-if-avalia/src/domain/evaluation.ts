export const WEIGHTS=[0.30,0.30,0.25,0.15] as const;
export type Scores=[number,number,number,number];
export function isValidScores(value:unknown):value is Scores{return Array.isArray(value)&&value.length===4&&value.every(n=>Number.isInteger(n)&&n>=1&&n<=5)}
export function weightedScore(scores:Scores):number{if(!isValidScores(scores))throw new Error('Informe quatro notas inteiras entre 1 e 5.');return Number(scores.reduce((sum,n,i)=>sum+n*WEIGHTS[i],0).toFixed(2))}
export function normalizeSearch(value:string):string{return value.normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').toLocaleLowerCase('pt-BR').trim()}
