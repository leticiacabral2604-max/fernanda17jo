/** Regra pura Modelo B: unicidade por par token/projeto. */
export function canAcceptModelBVote(existing:ReadonlySet<string>,tokenHash:string,projectId:string):boolean{return !existing.has(tokenHash+':'+projectId)}
